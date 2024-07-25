let progress = document.getElementById('progress')
let song = document.getElementById('song')
let ctrlTcon = document.getElementById("ctrlTcon")

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if (ctrlTcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlTcon.classList.remove("fa-pause");
        ctrlTcon.classList.add("fa-play");
    }
    else {
        song.play();
        ctrlTcon.classList.add("fa-pause");
        ctrlTcon.classList.remove("fa-play");
    }
}

if (song.play()) {
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlTcon.classList.add("fa-pause");
        ctrlTcon.classList.remove("fa-play");
}
