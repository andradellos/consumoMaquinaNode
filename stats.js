const os = require ('os');
const log = require('./logger');

setInterval(() => {

    const {freemem, totalmem } = os;

    const total = parseInt(totalmem()/ 1024 /1024);
    const mem = parseInt(freemem()/ 1024 /1024);
    const percent =  parseInt((mem / total) * 100);
    
    const objStats = {
        free : `${mem} MB`,
        total :`${total} MB`,
        usage : `${percent} %`
    }
    console.clear();
    console.log('+++++++Bom++++++++');

    console.table(objStats);

    log(`${JSON.stringify(objStats)} \n`);
}, 1000)


