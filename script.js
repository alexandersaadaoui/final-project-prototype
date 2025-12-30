let imageLinks = [];

const imageInput = document.getElementById('imageLink');
const submit = document.getElementById('submit');
const randomToy = document.getElementById('randomToy');
const messageDiv = document.getElementById('message');
const imageDisplay = document.getElementById('imageDisplay');

if (window.location.pathname.includes('random.html')) {
    const imageUrl = localStorage.getItem('selectedImage');
    if (imageUrl) {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = "Someone's Childhood Toy";
        imageDisplay.appendChild(img);
    }

}

else {
    function showMessage(text, type) {
        messageDiv.innerHTML = '<div class="message ' + type + '">' + text + '</div>';
    }

    submit.addEventListener('click', function () {
        const link = imageInput.value.trim();
        
        if (!link) {
            return;
        }

        if (!link.match (/^https?:\/\/.+/)) {
            return;
        }

        imageLinks.push(link);
        showMessage('Image added! Add more!');
        imageInput.value = '';
    } );

    randomToy.addEventListener('click', function () {
        if (imageLinks.length === 0) {
            return;
        }

        const randomIndex = Math.floor(Math.random() * imageLinks.length);
        const randomLink = imageLinks[randomIndex];
        
        localStorage.setItem('selectedImage', randomLink);
        window.location.href = 'random.html';
    } );

    imageInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            submit.click();
        }
    } );
}