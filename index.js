const promisify = require('util').promisify;
const exec = promisify(require('child_process').exec);

const ffmpeg = async (input) => {
    await exec(`ffmpeg ${input}`);
}

module.exports = ffmpeg