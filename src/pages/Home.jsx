import ProdutoCard from "../components/ProdutoCard";

function Home() {
  return (
    <div>
      <h1>Produtos</h1>
      <ProdutoCard
        nome="Notebook"
        preco="3.500,00"
        categoria="Eletrônicos"
        promocao={true}
      />
    </div>
  );
}
export default Home;
