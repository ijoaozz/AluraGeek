<h1 align="center">🌟 AluraGeek 🌟</h1>
<p align="center">
</p>
<p align="center">
  <strong>Adicione e remova cards de um painel dinâmico com estilo!</strong>
</p>
<p align="center">
  <a href="#descrição-do-projeto">Descrição</a> •
  <a href="#funcionalidades">Funcionalidades</a> •
  <a href="#tecnologias-utilizadas">Tecnologias</a> •
  <a href="#estrutura-de-arquivos">Estrutura</a> •
  <a href="#instalação">Instalação</a> •
  <a href="#uso">Uso</a> •
  <a href="#código-fonte">Código Fonte</a> •
  <a href="#contribuições">Contribuições</a> •
  <a href="#licença">Licença</a> •
  <a href="#contato">Contato</a>
</p>
🎨 Descrição do Projeto
AluraGeek é um projeto de exemplo que demonstra como criar um painel dinâmico de cards utilizando HTML, CSS (SASS) e JavaScript. O projeto inclui funcionalidades para adicionar e remover cards do painel, permitindo a inserção de um nome, preço e imagem para cada card. Esta aplicação é uma introdução prática ao desenvolvimento web com foco na manipulação do DOM e na integração de estilos dinâmicos.

🚀 Funcionalidades
🌟 Adicionar novos cards ao painel com nome, preço e imagem.
🗑️ Remover cards existentes do painel através de um ícone de lixeira.
🖥️ Exibição de cards em um layout de grade responsivo.
📜 Barra de rolagem automática no painel de cards quando a quantidade de cards excede a altura do painel.
🛠️ Tecnologias Utilizadas
HTML
CSS (SASS)
JavaScript
Font Awesome (para ícones)
📂 Estrutura de Arquivos
scss
Copy code
AluraGeek/
├── index.html
├── styles.scss
├── script.js
├── styles.css (gerado pelo compilador SASS)
└── README.md
📥 Instalação
Clone o repositório:

sh
Copy code
git clone https://github.com/ijoaozz/AluraGeek.git
Navegue até o diretório do projeto:

sh
Copy code
cd AluraGeek
Compile o arquivo SASS para CSS:

sh
Copy code
sass styles.scss styles.css
Abra o arquivo index.html no seu navegador.

💡 Uso
Abra a página index.html no seu navegador.
No formulário de adição de cards, preencha o nome, preço e selecione uma imagem.
Clique no botão "Adicionar Card" para adicionar o card ao painel.
Para remover um card, clique no ícone de lixeira no canto superior direito do card.
📝 Código Fonte
HTML (index.html)
html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AluraGeek</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <div class="container">
        <h1>Painel de Cards</h1>
        <div class="card-panel" id="card-panel">
            <!-- Cards serão adicionados aqui -->
        </div>

        <form id="card-form">
            <h2>Adicionar Novo Card</h2>
            <div class="form-group">
                <label for="name">Nome:</label>
                <input type="text" id="name" required>
            </div>
            <div class="form-group">
                <label for="price">Preço:</label>
                <input type="number" id="price" required>
            </div>
            <div class="form-group">
                <label for="image-upload" class="custom-file-upload">
                    Escolher Imagem
                </label>
                <input type="file" id="image-upload" accept="image/*" required>
                <span id="file-upload-filename">Nenhum arquivo escolhido</span>
            </div>
            <button type="submit">Adicionar Card</button>
        </form>
    </div>

    <script src="script.js"></script>
</body>
</html>
SASS (styles.scss)
scss
Copy code
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    width: 100%;
    max-width: 800px;
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card-panel {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 20px;
    height: 300px; /* Defina a altura fixa desejada */
    overflow-y: auto; /* Adiciona scrollbar vertical */
    overflow-x: hidden; /* Esconde scrollbar horizontal, se houver */
    padding: 10px; /* Espaçamento interno para melhor visualização */
    border: 1px solid #ccc; /* Opcional: adiciona borda para destacar o painel */
    border-radius: 8px; /* Bordas arredondadas para o painel */
}

.card {
    background: #007BFF;
    color: white;
    padding: 20px;
    border-radius: 8px;
    width: calc(33.333% - 20px);
    box-sizing: border-box;
    text-align: center;
    position: relative;
}

.card img {
    max-width: 100%;
    height: auto;
    border-radius: 8px 8px 0 0;
}

.card h3, .card p {
    margin: 10px 0;
}

.card .delete-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    color: white;
    font-size: 20px;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="text"], input[type="number"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

.custom-file-upload {
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    background-color: #007BFF;
    color: white;
    border-radius: 5px;
    margin-right: 10px;
}

#image-upload {
    display: none;
}

#file-upload-filename {
    font-size: 16px;
    color: #333;
    vertical-align: middle;
}

button[type="submit"] {
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button[type="submit"]:hover {
    background-color: #0056b3;
}
JavaScript (script.js)
javascript
Copy code
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
    cardPrice.textContent = `Preço: R$ ${price}`;

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
💬 Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para enviar um pull request ou abrir uma issue.

📄 Licença
Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.

📧 Contato
Para mais informações, entre em contato com João Victor.
