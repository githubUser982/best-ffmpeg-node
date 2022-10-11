# best-ffmpeg-node
Looking for a ffmpeg module that's finally good? You've come to the right place my friend. Your search is over. This is the best way to use ffmpeg with node.

## Advantages
#### Fully async
Unlike other modules best-ffmpeg is fully awaitable. No more painful callback functions and messy .then()s! Simply write await if you want execution to wait for ffmpeg to finish, if you do not, skip the await!
#### Simple, not OOP
No more writing 10 lines of code just to convert an image.
#### Compatible with 100% of ffmpeg
Most modules only support doing a few narrow operations with ffmpeg with no good way to do advanced processing with many layers and complex filters. This module supports everything ffmpeg does, and that is a lot.
#### The best support
Wonder how to do something, or just need help? We got you. There's more than 24998 questions answered on SO that apply to this module. There's 75 times more help avalible for this module compared to fluent-ffmpeg.
#### zero-dependancy 
Well it's just nice isn't it?

# Usage
Install the package:
```
npm i best-ffmpeg
```
If you haven't already, install FFMPEG: https://ffmpeg.org/

Now you're ready! Example usage:
```
const ffmpeg = require('best-ffmpeg');

// Convert a PNG file to .JPG:
await ffmpeg(`-i myImage.png myImage.jpg`)
console.log("Done!")

```

