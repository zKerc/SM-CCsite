import React, { useState } from 'react';
import ProfessoresAdmin from '../components/admin/ProfessoresAdmin';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const ADMIN_PASSWORD = '123'; // Senha de teste alterada para "123"

const AdminPage: React.FC = () => {
  const [autenticado, setAutenticado] = useState(false);
  const [senha, setSenha] = useState('');
  const [showSenha, setShowSenha] = useState(false);
  const [aba, setAba] = useState<'professores' | 'calendario' | 'tcc' | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (senha === ADMIN_PASSWORD) setAutenticado(true);
    else alert('Senha incorreta!');
  };

  if (!autenticado) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <form
          onSubmit={handleLogin}
          className="bg-white border border-blue-200 p-8 rounded-2xl shadow-2xl max-w-xs w-full flex flex-col items-center relative"
        >
          <h2 className="text-xl font-bold mb-4 text-blue-900">Painel do Administrador</h2>
          <div className="w-full mb-4 relative">
            <input
              type={showSenha ? "text" : "password"}
              placeholder="Senha"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              className="w-full border border-blue-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10 text-gray-900 placeholder-gray-500"
              autoComplete="current-password"
              style={{ background: "#fff", color: "#222" }}
            />
            <button
              type="button"
              aria-label={showSenha ? "Ocultar senha" : "Mostrar senha"}
              onClick={() => setShowSenha(v => !v)}
              className="absolute right-2 top-1/2 -translate-y-1/2"
              tabIndex={-1}
              style={{ background: "none", border: "none", padding: 0, margin: 0, cursor: "pointer" }}
            >
              {showSenha ? (
                // Olho aberto
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              ) : (
                // Olho fechado
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.956 9.956 0 012.293-3.95M6.634 6.634A9.956 9.956 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.956 9.956 0 01-4.043 5.306M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" />
                </svg>
              )}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded font-semibold transition-colors"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow flex justify-center items-start bg-white py-8 px-2">
        <div className="w-full max-w-6xl bg-white border border-blue-200 rounded-2xl shadow-2xl p-8 flex flex-col min-h-[70vh]">
          <h1 className="text-3xl font-bold mb-8 text-blue-900 text-center">Painel Administrativo</h1>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              className={`min-w-[180px] px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-200 border
                ${aba === 'professores'
                  ? 'bg-blue-700 text-white border-black shadow-lg'
                  : 'bg-white text-blue-700 border-blue-300 hover:bg-blue-50 hover:border-blue-500'}
              `}
              onClick={() => setAba('professores')}
            >
              Professores
            </button>
            <button
              className={`min-w-[180px] px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-200 border
                ${aba === 'calendario'
                  ? 'bg-blue-700 text-white border-black shadow-lg'
                  : 'bg-white text-blue-700 border-blue-300 hover:bg-blue-50 hover:border-blue-500'}
              `}
              onClick={() => setAba('calendario')}
            >
              Calendário
            </button>
            <button
              className={`min-w-[180px] px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-200 border
                ${aba === 'tcc'
                  ? 'bg-blue-700 text-white border-black shadow-lg'
                  : 'bg-white text-blue-700 border-blue-300 hover:bg-blue-50 hover:border-blue-500'}
              `}
              onClick={() => setAba('tcc')}
            >
              TCC
            </button>
          </div>
          <div className="flex-1 overflow-auto max-h-[60vh]">
            {aba === 'professores' && <ProfessoresAdmin />}
            {/* Adicione aqui os componentes de calendário e TCC futuramente */}
            {!aba && (
              <div className="flex flex-col items-center justify-center h-full py-12">
                <p className="text-lg text-gray-700 mb-4">Bem-vindo! Escolha uma seção para editar:</p>
                <ul className="list-disc ml-6 text-base text-gray-600">
                  <li>Professores Efetivos/Substitutos</li>
                  <li>Calendário Acadêmico</li>
                  <li>Informações do TCC</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminPage;
