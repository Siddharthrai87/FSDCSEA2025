const http=require('http');
const { CLIENT_RENEG_LIMIT } = require('tls');
const port=4005;
const sum=require('./getdata')

const server=http.createServer(async(req,res)=>{
    // res.setHeader('content-Type','text/plain')
    // res.end("hiiiii.....");
    // res.end("<h2>Hello</h2>");
    res.setHeader('Access Control Allow Origin','http://localhost:5173')
    res.setHeader('Access Control Allow Method','GET, POST, PUT')
    res.setHeader('Access Control Allow Headers','Content-Type')
    if(req.url=="/msg" && req.method=="GET"){
        res.setHeader('Content-Type','text/html');
        res.end("<h2 style=background-color:blue>Hello</h2>");
    }
    // console.log(Object.keys(req))
    if(req.url=="/data" && req.method=="POST"){
        const result=await sum();
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify({msg:result}));
    }
})

server.listen(port,()=>{
    console.log(`server is running on ${port}`);
})