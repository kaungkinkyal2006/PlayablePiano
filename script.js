let pianoContainer = document.getElementsByClassName("piano-container");
const sound = "./audios/";
window.onload = () => {
    //24 keys
    for(let x =1; x <= 24; x++){
        let div = document.createElement("div");
        div.classList.add("key", x <= 10 ? "black-key" : "white-key");
    //for the onclick audio
    const number = x <=9 ? "0" + x : x;
    div.addEventListener("click", () => {
        new Audio(`${sound}key${number}.mp3`).play();
    });
    pianoContainer[0].appendChild(div);
    }
}