function switchOff() {
    document.getElementById("imageUrl").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png "
    document.getElementById("catImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
    document.getElementById("switchStatus").textContent = "SwitchOff";
    document.getElementById("buttonOff").style.backgroundColor = "#cbd2d9";
    document.getElementById("buttonOn").style.backgroundColor = "#22c55e";
}

function switchOn() {
    document.getElementById("imageUrl").src = " https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
    document.getElementById("catImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
    document.getElementById("switchStatus").textContent = "SwitchOn";
    document.getElementById("buttonOff").style.backgroundColor = "#e12d39";
    document.getElementById("buttonOn").style.backgroundColor = "#cbd2d9";
}