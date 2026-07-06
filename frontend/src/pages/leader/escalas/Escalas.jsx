import "./Escalas.css";
import { useState, useEffect } from "react";
import Button from "@/components/common/button/Button";
import Select from "@/components/common/select/Select";
import Card from "@/components/common/card/Card";
import Input from "@/components/common/input/Input";
import { buscarMembros } from "@/services/membrosService";
import { criarEscala } from "@/services/escalasService";
import Swal from "sweetalert2";
import Sound from "@/hooks/Sounds";

const instruments = [
  "teclado",
  "violao",
  "guitarra",
  "baixo",
  "bateria",
  "cajon",
  "sax",
  "vocal_ministro",
  "vocal_back",
];

export default function Escalas() {
  const [members, setMembers] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [scales, setScales] = useState({});
  const { playSound, listSound } = Sound();

  useEffect(() => {
    carregarMembros();
  }, []);
  async function carregarMembros() {
    const dados = await buscarMembros();

    const formatados = dados.map((m) => ({
      id: m.id,
      name: m.nome,
      functions: m.funcoes || [],
    }));

    setMembers(formatados);
  }

  const handleAddMember = (instrument) => {
    // Lógica para abrir modal de seleção de membro
    console.log("Adicionar membro para:", instrument);
  };

  const handleRemoveMember = (instrument, memberId) => {
    setScales((prev) => ({
      ...prev,
      [instrument]: prev[instrument]?.filter((id) => id !== memberId),
    }));
  };

  const instrumentLabel = (inst) => {
    const labels = {
      teclado: "🎹 Teclado",
      violao: "🎸 Violão",
      guitarra: "🎸 Guitarra",
      baixo: "🎸 Baixo",
      bateria: "🥁 Bateria",
      cajon: "🥁 Cajon",
      sax: "🎷 Sax",
      vocal_ministro: "🎤 Vocal (Ministro)",
      vocal_back: "🎤 Backing Vocal",
    };
    return labels[inst] || inst;
  };

  const getScaledMembers = (instrument) => {
    return (scales[instrument] || [])
      .map((id) => members.find((m) => m.id === id))
      .filter(Boolean);
  };

  const getAvailableMembers = (instrument) => {
    return members.filter(
      (m) =>
        m.functions.includes(instrument) &&
        !(scales[instrument] || []).includes(m.id),
    );
  };

  const salvarEscala = async () => {
    const hoje = new Date().toISOString().split("T")[0];

    if (!selectedDate) {
      Swal.fire({
        icon: "warning",
        title: "Data obrigatória",
        text: "Selecione uma data.",
      });
      playSound(listSound[1]);

      return;
    }

    if (selectedDate < hoje) {
      Swal.fire({
        icon: "error",
        title: "Data inválida",
        text: "Não é permitido criar escalas para datas anteriores.",
      });
      playSound(listSound[1]);

      return;
    }

    const totalMembros = Object.values(scales).flat().length;

    if (totalMembros === 0) {
      Swal.fire({
        icon: "warning",
        title: "Escala vazia",
        text: "Adicione ao menos um membro.",
      });
      playSound(listSound[1]);
      return;
    }
    playSound(listSound[2])
    const confirm = await Swal.fire({
      title: "Salvar escala?",
      text: `Culto para ${new Date(selectedDate + "T00:00:00").toLocaleDateString("pt-BR")}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Salvar",
      cancelButtonText: "Cancelar",
    });

    if (!confirm.isConfirmed) return;

    const membrosEscalados = [];

    Object.entries(scales).forEach(([funcao, ids]) => {
      ids.forEach((id) => {
        membrosEscalados.push({
          membroId: id,
          funcao,
        });
      });
    });

    const novaEscala = {
      data: selectedDate,
      status: "rascunho",
      membrosEscalados,
    };

    await criarEscala(novaEscala);

    Swal.fire({
      icon: "success",
      title: "Escala criada!",
      text: "Escala salva com sucesso.",
      timer: 1800,
      showConfirmButton: false,
    });
    playSound(listSound[0]);
    setScales({});
    setSelectedDate(hoje);
  };

  return (
    <div className="escalas">
      <div className="escalas-header">
        <h1 className="escalas-title">🎵 Escalas</h1>
        <p className="escalas-subtitle">
          Monte as escalas de louvor dos seus cultos
        </p>
      </div>

      <div className="escalas-container">
        {/* Data Selection */}
        <Card className="escalas-card escalas-date-card">
          <h2 className="card-title">Escolha a Data</h2>
          <Input
            label="Data do Culto"
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            fullWidth
          />
        </Card>

        {/* Instruments Grid */}
        <div className="escalas-grid">
          {instruments.map((instrument) => (
            <Card key={instrument} className="instrument-card">
              <div className="instrument-header">
                <h3 className="instrument-title">
                  {instrumentLabel(instrument)}
                </h3>
                <span className="instrument-count">
                  {getScaledMembers(instrument).length}
                </span>
              </div>

              <div className="instrument-members">
                {getScaledMembers(instrument).length > 0 ? (
                  <div className="members-list">
                    {getScaledMembers(instrument).map((member) => (
                      <div key={member.id} className="member-item">
                        <span className="member-name">{member.name}</span>
                        <button
                          className="remove-btn"
                          onClick={() =>
                            handleRemoveMember(instrument, member.id)
                          }
                          title="Remover"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="empty-message">Nenhum membro escalado</p>
                )}
              </div>

              <div className="instrument-actions">
                <Select
                  options={getAvailableMembers(instrument).map((m) => ({
                    value: m.id,
                    label: m.name,
                  }))}
                  onChange={(e) => {
                    if (e.target.value) {
                      const memberId = e.target.value;
                      setScales((prev) => ({
                        ...prev,
                        [instrument]: [...(prev[instrument] || []), memberId],
                      }));
                      e.target.value = "";
                    }
                  }}
                  placeholder="Adicionar membro"
                  fullWidth
                />
              </div>
            </Card>
          ))}
        </div>

        {/* Save Button */}
        <Card className="escalas-footer">
          <Button onClick={salvarEscala} variant="primary" size="lg" fullWidth>
            💾 Salvar Escala
          </Button>
          <p className="footer-text">
            {selectedDate
              ? `Escala para ${new Date(selectedDate + "T00:00:00").toLocaleDateString("pt-BR")}`
              : "Selecione uma data para salvar"}
          </p>
        </Card>
      </div>
    </div>
  );
}
