import { useState } from "react";
import Card from "@/components/common/card/Card";
import Input from "@/components/common/input/Input";
import Button from "@/components/common/button/Button";
import Swal from "sweetalert2";
import Sound from "@/hooks/Sounds";

export default function FormMembro({ salvarMembro }) {
  const [novoNome, setNovoNome] = useState("");
  const [novoTipo, setNovoTipo] = useState("membro");

  // função selecionada no select
  const [novaFuncao, setNovaFuncao] = useState("teclado");

  // lista de funções adicionadas
  const [novasFuncoes, setNovasFuncoes] = useState([]);

  const { playSound, listSound } = Sound();

  // adiciona função na lista
  const adicionarFuncao = () => {
    if (novasFuncoes.includes(novaFuncao)) {
      playSound(listSound[2]);

      Swal.fire({
        icon: "warning",
        title: "Função já adicionada",
        text: "Escolha outra função."
      });

      return;
    }

    setNovasFuncoes((prev) => [...prev, novaFuncao]);
  };

  // remove função da lista
  const removerFuncao = (funcaoRemover) => {
    setNovasFuncoes((prev) =>
      prev.filter((funcao) => funcao !== funcaoRemover)
    );
  };

  const handleSalvar = async () => {
    if (!novoNome.trim()) {
      playSound(listSound[1]);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Você precisa digitar um nome antes de salvar!"
      });

      return;
    }

    if (novasFuncoes.length === 0) {
      playSound(listSound[2]);

      Swal.fire({
        icon: "warning",
        title: "Selecione funções",
        text: "Adicione ao menos uma função."
      });

      return;
    }

    await salvarMembro({
      nome: novoNome.trim(),
      tipo: novoTipo,
      funcoes: novasFuncoes
    });

   
    // limpa formulário
    setNovoNome("");
    setNovoTipo("membro");
    setNovaFuncao("teclado");
    setNovasFuncoes([]);
  };

  return (
    <Card className="membros-controls">
      <Input
        placeholder="Nome do membro"
        value={novoNome}
        onChange={(e) => setNovoNome(e.target.value)}
      />

      <select
        value={novoTipo}
        onChange={(e) => setNovoTipo(e.target.value)}
      >
        <option value="membro">Membro</option>
        <option value="lider">Líder</option>
      </select>

      <div className="funcoes-container">
        <select
          value={novaFuncao}
          onChange={(e) => setNovaFuncao(e.target.value)}
        >
          <option value="teclado">Teclado</option>
          <option value="violao">Violão</option>
          <option value="guitarra">Guitarra</option>
          <option value="baixo">Baixo</option>
          <option value="bateria">Bateria</option>
          <option value="cajon">Cajon</option>
          <option value="sax">Sax</option>
          <option value="vocal_ministro">Vocal Ministro</option>
          <option value="vocal_back">Backing Vocal</option>
        </select>

        <Button onClick={adicionarFuncao}>
          ➕ Adicionar Função
        </Button>
      </div>

      {/* funções adicionadas */}
      <div className="funcoes-lista">
        {novasFuncoes.map((funcao, index) => (
          <span
            key={index}
            className="function-tag"
            onClick={() => removerFuncao(funcao)}
            style={{ cursor: "pointer" }}
            title="Clique para remover"
          >
            {funcao} ✕
          </span>
        ))}
      </div>

      <Button onClick={handleSalvar}>
        Salvar
      </Button>
    </Card>
  );
}