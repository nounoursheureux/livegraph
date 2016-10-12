var content = document.getElementById('content');
var rankdir = document.getElementById('rankdir');
var output = document.getElementById('output');
var print_page = document.getElementById('print');


function reload() {
    var request = new XMLHttpRequest();
    request.open('POST', '/render', true);
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

print_page.addEventListener('click', function(e) {
    console.log("alalalal");
    window.location = "/print?data=" + encodeURIComponent(output.innerHTML);
})
