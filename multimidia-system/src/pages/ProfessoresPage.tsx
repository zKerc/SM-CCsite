import React, { useEffect, useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const ProfessoresPage: React.FC = () => {
  const [professores, setProfessores] = useState<{efetivos: any[], substitutos: any[]}>({efetivos: [], substitutos: []});

  useEffect(() => {
    fetch('/src/data/professores.json')
      .then(res => res.json())
      .then(setProfessores);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-2 sm:px-4 py-8 max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900">Professores Efetivos - Contato</h1>
            <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
              Docentes do Curso de Ciência da Computação - UEPB
            </p>
            <div className="w-32 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <section className="mb-10">
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow border border-gray-200 text-gray-800 text-sm md:text-base">
                <thead>
                  <tr className="bg-blue-50 text-blue-900">
                    <th className="p-3 font-semibold text-left">Nome</th>
                    <th className="p-3 font-semibold text-left">E-mail Institucional</th>
                  </tr>
                </thead>
                <tbody>
                  {professores.efetivos.map((prof, idx) => (
                    <tr key={prof.email} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-3">{prof.nome}</td>
                      <td className="p-3">
                        <a
                          href={`mailto:${prof.email}`}
                          className="text-blue-700 font-semibold underline hover:text-blue-900"
                          style={{ color: '#1d4ed8' }}
                        >
                          {prof.email}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-4 text-blue-900">
              <p className="mb-2 font-semibold">Universidade Estadual da Paraíba (UEPB)</p>
              <p className="mb-2">Bacharelado em Ciência da Computação</p>
              <p className="mb-2 text-sm">
                <b>Observações:</b> Todos os e-mails institucionais seguem o padrão <span className="font-mono">@servidor.uepb.edu.br</span> ou <span className="font-mono">@uepb.edu.br</span>
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfessoresPage;
