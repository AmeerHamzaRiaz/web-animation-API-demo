
console.log('asdasds')
// PLANE
var spriteFrames = [
    { transform: 'translateY(0)' },
    { transform: 'translateY(-100%)' }
];
var planeSprite = document.getElementById('plane-sprite');

var planeSpriteAnim = planeSprite.animate(
    spriteFrames, {
    easing: 'steps(5, end)',
    direction: "reverse",
    duration: 500,
    playbackRate: 1,
    iterations: Infinity
});

// CLOUD
var cloudFrames = [
    { transform: 'translateX(100vw)' },
    { transform: 'translateX(-100vw)' }
];

var cloud1Sprite = document.getElementById('cloud1-sprite');
var cloud2Sprite = document.getElementById('cloud2-sprite');
var cloud3Sprite = document.getElementById('cloud3-sprite');
var cloud4Sprite = document.getElementById('cloud4-sprite');

var cloudTimingBackground = {
    duration: 5000,
    iterations: Infinity,
    playbackRate: 1,
};

var cloud1SpriteMovement = cloud1Sprite.animate(cloudFrames, cloudTimingBackground);
var cloud2SpriteMovement = cloud2Sprite.animate(cloudFrames, cloudTimingBackground);
var cloud3SpriteMovement = cloud3Sprite.animate(cloudFrames, cloudTimingBackground);
var cloud4SpriteMovement = cloud4Sprite.animate(cloudFrames, cloudTimingBackground);

// BULLETS
// var bulletsSprite = document.getElementById('bullets');
// var planeSpriteAnim = bulletsSprite.animate(
//     spriteFrames, {
//     easing: 'steps(5, end)',
//     direction: "reverse",
//     duration: 500,
//     playbackRate: 1,
//     iterations: Infinity
// });


var goFaster = () => {
    cloudTimingBackground.playbackRate *= 1.1;
    updatePlayBackRate(cloudTimingBackground.playbackRate);
}

var updatePlayBackRate = (val) => {
    console.log('PlaybackRate ' + val)
    cloud1SpriteMovement.updatePlaybackRate(val);
    cloud2SpriteMovement.updatePlaybackRate(val);
    cloud3SpriteMovement.updatePlaybackRate(val);
    cloud4SpriteMovement.updatePlaybackRate(val);
    var meter = document.getElementById('meter');
    meter.value = val;
}

var speedDecay = () => {
    if (cloudTimingBackground.playbackRate > 0) {
        cloudTimingBackground.playbackRate *= 0.90;
        updatePlayBackRate(cloudTimingBackground.playbackRate);
    }
}

setInterval(speedDecay, 3000);

document.addEventListener("click", goFaster);

document.addEventListener("touchstart", goFaster);

window.addEventListener('mousemove', (e) => {
    var plane = document.getElementById('plane-div');
    var left = e.pageX + "px";
    var top = e.pageY + "px";
    plane.style.left = left;
    plane.style.top = top;
});

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        goFaster();
    }
})
