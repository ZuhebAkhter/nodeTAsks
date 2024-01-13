const express= require("express")
const bodyparser= require('body-parser')

const app=express();

//crrating server

app.use(bodyparser.urlencoded({extended:false}))

app.use('/add-product',(req,res,next)=> {
    res.send("<form action='/product' method='POST'><input type='text' name='title'></input><input type='text' name='sub-title'></input><button>Add Prod</button></form>")
})

app.use('/product',(req,res,next)=> {
    console.log(req.body)
    console.log("working")
    res.redirect('/')
})




app.use('/',(req,res,next) => {
    res.send('<h1>thus is middleware sjsjsj</h1>')

})

app.listen(4000)
