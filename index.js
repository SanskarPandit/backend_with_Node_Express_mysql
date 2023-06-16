const bodyParser = require('body-parser');
const Connection = require ('./connection')
const express = require('express')
const app = express();
const port = process.env.PORT||3000;

app.use(bodyParser.json())
//create
app.post('/create',(req,res)=>{
    const data = req.body
    const contactData = [data.fname,data.lname,data.phone]
    Connection.query('INSERT INTO contact(fname,lname,phone) VALUES(?)',[contactData],(err,rows)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(rows)
        }
    })
})

//update
app.patch('/update/:phone',(req,res)=>{
    const data= req.body
    
    Connection.query('UPDATE contact SET ? WHERE phone='+data.phone,[data],(err,rows)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(rows)
        }
    })
})

//Show all data 
app.get('/show',(req,res)=>{
    Connection.query('SELECT * FROM contact',(err,rows)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(rows)

        }
    })
})
//show specific data 
app.get('/show/:phone',(req,res)=>{
    Connection.query('SELECT * FROM contact WHERE phone=?',[req.params.phone],(err,rows)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(rows)

        }
    })
})
//delete data 
app.delete('/remove/:phone',(req,res)=>{
    Connection.query('DELETE FROM contact WHERE phone=?',[req.params.phone],(err,rows)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(rows)

        }
    })
})


app.listen(port,()=>{console.log(`Connection started at localhost:${port}`)})