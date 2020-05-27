import geraSenha from './geradores';

const senhaGerada = document.querySelector('.resultado')
const qtdCaracteres = document.querySelector('.textinput')
const chkMaiusculas = document.querySelector('.maiusculas')
const chkMinusculas = document.querySelector('.minisculas')
const chkNumeros = document.querySelector('.numeros')
const chkSimbolos = document.querySelector('.simbolos')
const gerarsenha = document.querySelector('.gerarsenha')

export default () => {
    gerarsenha.addEventListener('click', ()=>{
        senhaGerada.innerHTML = gera();
    });
}
function gera(){
    const senha = geraSenha(
        qtdCaracteres.value,
        chkNumeros.checked,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkSimbolos.checked
    );
    return senha || 'Nada Selecionado';
}