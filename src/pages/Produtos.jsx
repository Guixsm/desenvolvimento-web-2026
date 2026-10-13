import { useState } from "react";
import ProdutoCard from "../components/ProdutoCard";

function Produtos() {
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      nome: "Notebook",
      preco: "3.500,00",
      categoria: "Eletrônicos",
      promocao: true,
    },
    {
      id: 2,
      nome: "Mouse",
      preco: "80,00",
      categoria: "Periféricos",
      promocao: false,
    },
    {
      id: 3,
      nome: "Teclado",
      preco: "150,00",
      categoria: "Periféricos",
      promocao: true,
    },
  ]);

  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [categoria, setCategoria] = useState("");
  const [promocao, setPromocao] = useState(false);

  function adicionarProduto() {
    const novoProduto = {
      id: 4,
      nome: nome,
      preco: preco,
      categoria: categoria,
      promocao: promocao,
    };

    setProdutos([...produtos, novoProduto]);

    setNome("");
    setPreco("");
    setCategoria("");
    setPromocao(false);
  }

  return (
    <div>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        type="text"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
      />

      <input
        type="text"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      />

      <input
        type="checkbox"
        checked={promocao}
        onChange={(e) => setPromocao(e.target.checked)}
      />

      <div>
        {produtos.map((produto) => (
          <ProdutoCard
            key={produto.id}
            nome={produto.nome}
            categoria={produto.categoria}
            preco={produto.preco}
            promocao={produto.promocao}
          />
        ))}
      </div>

      <button onClick={adicionarProduto}>Adicionar Produto</button>
    </div>
  );
}
export default Produtos;
