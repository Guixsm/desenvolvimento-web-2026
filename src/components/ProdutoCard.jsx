function ProdutoCard({ nome, preco, categoria, promocao }) {
  return (
    <div className="produto-card">
      <h2>{nome}</h2>
      <p>Preço: R$ {preco}</p>
      <p>Categoria: {categoria}</p>
      {promocao && <p>EM PROMOÇÃO!</p>}
      <button>Comprar</button>
    </div>
  );
}

export default ProdutoCard;
