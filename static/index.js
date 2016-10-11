var content = document.getElementById('content');

var request = new XMLHttpRequest();
request.open('POST', '/render', true);
request.send();

request.onreadystatechange = function() {
    if (request.readyState == 4) {
        content.innerHTML = request.responseText;
    }
}
