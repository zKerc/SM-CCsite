import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const professores = [
  { nome: 'Ana Isabella Muniz Leite', email: 'isabella@servidor.uepb.edu.br' },
  { nome: 'Antonio Carlos de Albuquerque', email: 'antoniocarlosdc@uepb.edu.br' },
  { nome: 'Cheyenne Ribeiro Guedes Isidro', email: 'charibeiro@servidor.uepb.edu.br' },
  { nome: 'Daniel Scherer', email: 'scherer@servidor.uepb.edu.br' },
  { nome: 'Dunfrey Pires Aragão', email: 'dunfrey.aragao@servidor.uepb.edu.br' },
  { nome: 'Edson Holanda Cavalcante Junior', email: 'edsonholanda@uepb.edu.br' },
  { nome: 'Eduardo Jorge Valadares Oliveira', email: 'edjuyo@servidor.uepb.edu.br' },
  { nome: 'Fábio Luiz Leite Junior', email: 'fabioleite@servidor.uepb.edu.br' },
  { nome: 'Frederico Moreira Bubitz', email: 'fredbubitz@servidor.uepb.edu.br' },
  { nome: 'Janderson Jason Barbosa Aguiar', email: 'janderson@servidor.uepb.edu.br' },
  { nome: 'Katia Elizabete Galdino', email: 'katiagaldino@gmail.com' },
  { nome: 'Kézia de Vasconcelos Oliveira Dantas', email: 'kezia.vasconcelos@servidor.uepb.edu.br' },
  { nome: 'Luciana de Queiroz Leal Gomes', email: 'lucianaleal@servidor.uepb.edu.br' },
  { nome: 'Misael Elias de Morais', email: 'moraiscog@gmail.com' },
  { nome: 'Paulo Eduardo e Silva Barbosa', email: 'pesbarbosa@gmail.com' },
  { nome: 'Robson Pequeno de Sousa', email: 'sousarob@servidor.uepb.edu.br' },
  { nome: 'Sabrina de Figueiredo Souto', email: 'sabrinadfs@servidor.uepb.edu.br' },
  { nome: 'Vladimir Costa de Alencar', email: 'valencar@servidor.uepb.edu.br' },
  { nome: 'Wellington Candela de Araujo', email: 'wcandela@servidor.uepb.edu.br' },
];

const ProfessoresPage: React.FC = () => {
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
                  {professores.map((prof, idx) => (
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
