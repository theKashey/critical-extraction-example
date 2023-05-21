const {readFileSync} = require('node:fs');
const {join} = require('node:path');

const {crittersTest} = require('./src/critters');
const {linariaTest} = require('./src/linaria');
const {usedStylesTest} = require('./src/used-styles');


const html = readFileSync('./example/example.html','UTF-8');
const css = readFileSync('./example/assets/style.css','UTF-8');

(async () => {
    const example ={html, css, path: './example', assets: join(__dirname, 'example/asserts')};

    await crittersTest(example)
    console.log('\n\n');
    await linariaTest(example)
    console.log('\n\n');
    await usedStylesTest(example)
})();