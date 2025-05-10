let isDefaultBackground = true;

function middleContainerFunction() {

    let containers = document.querySelectorAll(".middleContainer");

    containers.forEach(function(newBackground) {
        if (isDefaultBackground) {
            newBackground.style.backgroundColor = "lightgray";
        } else {
            newBackground.style.backgroundColor = "#CFE5FF";
        }
    });

    
    isDefaultBackground = !isDefaultBackground;
}

let centerButton = document.getElementById("centerButton");
centerButton.addEventListener("mouseenter", middleContainerFunction);
centerButton.addEventListener("mouseleave", middleContainerFunction);

