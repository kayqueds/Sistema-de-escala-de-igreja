import { useState } from "react";
import Card from "@/components/common/card/Card";
import Input from "@/components/common/input/Input";
import Button from "@/components/common/button/Button";
import Swal from "sweetalert2";
import Sound from "@/hooks/Sounds";

export default function FormMembro({ salvarMembro }) {
  const [novoNome, setNovoNome] = useState("");
  const [novoTipo, setNovoTipo] = useState("membro");
  const [novaFuncao, setNovaFuncao] = useState("teclado");
  const { playSound, listSound } = Sound();

  const handleSalvar = () => {
    if (!novoNome.trim()) {
      playSound(listSound[1])  
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Você precisa digitar um nome antes de salvar!",
    });
      return;
    }

    salvarMembro({
      nome: novoNome.trim(),
      tipo: novoTipo,
      funcoes: [novaFuncao]
    });

    setNovoNome("");
    setNovoTipo("membro");
    setNovaFuncao("teclado");
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

      <Button onClick={handleSalvar}>
        Salvar
      </Button>

    </Card>
  );
}