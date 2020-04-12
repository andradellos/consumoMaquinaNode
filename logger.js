const EventEmitter = require('events');
const fs = require('fs');
const path = require('path');

const emitter = new EventEmitter();

emitter.on('log',(msg) => {
    console.log(msg);
});


function SaveLog(mesge){
  emitter.emit('log', mesge);
  fs.appendFile(path.join(__dirname,'log.txt'), mesge, err=>{
      if(err) throw err;
  })
};

module.exports = SaveLog