var content = document.getElementById('content');
var rankdir = document.getElementById('rankdir');
var output = document.getElementById('output');
var hide = document.getElementById('hide');
var everything = document.getElementById('everything');
var rendertype = document.getElementById('rendertype');


function reload() {
    var request = new XMLHttpRequest();
    if (rendertype.value == "render") {
        request.open('POST', '/render', true);
    } else if (rendertype.value == "dot") {
        request.open('POST', '/dot', true);
    }
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send("source=" + encodeURIComponent(content.value) + "&rankdir=" + encodeURIComponent(rankdir.value));

    request.onreadystatechange = function() {
        if (request.readyState == 4) {
            output.innerHTML = request.responseText;
        }
    }
}

content.addEventListener('keyup', reload);
content.addEventListener('change', reload);
rankdir.addEventListener('change', reload);
rendertype.addEventListener('change', reload);

hide.addEventListener('click', function(e) {
    if (everything.style.display == 'none') {
        everything.style.display = 'block';
    } else {
        everything.style.display = 'none';
    }
});
