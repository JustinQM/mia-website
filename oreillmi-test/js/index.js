const track = document.getElementById("icon-track")

window.onmousedown = e => {
    e.clientX;
    track.dataset.mouseDownX = e.clientX;
}

window.onmousemove = e => {
    if(track.dataset.mouseDownX == "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownX) - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

    nextPercentage = Math.min(nextPercentage,0);
    nextPercentage = Math.max(nextPercentage,-75);

    track.dataset.currentPercentage = nextPercentage;

    track.style.transform = "translate(" + nextPercentage + "%, -25%)";

}

window.onmouseup = e => {
    track.dataset.mouseDownX = "0";
    track.dataset.prevPercentage = track.dataset.currentPercentage;
}