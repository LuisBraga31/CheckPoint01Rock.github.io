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

function validateInput (input) {

    const inputValid = input.checkValidity();
    const elementFatherRef = input.parentElement;

    if (inputValid) {
        elementFatherRef.classList.remove('error');
    } else {
        elementFatherRef.classList.add('error');
    }

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
    userTituloRef.value = '';
    userUrlRef.value = '';
    userDescricaoRef.value = '';
}

userTituloRef.addEventListener('keyup', (event) => validarTitulo(event.target.value));
userTituloRef.addEventListener('keyup', () => validateInput(userTituloRef));

userUrlRef.addEventListener('keyup', (event) => validarUrl(event.target.value));
userUrlRef.addEventListener('keyup', () => validateInput(userUrlRef));

userDescricaoRef.addEventListener('keyup', (event) => validarDescricao(event.target.value));
userDescricaoRef.addEventListener('keyup', () => validateInput(userDescricaoRef));

cadastroButtonRef.addEventListener('click', (event) => cadastrarCard(event));