const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const messageRoutes = require("./routes/messages");
const app = express();
const socket = require("socket.io");

//Archivo de config
require("dotenv").config();

app.use(cors());
app.use(express.json());

//Conexion a la base de datos Mongodb
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Conexion con MongoDB correctamente establecida");
}).catch((err) => {
  console.log(err.message);
});

//Rutas
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

//Inicia servidor escucha en puerto especifico
const server = app.listen(process.env.PORT || 3001, () =>
  console.log(`Servidor iniciado en puerto: ${process.env.PORT}`)
);

const domainsFromEnv = process.env.CORS_DOMAINS || "";

const whitelist = domainsFromEnv.split(",").map(item => item.trim());

const io = socket(server, {
  cors: {
    origin: function (origin, callback) {
      if (!origin || whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error("No permitido por CORS"))
      }
    },
    credentials: true
  },
});

global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;

  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.msg);
    }
  });
});
