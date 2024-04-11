import { rendelizarCatalogo } from "./src/js/cartaoProduto";
import { inicializarFiltros } from "./src/js/filtrosCatalogos";
import { atualizarPrecoCarrinho, inicializarCarrinho, rendelizarProdutosCarrinho } from "./src/js/menuCarrinho";

rendelizarCatalogo();
inicializarCarrinho();
rendelizarProdutosCarrinho();
atualizarPrecoCarrinho();
inicializarFiltros();
