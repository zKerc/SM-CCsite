import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { useNavigate } from 'react-router-dom';

const tccCalendar = [
  {
    etapa: 'Requerimento de TCC',
    data: '14.03',
    descricao: 'Envio do Requerimento do TCC com o aceite do orientador',
  },
  {
    etapa: 'Defesa do TCC',
    data: '06.06',
    descricao: 'É necessário o orientador realizar o agendamento através do formulário',
  },
  {
    etapa: 'Correções do TCC',
    data: '18.06',
    descricao: 'Prazo final para o orientador colocar a nota do aluno e submeter o doc do TCC',
  },
  {
    etapa: 'Depósito do TCC',
    data: '27.06',
    descricao: 'Depósito do TCC na biblioteca e SUAP',
  },
];

const TccPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-2 sm:px-4 py-8 max-w-4xl">
          {/* Título e descrição do TCC */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900">TCC - Trabalho de Conclusão de Curso</h1>
            <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
              Informações, prazos e orientações para o TCC do Bacharelado em Computação.
            </p>
            <div className="w-32 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          {/* Calendário de TCC */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-blue-800 mb-4 text-center">Calendário de TCC - 2025.1</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow border border-gray-200 text-gray-800 text-sm md:text-base">
                <thead>
                  <tr className="bg-blue-50 text-blue-900">
                    <th className="p-3 font-semibold">Etapa</th>
                    <th className="p-3 font-semibold">Data</th>
                    <th className="p-3 font-semibold">Descrição</th>
                  </tr>
                </thead>
                <tbody>
                  {tccCalendar.map((item, idx) => (
                    <tr key={idx} className="border-t border-gray-100">
                      <td className="p-3 font-medium">{item.etapa}</td>
                      <td className="p-3 text-center font-semibold text-blue-700">{item.data}</td>
                      <td className="p-3">{item.descricao}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Formulários Google Forms */}
          <section className="mb-10">
            <h2 className="text-lg font-bold text-blue-800 mb-3 flex items-center gap-2">
              <span role="img" aria-label="formulário">📝</span> Preencher os Formulários no Google Forms
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScGquDtKJGgv-RH-IuDbAqDiGLMP2QeB1s7tBqPgjTqzQcy4A/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white border border-blue-200 rounded-lg shadow hover:shadow-md transition p-4"
                style={{ color: '#1d4ed8' }}
              >
                <h3 className="font-semibold text-blue-800 mb-1">Formulário de Requerimento do TCC 1 e TCC 2</h3>
                <p className="text-gray-700 text-sm">Preencha para iniciar o TCC 1 ou TCC 2.</p>
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdIiz4cFkoBC0Rnr-98UJnHkHNwFOsnbqO4tldLTk_yVG85dA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white border border-blue-200 rounded-lg shadow hover:shadow-md transition p-4"
                style={{ color: '#1d4ed8' }}
              >
                <h3 className="font-semibold text-blue-800 mb-1">Agendamento - Defesa do TCC 2</h3>
                <p className="text-gray-700 text-sm">Solicite o agendamento da defesa do TCC 2.</p>
              </a>
            </div>
          </section>

          {/* Botões para TCC 1 e TCC 2 - movidos para baixo */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <button
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg font-semibold shadow transition-colors"
              onClick={() => navigate('/tcc1')}
            >
              TCC 1
            </button>
            <button
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg font-semibold shadow transition-colors"
              onClick={() => navigate('/tcc2')}
            >
              TCC 2
            </button>
          </div>

          {/* Template para escrita do TCC */}
          <section className="mb-10">
            <h2 className="text-lg font-bold text-blue-800 mb-3 flex items-center gap-2">
              <span role="img" aria-label="template">📄</span> Template para a escrita do TCC
            </h2>
            <div className="bg-white border border-blue-200 rounded-lg shadow p-4 mb-3">
              <p className="mb-2 text-gray-700">
                Para quem está matriculado em TCC 2, utilize o guia de normalização da biblioteca:
              </p>
              <a
                href="https://biblioteca.uepb.edu.br/abnt-guia-de-normalizacao/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 font-semibold underline hover:text-blue-900"
                style={{ color: '#1d4ed8' }}
              >
                https://biblioteca.uepb.edu.br/abnt-guia-de-normalizacao/
              </a>
            </div>
          </section>

          {/* Depósito do TCC na Biblioteca */}
          <section className="mb-10">
            <h2 className="text-lg font-bold text-blue-800 mb-3 flex items-center gap-2">
              <span role="img" aria-label="depósito">📚</span> Depósito do TCC na Biblioteca
            </h2>
            <div className="bg-white border border-blue-200 rounded-lg shadow p-4">
              <p className="text-gray-700 mb-2">
                Siga os procedimentos para depósito de TCCs, emissão de Nada Consta e Termo de Quitação de TCC junto à biblioteca da UEPB.
              </p>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Verifique os prazos no calendário acima.</li>
                <li>Após aprovação e correções, realize o depósito do TCC na biblioteca e no SUAP.</li>
                <li>Solicite a emissão dos documentos de Nada Consta e Termo de Quitação.</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TccPage;
