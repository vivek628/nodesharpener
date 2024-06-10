const fs=require('fs')
 const filePath='./message.txt'

const requestHandler=(req,res)=>{
    const url=req.url;
    const method=req.method


if (url==='/')
    fs.readFile(filePath,'utf-8',(err,data)=>{
    if(err)
        {
            let initialmsg=''
            fs.writeFile('message.txt',initialmsg,()=>{
                console.log("msg add ")
                res.end("data added ")
                return
            })
           
        }
        else {

            res.write("<html>")
            res.write("<head>")
            res.write("<title>mu node mininproject</title>")
            res.write(`<p> ${data}</p>`)
            res.write("<body><form action='/message' method='POST'><input type='text' name='message'><button>add</button></form></body>")
            res.write("</head>")
            res.write("</html>")
            res.end() 
        }
    
    })
else if(url=='/message' && method=='POST')
    {
        const body=[]
        req.on('data',(chunk)=>{
            body.push(chunk)

        });
       return  req.on('end',()=>{
            const parsedbody=Buffer.concat(body).toString()
            console.log(parsedbody.split('=')[1])
            const message=parsedbody.split('=')[1]

            fs.writeFile('message.txt',message,()=>{

                res.statusCode=302;
                res.setHeader('Location','/')
                return res.end()

            })
            
        })
       
    }
}
module.exports=requestHandler