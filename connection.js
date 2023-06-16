const mysql= require('mysql2');

const mysqlConnection = mysql.createConnection({
    host :'127.0.0.1',
    user:'root',
    password:'Samrudhi@123',
    database:'contactdb'
})
 mysqlConnection.connect((err)=>{
    if(err)
    {
        console.log("error in connection ")
    }
    else{
        console.log('Connected Successfully!!')
    }
})
module.exports= mysqlConnection
