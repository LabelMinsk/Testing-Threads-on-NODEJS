process.env.UV_THREADPOOL_SIZE = 2;

const crypto = require('crypto');

const start = Date.now();

function doHash(count){
   crypto.pbkdf2('a','b', 100000, 512, 'sha512',()=>{
    console.log(count, Date.now() - start);
    }); 
};
doHash('1');
doHash('2');
doHash('3');
doHash('4');
doHash('5');
doHash('6');
doHash('7');

