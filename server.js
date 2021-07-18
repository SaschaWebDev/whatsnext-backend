const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const logger = require("morgan");
const server = express();
require("dotenv").config();

const whitelist = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://www.whatsnext-frontend.vercel.app",
  "https://whatsnext-frontend.vercel.app",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(console.log("Not allowed by CORS", origin));
    }
  },
};

server.options("*", cors());
server.use(cors(corsOptions));
server.use(helmet());
server.use(express.json());
server.use(logger("dev"));

server.get("/", function rootHandler(req, res) {
  res.send(
    `Welcome to the ${process.env.DEPLOYMENT} environment API of whatsnext-backend!`
  );
});

/* const ChatRouter = require('./api/resources/chats/chat-router');

server.use('/v1/chats', ChatRouter); */

module.exports = server;
