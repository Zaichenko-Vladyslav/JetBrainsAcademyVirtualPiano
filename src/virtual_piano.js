let whiteKeys = ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ"]
let blackKeys = ["KeyW", "KeyE", "KeyT", "KeyY", "KeyU"]

document.addEventListener("keydown", function (piano) {
    if (whiteKeys.includes(piano.code)) {
        console.log("The '" + piano.code.replace("Key", "") + "' key is pressed");
        let pianoKey = new Audio("white_keys/" + piano.code.replace("Key", "") + ".mp3")
        pianoKey.play();
    } else if (blackKeys.includes(piano.code)) {
        console.log("The '" + piano.code.replace("Key", "") + "' key is pressed");
        let pianoKey = new Audio("black_keys/" + piano.code.replace("Key", "") + ".mp3")
        pianoKey.play();
    } else {
        console.log("The '" + piano.code.replace("Key", "") + "' key is not on the piano");
    }

});