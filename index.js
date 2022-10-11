const promisify = require('util').promisify;
const exec = promisify(require('child_process').exec);

const ffmpeg = async (input) => {
    await exec(`ffmpeg ${input}`);
}

/*
No, this is not a joke. I meant everything I said when I wrote the advantages of this package.


TL:DR the costs of a laywer between node and ffmpeg commands far outweighs the benefits.
This package exists so that new people that think they want a module for FFMPEG realize that they don't.

Let me tell you why I did this:
After having used ffmpeg for some time, I needed to use it in node.
Like many beginners, I assume that I should use a module for this. Of course that will be easier, right?
So I try one. I barely get it to work for basic stuff. I suffer with race conditions. After hours I give up and try another.
I try another, and I get it to work, and I manage to get around it not being awaitable after many hours.

Some time passes and I need to do something more advanced. I spend a day trying to wrangle the module into doing advanced things with ffmpeg.
I google and google, there is no help to find with this. I know how to do it with ffmpeg itself because there's so much documentation and help avalible.
Eventually I give up, I try to exec the ffmpeg command... Bang! It was so much easier. Suddenly I could do anything I wanted.

*/
module.exports = ffmpeg
