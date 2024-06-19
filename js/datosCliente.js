document.getElementById('profilePicInput').addEventListener('change', function() {
    var file = this.files[0];
    var formData = new FormData();
    formData.append('profilePic', file);

    fetch('uploadProfilePic.php', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if(data.success) {
            document.getElementById('profilePic').src = data.filePath;
        } else {
            console.error('Error:', data.error);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});