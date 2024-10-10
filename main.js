const form = document.getElementById('form-agenda');
const nomes = [];
const telefones = [];
let linhas = '';
const imgOk = '<img src="./images/ok.png" alt="Mão ok" />';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaCadastro();
});

function adicionaLinha() {
    const inputNomeAgenda = document.getElementById('nome-agenda');
    const inputTelefoneAgenda = document.getElementById('telefone-agenda');

    if (nomes.includes(inputNomeAgenda.value)) {
        alert(`O nome ${inputNomeAgenda.value} já foi inserido`);
    } else if (telefones.includes(inputTelefoneAgenda.value)) {
        alert(`O telefone ${inputTelefoneAgenda.value} já foi inserido`);
    } else {
        nomes.push(inputNomeAgenda.value);
        telefones.push(inputTelefoneAgenda.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeAgenda.value}</td>`;
        linha += `<td>${inputTelefoneAgenda.value}</td>`;
        linha += `<td>${new Date().toLocaleString()} ${ imgOk}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeAgenda.value = '';
    inputTelefoneAgenda.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaCadastro() {
    const inputNomeAgenda = document.getElementById('nome-agenda').value;
    const inputTelefoneAgenda = document.getElementById('telefone-agenda').value;
    document.getElementById('nome-registrado').innerHTML = inputNomeAgenda;
    document.getElementById('telefone-registrado').innerHTML = inputTelefoneAgenda;
}
