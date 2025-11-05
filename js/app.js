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