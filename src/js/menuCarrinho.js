function abrirCarrinho() {
  document.getElementById("carrinho").classList.add("right-[0px]")
  document.getElementById("carrinho").classList.remove("right-[-360px]")
}

function fecharCarrinho() {
  document.getElementById("carrinho").classList.remove("right-[0px]")
  document.getElementById("carrinho").classList.add("right-[-360px]")
}

export function inicializarCarrinho() {
  const botaoFecharcarrinho = document.getElementById("fechar-carrinho")
  const botaoAbrirarrinho = document.getElementById("abrir-carrinho")

  botaoFecharcarrinho.addEventListener('click', fecharCarrinho)
  botaoAbrirarrinho.addEventListener('click', abrirCarrinho)
}
