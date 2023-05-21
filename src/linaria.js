const { collect } = require('@linaria/server');

exports.linariaTest = (example) => {
    const tm=Date.now();
    const {critical, other} = collect(example.html, example.css);
    console.log('time', Date.now() - tm);
    console.log(critical.length);
}