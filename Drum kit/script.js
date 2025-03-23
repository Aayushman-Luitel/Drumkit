let clap = document.getElementById("clap");
let hihat = document.getElementById("hihat");
let kick = document.getElementById("kick");
let openhat = document.getElementById("openhat");
let boom = document.getElementById("boom");
let ride = document.getElementById("ride");
let snare = document.getElementById("snare");
let tom = document.getElementById("tom");
let tink = document.getElementById("tink");

let keys = document.getElementsByClassName("KEY");
let keyarr = Array.from(keys);

// Store all audio elements in an array for easier management
let sounds = [clap, hihat, kick, openhat, boom, ride, snare, tom, tink];

// Attach event listener to the body
document.body.addEventListener("keydown", drum);

function drum(event) {
    let board = event.key.toLowerCase(); // Normalize to lowercase

    stopAllSounds(); // Stop any currently playing sound

    // Play corresponding sound based on key pressed
    if (board === "a") {
        playSound(clap);
        keys[0].classList.add("key_style")
    } else if (board === "s") {
        playSound(hihat);
        keys[1].classList.add("key_style")
    } else if (board === "d") {
        playSound(kick);
        keys[2].classList.add("key_style")
    } else if (board === "f") {
        playSound(openhat);
        keys[3].classList.add("key_style")
    } else if (board === "g") {
        playSound(boom);
        keys[4].classList.add("key_style")
    } else if (board === "h") {
        playSound(ride);
        keys[5].classList.add("key_style")
    } else if (board === "j") {
        playSound(snare);
        keys[6].classList.add("key_style")
    } else if (board === "k") {
        playSound(tom);
        keys[7].classList.add("key_style")
    } else if (board === "l") {
        playSound(tink);
        keys[8].classList.add("key_style")
    }
}

// Function to stop all currently playing sounds
function stopAllSounds() {
    sounds.forEach((sound) => {
        sound.pause(); // Pause the sound
        sound.currentTime = 0; // Reset playback position
    });

    keyarr.forEach((e) => {
        e.classList.remove("key_style"); // Remove the key style from all keys
    });
}

// Function to play a specific sound
function playSound(sound) {
    sound.play();

    // Adding the event listener once, only to the active key
    keyarr.forEach(e => e.removeEventListener('transitionend', removeTransition)); // Remove old listeners before adding
    keyarr.forEach(e => e.addEventListener('transitionend', removeTransition));

    // Define the transition removal logic
    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        this.classList.remove('key_style');
        // console.log(this)
    }


   
}
