require("dotenv").config();

var mysql = require('mysql');
var con;
class DataBaseUtil {
    
    connectToDB() {
         con = mysql.createConnection({
            host: process.env.Host,
            user: process.env.UserName,
            password: process.env.Password,
            database: process.env.DataBase,
            port: process.env.Port
        });
        con.connect((err) => {
            if (err) throw err;
            console.log('Connected!!!!!!!!!!!!!');
        });
    }




} module.exports = DataBaseUtil;