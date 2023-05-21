const Critters = require('critters');

exports.crittersTest = async (example) => {
    const critters = new Critters({
        path: example.path,
        // optional configuration (see below)
    });

    const inlined = await critters.process(example.html);
    console.log(inlined.length - example.html.length);
}

