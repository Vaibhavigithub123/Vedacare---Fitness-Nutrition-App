const meditationSounds = {
    'Waterfall': 'assets/sounds/waterfall.mp3',
    'Cat Purring': 'assets/sounds/cat.mp3',
    'Piano': 'assets/sounds/calm-piano.mp3',
    'Thunder': 'assets/sounds/thunder.mp3',
    'Forest': 'assets/sounds/forest.mp3',
    'Rain in Town': 'assets/sounds/rain.mp3',
    'Birds': 'assets/sounds/birds.mp3',
    'Planets': 'assets/sounds/uranus-frequency.mp3',
    'Productivity': 'assets/sounds/Productivity.mp3',
    'Waves': 'assets/sounds/wavess.mp3',
    'Temple': 'assets/sounds/temple.mp3',
    'Jazz': 'assets/sounds/jazz.mp3',
    'Calm': 'assets/sounds/calm.mp3',
    'Sleep': 'assets/sounds/sleep.mp3',
    'Happy': 'assets/sounds/happy.mp3',
    'Focus': 'assets/sounds/focus.mp3',
};

const meditationVideos = {
    'Waterfall': 'assets/videos/waterfall.mp4',
    'Cat Purring': 'assets/videos/cat.mp4',
    'Piano': 'assets/videos/piano.mp4',
    'Thunder': 'assets/videos/thunder.mp4',
    'Forest': 'assets/videos/forest.mp4',
    'Rain in Town': 'assets/videos/rain.mp4',
    'Birds': 'assets/videos/birds.mp4',
    'Planets': 'assets/videos/planet.mp4',
    'Productivity': 'assets/videos/Productivity.mp4',
    'Waves': 'assets/videos/waves.mp4',
    'Temple': 'assets/videos/temple.mp4',
    'Jazz': 'assets/videos/jazz.mp4',
    'Calm': 'assets/videos/calm.mp4',
    'Sleep': 'assets/videos/sleep.mp4',
    'Happy': 'assets/videos/happy.mp4',
    'Focus': 'assets/videos/focus.mp4',
    
};

let popup = document.getElementById('popup');
let currentSound = '';
let currentVideo = '';
let audio = new Audio();
let videoElement;
let isPlaying = false;

function openPopup(category) {
    currentSound = meditationSounds[category];
    currentVideo = meditationVideos[category];

    // Clear the previous content
    let modalContent = document.querySelector('.modal-h');
    modalContent.innerHTML = '';


    videoElement = document.createElement('video');
    videoElement.id = 'background-video';
    videoElement.src = currentVideo;
    videoElement.autoplay = false;
    videoElement.loop = true;
    videoElement.muted = true;

    // Create and append the new elements
    let videoOverlay = document.createElement('div');
    videoOverlay.id = 'video-overlay';

     let soundTitle = document.createElement('h2');
    soundTitle.id = 'sound-title';
    soundTitle.textContent = category;


    modalContent.appendChild(soundTitle);
    modalContent.appendChild(videoElement);
    modalContent.appendChild(videoOverlay);

    let playButton = document.createElement('button');
    playButton.id = 'play-button';
    playButton.textContent = '▶';
    playButton.onclick = playSound;
    
    let closeButton = document.createElement('button');
    closeButton.id = 'close-button';
    closeButton.textContent = 'Close';
    closeButton.onclick = closePopup;

    modalContent.appendChild(playButton);
    modalContent.appendChild(closeButton);

    popup.classList.add('open-popup');

}

function closePopup() {
    popup.classList.remove('open-popup');
    stopSound();
    stopVideo();
}

// Video and audio play- pause function //
function playSound() {
    let playButton = document.getElementById('play-button');
    if (isPlaying) {
        audio.pause();
        videoElement.pause();
        playButton.textContent = '▶';
    } else {
        audio.src = currentSound;
        audio.play();
        videoElement.play();
        playButton.textContent = '||';

    }
    isPlaying = !isPlaying;
}

function stopSound() {
    audio.pause();
    audio.currentTime = 0;
    isPlaying = false;
    let playButton = document.getElementById('play-button');
    if (playButton) {
        playButton.textContent = '▶';
    }
}

function stopVideo() {
    if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0;
    }
}


// Close the modal when the user clicks outside of it
window.onclick = function(event) {
    if (event.target == popup) {
        closePopup();
    }
};
