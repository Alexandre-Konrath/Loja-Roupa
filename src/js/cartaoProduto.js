import { catalogo } from "./utilidades";
import { adicionarAoCarrinho } from "./menuCarrinho";

let mensagemCount = 0; // Contador de mensagens

export function rendelizarCatalogo() {
  for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `<div class='cartao-produto border-solid w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg group ${produtoCatalogo.feminino ? "feminino" : "masculino"
      }' id="card-produto-${produtoCatalogo.id}">
        <img
        src="./assets/img/${produtoCatalogo.imagem}"
        alt="Produto 1 do Magazine Hashtag."
        class='group-hover:scale-110 duration-300 my-3 rounded-lg'
        />
        <p class='text-sm'>${produtoCatalogo.marca}</p>
        <p class='text-sm'>${produtoCatalogo.nome}</p>
        <p class='text-sm'>$${produtoCatalogo.preco}</p>
        <button
          id='adicionar-${produtoCatalogo.id}'
          class='bg-slate-950 hover:bg-slate-700 text-slate-200'>
            <i class="fa-solid fa-cart-plus"></i>
        </button>
        </div>`;

    document.getElementById("container-produto").innerHTML += cartaoProduto;
  }

  for (const produtoCatalogo of catalogo) {
    const botao = document.getElementById(`adicionar-${produtoCatalogo.id}`);
    botao.addEventListener("click", () => {
      adicionarAoCarrinho(produtoCatalogo.id);
      const mensagem = document.createElement('div');
      mensagem.classList.add('popups');
      mensagem.innerHTML = `
        <i class="fa-solid fa-cart-shopping"></i>
        <p class="p-popups">Item adicionado ao carrinho</p>
      `;
      mensagemCount++;
      document.querySelector('.mensagem-adicionar-item').appendChild(mensagem);
      setTimeout(() => {
        mensagem.classList.add('apagar-popups');
        setTimeout(() => {
          mensagem.remove();
        }, 1000);
      }, 2000);
    });
  }
}
