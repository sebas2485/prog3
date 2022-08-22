/* packages */
const mongoose = require("mongoose")
const config = require("config")

const mongodbinfo = config.get("db-connections.mongodb")

const connStr=`mongodb+srv://${mongodbinfo.user}:${mongodbinfo.password}@${mongodbinfo.host}/?retryWrites=true&w=majority`

module.exports = () => {
    mongoose.connect(connStr);

    mongoose.connection.on("connected", () => {
        console.log("mongodb server connceted!")
    })

    mongoose.connection.on("disconnected", () => {
        console.log("mongodb server disconnceted!")
    })

    mongoose.connection.on("error", () => {
        console.log("mongodb server connceted error!")
    })

    mongoose.connection.on("SIGNIT", () => {
        mongoose.connection.close(() =>{
            console.log("mongodb server shutting down!")
        })
    })
}