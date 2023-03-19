const coords = {x: 0, y: 0};
const circles = document.querySelectorAll(".circle");

circles.forEach(function (circle, index){
    circle.x = 0;
    circle.y = 0;

    // Set a delay for updating the position and size of circles
    setTimeout(function() {
        circle.style.left = coords.x + "px";
        circle.style.top = coords.y + "px";
        circle.style.width = (24 - index * 10) + "px";
        circle.style.height = (24 - index * 10) + "px";
    }, index * 500); // Delay time is increased by 500ms for each circle
});

window.addEventListener("mousemove", function(e){
    coords.x = e.clientX;
    coords.y = e.clientY;

    // Update position of the first circle immediately
    circles[0].style.left = coords.x + "px";
    circles[0].style.top = coords.y + "px";

    // Set a delay for updating the position of the other circles
    circles.forEach(function (circle, index){
        if (index > 0) {
            setTimeout(function() {
                circle.style.left = coords.x + "px";
                circle.style.top = coords.y + "px";
            }, index * 50); // Delay time is increased by 50ms for each circle
        }
    });
});