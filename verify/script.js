const downloadLinks = {

};

function download() {
    var id = document.getElementById('inputId').value;
    if (id && downloadLinks[id]) {
        window.location.href = downloadLinks[id];
    } else {
        alert('Invalid ID. Please enter a valid ID.');
    }
}
