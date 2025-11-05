let proximoId = 3; 
const formNovo = document.getElementById('novo');
if (formNovo) {
    formNovo.addEventListener('submit', function(e) {
        e.preventDefault(); 
        const nomeInput = e.target.nome;
        const precoInput = e.target.preco;
        if (!nomeInput.value || !precoInput.value) {
            alert("Por favor, preencha nome e preço.");
            return;
        }
        if (isNaN(parseFloat(precoInput.value))) {
             alert("O preço deve ser um número.");
            return;
        }
        const novoProdutoHtml = `
        <div class="card" data-id="${proximoId}">
            <h2 class="title">${nomeInput.value}</h2>
            <p class="price">R$ ${precoInput.value}</p>
            <button onclick="editar(${proximoId})">Editar</button>
            <button onclick="excluir(${proximoId})">Excluir</button>
        </div>
        `;
        document.getElementById('produtos').insertAdjacentHTML('beforeend', novoProdutoHtml);
        nomeInput.value = '';
        precoInput.value = '';
        proximoId++;
        console.log("Novo produto adicionado (simulado)");
    });
}
const formFale = document.getElementById('fale');
if (formFale) {
    formFale.addEventListener('submit', function(e) {
        e.preventDefault(); 
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;
        if (!nome || !email || !mensagem) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        if (email.indexOf('@') === -1) {
            alert('Email inválido. Deve conter um "@".');
            return;
        }
        console.log("Enviando dados (simulado):", {nome, email, mensagem});
        alert('Mensagem enviada com sucesso! (Simulação)');
        e.target.reset();
    });
}