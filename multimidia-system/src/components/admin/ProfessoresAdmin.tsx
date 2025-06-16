import React, { useEffect, useState } from 'react';

type Professor = { nome: string; email: string };

const STORAGE_KEY = 'professores_data';

function getInitialData(): { efetivos: Professor[]; substitutos: Professor[] } {
  // Tenta carregar do localStorage, senão busca do arquivo JSON
  const local = localStorage.getItem(STORAGE_KEY);
  if (local) return JSON.parse(local);
  // fallback inicial vazio
  return { efetivos: [], substitutos: [] };
}

const ProfessoresAdmin: React.FC = () => {
  const [dados, setDados] = useState<{ efetivos: Professor[]; substitutos: Professor[] }>(getInitialData());
  const [tipo, setTipo] = useState<'efetivos' | 'substitutos'>('efetivos');
  const [novo, setNovo] = useState<Professor>({ nome: '', email: '' });
  const [editIdx, setEditIdx] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dados));
  }, [dados]);

  const handleAdd = () => {
    if (!novo.nome || !novo.email) return;
    setDados(d => ({
      ...d,
      [tipo]: [...d[tipo], { ...novo }]
    }));
    setNovo({ nome: '', email: '' });
  };

  const handleEdit = (idx: number) => {
    setNovo(dados[tipo][idx]);
    setEditIdx(idx);
  };

  const handleSaveEdit = () => {
    if (editIdx === null) return;
    setDados(d => ({
      ...d,
      [tipo]: d[tipo].map((p, i) => (i === editIdx ? { ...novo } : p))
    }));
    setNovo({ nome: '', email: '' });
    setEditIdx(null);
  };

  const handleDelete = (idx: number) => {
    setDados(d => ({
      ...d,
      [tipo]: d[tipo].filter((_, i) => i !== idx)
    }));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Professores {tipo === 'efetivos' ? 'Efetivos' : 'Substitutos'}</h2>
      <div className="mb-4 flex gap-2">
        <button
          className={`px-3 py-1 rounded ${tipo === 'efetivos' ? 'bg-blue-700 text-white' : 'bg-white border'}`}
          onClick={() => setTipo('efetivos')}
        >
          Efetivos
        </button>
        <button
          className={`px-3 py-1 rounded ${tipo === 'substitutos' ? 'bg-blue-700 text-white' : 'bg-white border'}`}
          onClick={() => setTipo('substitutos')}
        >
          Substitutos
        </button>
      </div>
      <table className="w-full mb-4 bg-white rounded shadow border text-sm">
        <thead>
          <tr className="bg-blue-50">
            <th className="p-2 text-left">Nome</th>
            <th className="p-2 text-left">E-mail</th>
            <th className="p-2 text-left">Ações</th>
          </tr>
        </thead>
        <tbody>
          {dados[tipo].map((prof, idx) => (
            <tr key={idx}>
              <td className="p-2">{prof.nome}</td>
              <td className="p-2">{prof.email}</td>
              <td className="p-2">
                <button className="text-blue-700 mr-2" onClick={() => handleEdit(idx)}>Editar</button>
                <button className="text-red-600" onClick={() => handleDelete(idx)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex gap-2 mb-2">
        <input
          className="border p-2 rounded w-1/3"
          placeholder="Nome"
          value={novo.nome}
          onChange={e => setNovo(n => ({ ...n, nome: e.target.value }))}
        />
        <input
          className="border p-2 rounded w-1/3"
          placeholder="E-mail"
          value={novo.email}
          onChange={e => setNovo(n => ({ ...n, email: e.target.value }))}
        />
        {editIdx === null ? (
          <button className="bg-green-600 text-white px-4 rounded" onClick={handleAdd}>Adicionar</button>
        ) : (
          <button className="bg-yellow-600 text-white px-4 rounded" onClick={handleSaveEdit}>Salvar</button>
        )}
      </div>
      <p className="text-xs text-gray-500">As alterações são salvas localmente (protótipo). Para produção, use uma API/backend.</p>
    </div>
  );
};

export default ProfessoresAdmin;
