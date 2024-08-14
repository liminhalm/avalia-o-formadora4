// Funções de validação

function validarNome(nome) {
    const regex = /^[A-Z][a-zA-Z ]{9,}$/;
    return regex.test(nome);
}

function validarCPF(cpf) {
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return regex.test(cpf);
}

function validarCelular(celular) {
    const regex = /^\+55\(\d{2}\)9\d{4}-\d{4}$/;
    return regex.test(celular);
}

function validarTelefoneFixo(telefone) {
    const regex = /^\+55\(\d{2}\)[2-5]\d{3}-\d{4}$/;
    return regex.test(telefone);
}

function validarEndereco(endereco) {
    const regex = /^(Rua|Avenida|Travessa|Av\.) [a-zA-Z0-9 ]{10,}$/i;
    return regex.test(endereco);
}

function validarLogin(login) {
    const regex = /^[A-Z]{5}$/;
    return regex.test(login);
}

function validarSenha(senha) {
    const regex = /^[a-zA-Z0-9]{7}$/;
    return regex.test(senha);
}

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const dados = {
        nome: document.getElementById('nome').value,
        nomeMaterno: document.getElementById('nomeMaterno').value,
        cpf: document.getElementById('cpf').value,
        celular: document.getElementById('celular').value,
        telefoneFixo: document.getElementById('telefoneFixo').value,
        enderecoCompleto: document.getElementById('enderecoCompleto').value,
        login: document.getElementById('login').value,
        senha: document.getElementById('senha').value
    };

    const resultadoValidacao = validarFormulario(dados);

    let formValido = true;

    for (const campo in resultadoValidacao) {
        const erroId = `erro-${campo}`;
        const erroElemento = document.getElementById(erroId);
        if (resultadoValidacao[campo]) {
            erroElemento.textContent = '';
        } else {
            erroElemento.textContent = 'Inválido';
            formValido = false;
        }
    }

    if (formValido) {
        alert('Formulário enviado com sucesso!');
        // Aqui você pode enviar o formulário usando AJAX ou algo similar
    } else {
        alert('Por favor, corrija os campos inválidos.');
    }
});

function validarFormulario(dados) {
    return {
        nome: validarNome(dados.nome),
        nomeMaterno: validarNome(dados.nomeMaterno),
        cpf: validarCPF(dados.cpf),
        celular: validarCelular(dados.celular),
        telefoneFixo: validarTelefoneFixo(dados.telefoneFixo),
        enderecoCompleto: validarEndereco(dados.enderecoCompleto),
        login: validarLogin(dados.login),
        senha: validarSenha(dados.senha)
    };
}