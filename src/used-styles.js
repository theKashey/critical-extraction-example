const { getCriticalRules, parseProjectStyles} = require('used-styles');

exports.usedStylesTest = (example) => {
    const tm0=Date.now();

    // ⚠️ measured outside as expected to be performed once on server startup and never in runtime
    const styles = parseProjectStyles({
        style: example.css,
    });

    const tm=Date.now();
    const critical = getCriticalRules(example.html, styles);
    console.log('time', Date.now() - tm);
    console.log('time total', Date.now() - tm0);
    console.log(critical.length);
}