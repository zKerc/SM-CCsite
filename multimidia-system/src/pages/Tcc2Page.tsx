import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { Link } from 'react-router-dom';

const Tcc2Page: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-2 sm:px-4 py-8 max-w-3xl">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900">TCC II - Trabalho de Conclusão de Curso II</h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          {/* Informações Gerais */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-blue-800 mb-2">I. Informações Gerais</h2>
            <div className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-700 text-gray-800 space-y-2">
              <p>
                De acordo com a{' '}
                <a
                  href="https://uepb.edu.br/prograd/ensino/regimento-dos-cursos-de-graduacao-da-uepb/#1634215812409-f5af2af3-afb3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 font-semibold underline hover:text-blue-900"
                  style={{ color: '#1d4ed8' }}
                >
                  RESOLUÇÃO/UEPB/CONSEPE/068/2015
                </a>{' '}
                e o{' '}
                <a
                  href="https://drive.google.com/file/d/1nWoB5RBmgUAKgpxcqtuffVkiPe4GSYia/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 font-semibold underline hover:text-blue-900"
                  style={{ color: '#1d4ed8' }}
                >
                  Projeto Político Pedagógico do Curso (2016)
                </a>
                :
              </p>
              <ul className="list-disc ml-6">
                <li>Carga horária total: <b>120 horas</b> (60h em TCC I + 60h em TCC II).</li>
                <li>Orientação obrigatória: Docente efetivo do curso de Bacharelado em Ciência da Computação.</li>
                <li>
                  Formas de apresentação:
                  <ul className="list-disc ml-6">
                    <li>Artigo Científico</li>
                    <li>Monografia</li>
                    <li>Relatório Técnico</li>
                    <li>Estudo de Caso</li>
                    <li>Produto Técnico (software, etc.)</li>
                    <li>Produto Midiático</li>
                  </ul>
                </li>
              </ul>
            </div>
          </section>

          {/* Objetivo */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-blue-800 mb-2">II. Objetivo</h2>
            <div className="bg-white rounded-lg shadow p-4 border-l-4 border-green-600 text-gray-800 space-y-2">
              <ul className="list-disc ml-6">
                <li>✔ Aprofundamento teórico-metodológico.</li>
                <li>✔ Solução de problemas relacionados à prática profissional.</li>
                <li>✔ Conclusão do trabalho iniciado no TCC I, com entrega do texto final.</li>
              </ul>
              <p>
                Consolidar o conhecimento adquirido no curso por meio desses processos.
              </p>
            </div>
          </section>

          {/* Procedimentos */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-blue-800 mb-2">III. Procedimentos</h2>
            <div className="bg-white rounded-lg shadow p-4 border-l-4 border-yellow-600 text-gray-800 space-y-4">
              <div>
                <b>1. Início (Após a Matrícula)</b>
                <ul className="list-disc ml-6">
                  <li>Escolher um orientador (lista disponibilizada pela Coordenação).</li>
                  <li>
                    Formalizar a orientação em até 30 dias após o início do semestre, enviando:
                    <ul className="list-disc ml-6">
                      <li>
                        <Link to="/tcc" className="text-blue-700 font-semibold underline hover:text-blue-900" style={{ color: '#1d4ed8' }}>
                          Requerimento de TCC
                        </Link>
                      </li>
                      <li>
                        Termo de Compromisso de Orientação (assinado pelo orientador).
                      </li>
                    </ul>
                  </li>
                  <li>A coordenação fará a associação orientador-aluno no SUAP.</li>
                </ul>
              </div>
              <div>
                <b>2. Pré-Defesa</b>
                <ul className="list-disc ml-6">
                  <li>Reuniões semanais (mínimo 1h) com o orientador para acompanhamento.</li>
                  <li>Formato do trabalho: Definido entre aluno e orientador (Artigo, Monografia ou Relatório Técnico).</li>
                  <li>Modelos disponíveis: Biblioteca UEPB.</li>
                  <li>Prazo para envio à banca: 7 dias antes da defesa (para leitura prévia).</li>
                  <li>
                    Agendamento da defesa:{' '}
                    <Link to="/tcc" className="text-blue-700 font-semibold underline hover:text-blue-900" style={{ color: '#1d4ed8' }}>
                      Formulário de Agendamento do TCC
                    </Link>
                  </li>
                  <li>
                    Composição da banca:
                    <ul className="list-disc ml-6">
                      <li>3 membros (incluindo o orientador como presidente).</li>
                      <li>Mínimo 1 docente efetivo da UEPB.</li>
                      <li>Máximo 1 membro externo (não vinculado à UEPB).</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <b>3. Defesa</b>
                <ul className="list-disc ml-6">
                  <li>Duração da apresentação: 20 minutos.</li>
                  <li>Avaliação: Nota de 0 a 10 (média ≥ 7,0 para aprovação).</li>
                  <li>Lançamento da nota: O orientador cadastra no SUAP e garante a assinatura eletrônica da ATA por todos os membros.</li>
                </ul>
              </div>
              <div>
                <b>4. Pós-Defesa</b>
                <ul className="list-disc ml-6">
                  <li>Correções: Prazo de 10 dias para ajustes solicitados pela banca.</li>
                  <li>Depósito na Biblioteca:</li>
                  <ul className="list-disc ml-6">
                    <li>O orientador envia a versão final ao SUAP.</li>
                    <li>Aluno e banca assinam a Folha de Rosto.</li>
                    <li>
                      O aluno realiza o depósito conforme procedimentos da Biblioteca (
                      <a
                        href="https://biblioteca.uepb.edu.br/regras-para-o-deposito-dos-trabalhos-academicos/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 font-semibold underline hover:text-blue-900"
                        style={{ color: '#1d4ed8' }}
                      >
                        Procedimentos para o depósito do TCC na Biblioteca
                      </a>
                      ).
                    </li>
                  </ul>
                  <li>
                    Para detalhes, acesse{' '}
                    <Link to="/tcc" className="text-blue-700 font-semibold underline hover:text-blue-900" style={{ color: '#1d4ed8' }}>
                      neste link
                    </Link>
                    .
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Dúvidas Frequentes */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-blue-800 mb-2">IV. Dúvidas Frequentes</h2>
            <div className="bg-white rounded-lg shadow p-4 border-l-4 border-indigo-600 text-gray-800 space-y-2">
              <b>1. O orientador do TCC II pode ser um professor substituto?</b>
              <p>❌ Não. O orientador deve ser docente efetivo da UEPB.</p>
              <b>2. É permitida coorientação por professor de outra instituição?</b>
              <p>
                ✅ Sim. Coorientadores externos devem ter:
                <ul className="list-disc ml-6">
                  <li>Mínimo pós-graduação lato sensu.</li>
                  <li>Documentação comprovada enviada pelo orientador principal.</li>
                </ul>
                <span className="italic text-sm">Obs.: O coorientador não substitui o orientador efetivo.</span>
              </p>
            </div>
          </section>

          {/* Documentos para Download */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-blue-800 mb-2">V. Documentos para Download</h2>
            <div className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-700 text-gray-800 space-y-2">
              <a
                href="https://biblioteca.uepb.edu.br/abnt-guia-de-normalizacao/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 font-semibold underline hover:text-blue-900 block text-base"
                style={{ color: '#1d4ed8' }}
              >
                Modelos (Artigo, Monografia e Relatório Técnico)
              </a>
              <a
                href="https://biblioteca.uepb.edu.br/regras-para-o-deposito-dos-trabalhos-academicos/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 font-semibold underline hover:text-blue-900 block text-base"
                style={{ color: '#1d4ed8' }}
              >
                Procedimentos para o depósito do TCC na Biblioteca
              </a>
            </div>
          </section>

          <div className="text-center mt-8">
            <p className="text-gray-700 font-medium">Dúvidas? Entre em contato com a coordenação!</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tcc2Page;
