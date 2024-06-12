
const form = document.getElementById('form-agenda')
const nomes = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    totalDeNumeros();
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome');
    const inputTel = document.getElementById('tel');

    if (telefones.includes(inputTel.value)) {
        alert(`O Numero: ${inputTel.value} já foi inserido`);
    } else {

    nomes.push(inputNome.value);
    telefones.push(inputTel.value);
    
    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTel.value}</td>`;
    linha += '</tr>';

    linhas += linha;
    }
    inputNome.value = '';
    inputTel.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function totalDeNumeros() {
    const  total = telefones.length;
    document.getElementById('qt-final').innerHTML = total;
}


document.getElementById('baixar-lista').addEventListener('click', baixarLista);

function baixarLista() {

    let listaCompleta = '';

    for (let i = 0; i < nomes.length; i++) {
        listaCompleta += nomes[i] + ' - ' + telefones[i] + '\n';
    }

    const blocoDeNotas = new Blob([listaCompleta], { type: 'text/plain' });

    const urlBaixarNotas = URL.createObjectURL(blocoDeNotas);

    const linkBaixarNotas = document.createElement('a');
    linkBaixarNotas.href = urlBaixarNotas;
    linkBaixarNotas.download = 'lista_de_contatos.txt';

    linkBaixarNotas.click();

    URL.revokeObjectURL(urlBaixarNotas);
}
