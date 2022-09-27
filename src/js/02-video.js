import Player from '@vimeo/player';

const iframe = document.querySelector(`iframe`);

const player = new Player(iframe);

const time =player.getCurrentTime().then(function(seconds) {
    console.log(seconds);
    // seconds = the current playback position
}).catch(function(error) {
    // an error occurred
});



player.setCurrentTime(time).then(function(seconds) {
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