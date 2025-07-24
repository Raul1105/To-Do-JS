let texto = document.querySelector('#texto');
let conteudo = document.querySelector('#conteudo');
let enviar = document.querySelector('button');
let excluir = document.querySelector('#excluir');
let caixa = document.querySelector('.caixa');
let tarefas = [];

function mostrarLista(){
    tarefas.pop();
    return tarefas.map(i => `<span class="textoInserido">
                    <input type="checkbox" class="caixa"> ${i}
                           </span>`).join('');
}

enviar.addEventListener('click', () => {
    tarefas.push(texto.value);
    conteudo.innerHTML += `<span class="textoInserido">
                    <input type="checkbox" class="caixa"> ${texto.value}
                           </span>`
    texto.value = '';
})

excluir.addEventListener('click', () => {
    conteudo.removeChild(conteudo.lastElementChild);
})

conteudo.addEventListener('change', (e) => {
    if (e.target.classList.contains('caixa')) {
        const span = e.target.closest('.textoInserido');
        if (e.target.checked) {
            span.classList.add('marcado')
        } else {
            span.classList.remove('marcado')
        }
    }
})