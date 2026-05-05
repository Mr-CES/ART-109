

const clickVideos = document.querySelectorAll(".click-video");

clickVideos.forEach(video => {
    video.addEventListener("click", () => {
        video.play();
    })

})