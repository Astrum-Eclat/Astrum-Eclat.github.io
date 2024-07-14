const downloadLinks = {
    'astrum120247A' : 'https://drive.google.com/file/d/1d86FdIctGUu7hiFGG2mMQXzu4bV-2MkJ/view?usp=sharing',
    'astrum120247B' : 'https://drive.google.com/file/d/1BeukvAISwCii96R-hg93FWIsWM4AdkQi/view?usp=sharing',
    'astrum120247C' : 'https://drive.google.com/file/d/1_LAN-SvNzQBqqsjDwUvLGvaaoZ0rwK1i/view?usp=sharing',
    'astrum120247D' : 'https://drive.google.com/file/d/1amk6fzbvfkzdCINmKWk-3v6x5QJ7LPQu/view?usp=sharing'
};

function download() {
    var id = document.getElementById('inputId').value;
    if (id && downloadLinks[id]) {
        window.location.href = downloadLinks[id];
    } else {
        alert('Invalid ID. Please enter a valid ID.');
    }
}
