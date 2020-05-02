const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {

const file = req.url === '/' ? 'index.html' : req.url;
const filePath = path.join(__dirname,'public', file);
const extensionName = path.extname(filePath);


const allowedFileTypes = ['.html', '.js', '.css'];
const allowed = allowedFileTypes.find(item => item === extensionName);

if(!allowed) return;

console.log(file);

   fs.readFile(
         filePath ,
         (err, contentHtml)=> {
             if(err) throw err
           res.end(contentHtml);
        }
    )

  //if (req.url === '/')
  //    fs.readFile(
  //        path.join(__dirname,'public', 'index.html'),
  //        (err, contentHtml)=> {
  //            if(err) throw err
  //           res.end(contentHtml);
  //        }
  //    )
        
  //  if(req.url ==='/contato')
  //      return res.end('<h1>Teca qual seu contato?</h1>');
 
}).listen(process.env.PORT, () => {console.log('Server is running porta 5151!!!')})