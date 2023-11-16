// script.js

document.getElementById('image-input').addEventListener('change', handleImageSelect);

function handleImageSelect(event) {
    const fileInput = event.target;
    const previewContainer = document.getElementById('image-preview');

    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            previewContainer.style.backgroundImage = `url('${e.target.result}')`;
        };

        reader.readAsDataURL(file);
    } else {
        previewContainer.style.backgroundImage = 'none';
    }
}
