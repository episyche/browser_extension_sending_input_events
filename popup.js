window.onload = async function () {
    let start_recording = document.getElementById('start_recording')
    if (start_recording) {
        start_recording.onclick = () => {
            chrome.runtime.sendMessage({ action: 'start recording' }, function (response) {
                window.close()
            })
        }
    }
}

