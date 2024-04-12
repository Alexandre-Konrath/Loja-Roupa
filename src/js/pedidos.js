import { lerLocalStorage, desenharProdutoCarrinhoSimples } from "./utilidades";

function criarPeidoHistorico(pedidoComData) {
  const elementoPedido = `
    <p class='text-xl font-bold my-4'>${new Date(
    pedidoComData.dataPedido
  ).toLocaleDateString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  })}</p>
    <p>Nome da compra: ${localStorage.getItem('input')}</p>
    <section id='container-pedidos-${pedidoComData.dataPedido
    }' class='bg-slate-300 p-3 rounded-md'></section>
  `;
  const main = document.querySelector("main");
  main.insertAdjacentHTML('beforeend', elementoPedido);

  for (const idProduto in pedidoComData.pedido) {
    desenharProdutoCarrinhoSimples(
      idProduto,
      `container-pedidos-${pedidoComData.dataPedido}`,
      pedidoComData.pedido[idProduto]
    );
  }
}

function rendelizarHistoricoPedidos() {
  const historico = lerLocalStorage('historico');
  for (const pedidoComData of historico) {
    criarPeidoHistorico(pedidoComData)
  }
}

rendelizarHistoricoPedidos();
