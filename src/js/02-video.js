import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector(`iframe`);

const player = new Player(iframe);

player.on('timeupdate', function(data) {
    // data is an object containing properties specific to that event
    console.log(data.seconds);
    localStorage.setItem("videoplayer-current-time", `${data.seconds}`);
       
});

const theme = localStorage.getItem("videoplayer-current-time");
console.log(theme);

player.setCurrentTime(theme).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});