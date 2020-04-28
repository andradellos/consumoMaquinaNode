const http = require('http');
const URL = require('url');
const fs = require('fs');
const path = require('path');

const dataJson = require('./urls.json');

function saveJson  (cb){

    return fs.writeFile(
        path.join(__dirname, 'urls.json'), 
        JSON.stringify(dataJson,null,2),
        err => {
            if (err) throw err
           cb(JSON.stringify({mensage:'OK'}))
        })
    }

http.createServer((req, res) => {
    
res.writeHead(200, {
    'Access-Control-Allow-Origin': '*'
})

  const {name, url, del} =  URL.parse(req.url, true).query;

    if (!name || !url)
        return   res.end(JSON.stringify(dataJson))

    if (del){
        dataJson.urls = dataJson.urls.filter(item => String(item.url) !== String(url))
       return saveJson((mensage) => res.end(mensage))
    }else{       
      dataJson.urls.push({name,url})
      return saveJson((mensage) => res.end(mensage))
    }
 
}).listen(3000, () => {console.log('API  is running!!!')})