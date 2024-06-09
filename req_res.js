const http=require("http")
const port=3000
const app=http.createServer((req,res)=>{
    const url=req.url
    if(url=="/home")
        {
            res.write("Welcome to home page")
            res.end()
        }
    else if(url=="/about")    
        {
          res.end("Welcome to About us Page")
        }
     else if(url=='/node'){
      res.end("welcome to my node project")
     }
     else if (url=='/')
        {
            res.end("yeah")
        }

})
app.listen(port,(e)=>{
if(e)
    {
        console.log("there is some err")
    }
    else
    {
        console.log("server is runnung on port ",port)
    }
})