const fs = require('fs');
let code = fs.readFileSync('src/components/Header.astro', 'utf8');
console.log(code.includes('overlay && '));
