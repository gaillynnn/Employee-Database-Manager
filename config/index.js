const { Pool } = require("pg")
require("dotenv").config()

const pool = new Pool({
    host: "localhost",
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "password123",
    database: process.env.DB_NAME, 
    port: 5432 // postgresql= default port



})

module.exports= pool 