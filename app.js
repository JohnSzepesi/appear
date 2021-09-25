function scrollAppear() {
    var introText = document.querySelector(".intro-text");
    //introPosition visszaadja, hogy hány pixelre van az introText az oldal tetejétől
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.5;

    if (introPosition < screenPosition) {
        introText.classList.add("intro-appear");
    }
}

window.addEventListener("scroll", scrollAppear);
