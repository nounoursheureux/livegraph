var zoom = document.querySelector("#zoom");
var svg = document.getElementsByTagName('svg')[0];

zoom.addEventListener('change', function(e) {
    console.log(svg.style);
    svg.style.transform = "scale(" + zoom.value + ")";
});
