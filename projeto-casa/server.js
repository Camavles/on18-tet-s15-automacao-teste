require("dotenv").config()

const app = require("./src/app")

const PORT = process.env.PORT

// app.get("/", function(request, response) {
//     response.send({
//     message: "primeiro get"})
// })

app.listen(PORT, ()=> console.log(`Rodando na porta ${PORT}`))


