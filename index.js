const http=require("http")
const route=require('./routes.js')
const port=3000

const app=http.createServer(route)
app.listen(port,()=>{
    console.log("server is running on port",port)
})
