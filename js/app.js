function editar(id) {
    const card = document.querySelector(`.card[data-id='${id}']`);
    if (!card) {
        console.error("Card não encontrado");
        return;
    }
 
    const tituloAtual = card.querySelector('.title').innerText;
    const precoAtual = card.querySelector('.price').innerText.replace('R$ ', '');
    const novoNome = prompt("Digite o novo nome:", tituloAtual);
    const novoPreco = prompt("Digite o novo preço:", precoAtual);
 
    if (novoNome !== null && novoPreco !== null) {
        if (isNaN(parseFloat(novoPreco))) {
            alert("Preço inválido.");
            return;
        }
        card.querySelector('.title').innerText = novoNome;
        card.querySelector('.price').innerText = `R$ ${novoPreco}`;
        alert('Produto atualizado!');
    }
}

function excluir(id) {
    // 1. Confirmação
    if (!confirm("Tem certeza que deseja excluir este produto?")) {
        return;
    }
 
    // 2. Encontra o card pelo data-id
    const cardParaExcluir = document.querySelector(`.card[data-id='${id}']`);
   
    if (cardParaExcluir) {
        // 3. Remove o elemento da página
        cardParaExcluir.remove();
        console.log(`Item ${id} removido da tela.`);
    } else {
        console.warn(`Item ${id} não encontrado.`);
    }
}
 
// A função 'enviarContato' foi removida daqui.
// Sua lógica de validação foi integrada diretamente em 'utils.js',
// que já cuida do evento de 'submit' do formulário de contato.