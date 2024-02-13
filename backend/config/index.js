const dotenv = require('dotenv').config();

const PORT = process.env.PORT

const CONNECTION_STRING = process.env.CONNECTION_STRING;
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
const SERVER_BASEURL = process.env.SERVER_BASEURL;
const CLOUD_NAME = process.env.CLOUD_NAME 
const API_KEY = process.env.API_KEY
const API_SECRET = process.env.API_SECRET

module.exports = {
    PORT,
    CONNECTION_STRING,
    ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET,
    SERVER_BASEURL,
    CLOUD_NAME,
    API_KEY,
    API_SECRET
}