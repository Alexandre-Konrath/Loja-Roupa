import { atualizarPrecoCarrinho } from "./menuCarrinho";
import { desenharProdutoCarrinhoSimples, lerLocalStorage, apagarDoLocalStorage, salvarLocalStorage } from "./utilidades";

function desenharProdutosCheckout() {
  const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};
  for (const idProduto in idsProdutoCarrinhoComQuantidade) {
    desenharProdutoCarrinhoSimples(
      idProduto,
      "container-produtos-checkout",
      idsProdutoCarrinhoComQuantidade[idProduto]
    );
  }
}

function finalizarCompra(evento) {
  evento.preventDefault();
  const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};
  if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
    return;
  }

  const dataAtual = new Date();
  const pedidoFeito = {
    dataPedido: dataAtual,
    pedido: idsProdutoCarrinhoComQuantidade
  }

  const historicoDePedidos = lerLocalStorage('historico') ?? [];
  const historicoDePedidosAtualizado = [pedidoFeito, ...historicoDePedidos]

  salvarLocalStorage('historico', historicoDePedidosAtualizado)
  apagarDoLocalStorage('carrinho');

  window.location.href = window.location.origin + "/pedidos.html"
}

atualizarPrecoCarrinho()
desenharProdutosCheckout();

document.addEventListener('submit', (evt) => finalizarCompra(evt))

//
//

export function manipularInput() {
  var elementoInput = document.getElementById('nome')

  var valorInput = elementoInput.value

  salvarInputLocalStorage('input', valorInput);
}

document.addEventListener('click', manipularInput)

export function salvarInputLocalStorage(chave, informacao) {
  localStorage.setItem(chave, informacao)
}
