const express = require("express")
const app = express()
const server = require("http").Server(app)
const io = require("socket.io")(server)

app.use(express.static(__dirname + "/public"))
app.get("/", (request, response) => response.render("index.html"))

io.on("connection", socket => {
    console.log("client connected")

    socket.on("message", data => {
        io.emit("input", data)
    })
})

server.listen(process.env.PORT || 5000, () => console.log("server listening"))