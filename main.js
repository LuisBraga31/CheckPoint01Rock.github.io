const containerRef = document.querySelector('#containerPrincipal');


const userTituloRef = document.querySelector('#titulo');
const userUrlRef = document.querySelector('#url');
const userDescricaoRef = document.querySelector('#descricao');

const cadastroButtonRef = document.querySelector('#enviar');

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

function cadastrar(event) {

    event.preventDefault();

    containerRef.innerHTML += `
    
    <div class="card">
        <img src="${userData.url}" alt="" srcset=""> 
        <h3> ${userData.titulo} </h3>
        <p> ${userData.descricao} </p>
    </div>
    
    `

    
}

userTituloRef.addEventListener('keyup', (event) => validarTitulo(event.target.value));
userUrlRef.addEventListener('keyup', (event) => validarUrl(event.target.value));
userDescricaoRef.addEventListener('keyup', (event) => validarDescricao(event.target.value));


cadastroButtonRef.addEventListener('click', (event) => cadastrar(event));
