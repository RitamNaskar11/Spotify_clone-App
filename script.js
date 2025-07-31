
// initialize variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let playbutton = document.getElementById('playbutton')
let progressBar = document.getElementById('progressBar');
let voiceWaves = document.getElementById('voiceWaves');
let songPlaying = document.getElementById('songPlaying')
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    { songName: "Ami-Je-Tomer - Bhool Bhulaiyaa 3", filePath: 'songs/1.mp3', coverPath: "/img/item1.jpg" },
    { songName: "Choo-lo-muje - Local Train", filePath: 'songs/2.mp3', coverPath: "/img/item2.jpg" },
    { songName: "Ek-Payar-Ka-Nagma-Hai - Sanam", filePath: 'songs/3.mp3', coverPath: "/img/item3.jpg" },
    { songName: "Husn - Anuv Jain", filePath: 'songs/4.mp3', coverPath: "/img/item4.jpg" },
    { songName: "Man-Meri-Jaan - King", filePath: 'songs/5.mp3', coverPath: "/img/item5.jpg" },
    { songName: "Payar-Hua-Chupke-Se - Sanam", filePath: 'songs/6.mp3', coverPath: "/img/item6.jpg" },
    { songName: "Sajni - Lapaata Ladies", filePath: 'songs/7.mp3', coverPath: "/img/item7.jpg" },
]


playbutton.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        playbutton.classList.remove('fa-circle-play');
        playbutton.classList.add('fa-circle-pause');
        voiceWaves.style.opacity = 1;
    }
    else {
        audioElement.pause();
        playbutton.classList.remove('fa-circle-pause');
        playbutton.classList.add('fa-circle-play');
        voiceWaves.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = progress;
})
progressBar.addEventListener('change', () => {
    audioElement.currentTime = progressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemz')).forEach((element) => {
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
    })

};

volumeControl.addEventListener('input', (e) => {
    audio.volume = e.target.value;
});



Array.from(document.getElementsByClassName('songItemz')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();

        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        songPlaying.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        voiceWaves.style.opacity = 1;
        audioElement.play();
        playbutton.classList.remove('fa-circle-play');
        playbutton.classList.add('fa-circle-pause');

    })
});


// next song start
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 6) {
        songIndex = 0

    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    songPlaying.innerText = songs[songIndex].songName;
    audioElement.play();
    playbutton.classList.remove('fa-circle-play');
    playbutton.classList.add('fa-circle-pause');
})


// previous song start 
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex < 0) {
        songIndex = 0

    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    songPlaying.innerText = songs[songIndex].songName;
    audioElement.play();
    playbutton.classList.remove('fa-circle-play');
    playbutton.classList.add('fa-circle-pause');
})

