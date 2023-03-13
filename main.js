const containerRef = document.querySelector('.containerCards');

const userTituloRef = document.querySelector('#tituloCard');
const userUrlRef = document.querySelector('#urlCard');
const userDescricaoRef = document.querySelector('#descricaoCard');
const cadastroButtonRef = document.querySelector('#cadastroButton');

var userData = {

    titulo : '',
    url: '',
    descricao: ''

};

function validarTitulo (titulo) {
    userData.titulo = titulo;
}

function validarUrl (url) {
    userData.url = url;
}

function validarDescricao (descricao) {
    userData.descricao = descricao;
}

function cadastrarCard(event) {

    event.preventDefault();

    containerRef.innerHTML += `
    
    <div class="card">
        <h3> ${userData.titulo} </h3>
        <img src="${userData.url}" alt="" srcset=""> 
        <p> ${userData.descricao} </p>
    </div>
    
    `
    
}

userTituloRef.addEventListener('keyup', (event) => validarTitulo(event.target.value));
userUrlRef.addEventListener('keyup', (event) => validarUrl(event.target.value));
userDescricaoRef.addEventListener('keyup', (event) => validarDescricao(event.target.value));

cadastroButtonRef.addEventListener('click', (event) => cadastrarCard(event));