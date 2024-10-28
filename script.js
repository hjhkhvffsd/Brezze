function navigate() {
    var url = document.getElementById('url').value;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'http://' + url;
    }
    document.getElementById('browser-frame').src = url;
}
