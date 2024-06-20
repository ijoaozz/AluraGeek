document.getElementById('card-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const fileInput = document.getElementById('image-upload');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageSrc = e.target.result;
            addCard(name, price, imageSrc);
        }
        reader.readAsDataURL(file);
    }
});

function addCard(name, price, imageSrc) {
    const cardPanel = document.getElementById('card-panel');

    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = name;

    const cardName = document.createElement('h3');
    cardName.textContent = name;

    const cardPrice = document.createElement('p');
    cardPrice.textContent = `R$ ${price}`;

    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'fas fa-trash delete-icon';
    deleteIcon.addEventListener('click', function() {
        card.remove();
    });

    card.appendChild(img);
    card.appendChild(cardName);
    card.appendChild(cardPrice);
    card.appendChild(deleteIcon);

    cardPanel.appendChild(card);

    document.getElementById('card-form').reset();
    document.getElementById('file-upload-filename').textContent = 'Nenhum arquivo escolhido';
}

document.getElementById('image-upload').addEventListener('change', function(event) {
    const fileNameSpan = document.getElementById('file-upload-filename');
    if (this.files.length > 0) {
        fileNameSpan.textContent = this.files[0].name;
    } else {
        fileNameSpan.textContent = 'Nenhum arquivo escolhido';
    }
});
