const container = document.querySelector(".container");

const image = document.querySelector("#music-image");
const audio = document.querySelector("#audio");
const title = document.querySelector("#music-details .title");
const singer = document.querySelector("#music-details .singer");

const prev = document.querySelector("#controls #prev");
const play = document.querySelector("#controls #play");
const next = document.querySelector("#controls #next");

const duration = document.querySelector("#duration");
const currentTime = document.querySelector("#current-time");
const progressBar = document.querySelector("#progress-bar");

const volume = document.querySelector("#volume");
const volumeBar = document.querySelector("#volume-bar");

const ul = document.querySelector("ul");


const player = new MusicPlayer(musicList);
// console.log(music.getName());

// sayfa yüklendiğinde
window.addEventListener("load",()=>{ 
    let music = player.getMusic();
    displayMusic(music);
    displayMusicList(player.musicList);
    isPlayingNow();

});

// müzik bilgilerini ekranda göster
function displayMusic(music){
    title.innerText = music.getName();
    // singer.innerText = music.singer;
    image.src = "img/" + music.img;
    audio.src = "mp3/" + music.file;
}

// play butonuna tıklanınca
play.addEventListener("click",()=>{
    if(play.querySelector("i").className.includes("fa-play")){ // eğer play iconu görünüyorsa
        audio.play();
        play.querySelector("i").className = "fa-solid fa-pause";
    }else{
        audio.pause();
        play.querySelector("i").className = "fa-solid fa-play";
    }
});

// next butonuna tıklanınca
next.addEventListener("click",()=>{
    player.next();  // sonraki müziğe geç
    let music = player.getMusic();  //müzik bilgilerini al
    displayMusic(music); // müzik bilgilerini ekranda göster
    audio.play();
    play.querySelector("i").className = "fa-solid fa-pause";
        isPlayingNow();

});

// previous butonuna tıklanınca
prev.addEventListener("click", () => {
    if (audio.currentTime > 1) {
        // 1. saniyeden sonra ise, başa sar
        audio.currentTime = 0;
    } else {
        // 1. saniyeden önce ise, önceki şarkıya geç
        player.previous();
        let music = player.getMusic();
        displayMusic(music);
        audio.play();
        play.querySelector("i").className = "fa-solid fa-pause";
    }
        isPlayingNow();

});

// zamanı dakika:saniye formatında göster
const calculateTime = (toplamSaniye) => {
    const dakika = Math.floor(toplamSaniye / 60);
    const saniye = Math.floor(toplamSaniye % 60);
    const güncellenenSaniye = saniye < 10 ? `0${saniye}` : `${saniye}`;
    const sonuc = `${dakika}:${güncellenenSaniye}`;
    return sonuc;
};

// müzik süre bilgisi 
audio.addEventListener("loadedmetadata",()=>{ 
    duration.textContent = calculateTime(audio.duration);
    progressBar.max = Math.floor(audio.duration);
});

// müzik çalarken
audio.addEventListener("timeupdate",()=>{
    progressBar.value = Math.floor(audio.currentTime);
    currentTime.textContent = calculateTime(progressBar.value);
});

// müzik sesi kapama açma
volume.addEventListener("click", ()=>{
    if(volume.className.includes("fa-volume-high")){
        audio.muted = true;
        volume.className = "fa-solid fa-volume-xmark";
        volumeBar.value = 0;
    }else{
        audio.muted = false;
        volume.className = "fa-solid fa-volume-high";
        volumeBar.value = audio.volume * 100;
    }
});

// müzik sesini ayarlama
volumeBar.addEventListener("input", (e)=>{
    const value = e.target.value;
    audio.volume = value / 100;
    if(audio.volume === 0){
        audio.muted = true;
        volume.className = "fa-solid fa-volume-xmark";
    }else{
        audio.muted = false;
        volume.className = "fa-solid fa-volume-high";
    }
});

// müzik ilerleme çubuğu
progressBar.addEventListener("input", (e)=>{
    const value = e.target.value;
    audio.currentTime = value;
});

 // listeyi ekranda göster
const displayMusicList = (list) => { 
    for (let i = 0; i < list.length; i++) {
        let liTag = `
        <li li-index="${i}" onclick="selectedMusic(this)" class="list-group-item d-flex justify-content-between align-items-center">
            <span >${list[i].getName()}</span>
            <span id="music-${i}" class="badge bg-primary rounded-pill"></span>
            <audio class="music-${i}" src="mp3/${list[i].file}"></audio>
        </li>`;

        ul.insertAdjacentHTML("beforeend", liTag);

        let liAudioDuration = ul.querySelector(`#music-${i}`);
        let liAudioTag = ul.querySelector(`.music-${i}`);

        liAudioTag.addEventListener("loadeddata", () => {
            liAudioDuration.innerText = calculateTime(liAudioTag.duration);
        });


    }
}

const selectedMusic = (li) => {
    player.index = li.getAttribute("li-index");
    displayMusic(player.getMusic());
    audio.play();
    play.querySelector("i").className = "fa-solid fa-pause";
    isPlayingNow();
}

const isPlayingNow = () => {
    for (let li of ul.querySelectorAll("li")) {
        if (li.classList.contains("playing")) {
            li.classList.remove("playing");
        }
        if (li.getAttribute("li-index") == player.index) {
            li.classList.add("playing");
        }
    }
}

audio.addEventListener("ended", () => {
    next.click();
});