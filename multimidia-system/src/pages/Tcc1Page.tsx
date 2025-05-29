import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const Tcc1Page: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-2 sm:px-4 py-8 max-w-3xl">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900">TCC I - Trabalho de Conclusão de Curso I</h1>
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
                <li>O aluno deverá integralizar dois componentes curriculares de <b>60 horas cada</b> (TCC I e TCC II), totalizando 120 horas.</li>
                <li>O trabalho consiste em pesquisas e reuniões periódicas com o orientador para a produção de um trabalho acadêmico.</li>
                <li>O tema deve estar alinhado às linhas de pesquisa do curso, aprovadas pelo colegiado.</li>
                <li>O orientador deve ser um docente efetivo do Bacharelado em Ciência da Computação.</li>
              </ul>
              <div>
                <span className="font-semibold">Formatos aceitos:</span>
                <ul className="list-disc ml-6">
                  <li>✔ Estudo de Caso</li>
                  <li>✔ Artigo Científico</li>
                  <li>✔ Produto Técnico (software, etc.)</li>
                  <li>✔ Produto Midiático</li>
                  <li>✔ Monografia</li>
                  <li>✔ Relatório de Projeto</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Objetivo */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-blue-800 mb-2">II. Objetivo</h2>
            <div className="bg-white rounded-lg shadow p-4 border-l-4 border-green-600 text-gray-800">
              O TCC I visa a elaboração do projeto ou plano de trabalho, com base em revisão bibliográfica e fundamentação teórico-metodológica.
            </div>
          </section>

          {/* Procedimentos */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-blue-800 mb-2">III. Procedimentos</h2>
            <div className="bg-white rounded-lg shadow p-4 border-l-4 border-yellow-600 text-gray-800 space-y-2">
              <b>Matrícula e Orientação:</b>
              <ul className="list-disc ml-6">
                <li>O estudante deve consultar docentes disponíveis (lista fornecida pela Coordenação de TCC).</li>
                <li>Formalizar a orientação em até 30 dias após o início do semestre, enviando o Requerimento de TCC I com o Termo de Compromisso assinado pelo orientador.</li>
              </ul>
              <b>Acompanhamento:</b>
              <ul className="list-disc ml-6">
                <li>Reuniões mínimas de 1 hora/semana com o orientador, registradas em relatório.</li>
              </ul>
              <b>Avaliação:</b>
              <ul className="list-disc ml-6">
                <li>Nota de 0 a 10, com aprovação para média ≥ 7,0.</li>
                <li>O orientador lança a nota no SUAP.</li>
              </ul>
            </div>
          </section>

          {/* Dúvidas Frequentes */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-blue-800 mb-2">IV. Dúvidas Frequentes</h2>
            <div className="bg-white rounded-lg shadow p-4 border-l-4 border-indigo-600 text-gray-800 space-y-2">
              <b>1. No TCC I há apresentação oral para banca examinadora?</b>
              <p>Não. O foco é a elaboração do projeto e revisão bibliográfica.</p>
              <b>2. O orientador pode ser um professor substituto?</b>
              <p>Não. O orientador deve ser docente efetivo do curso.</p>
              <b>3. É permitida coorientação por professor de outra instituição?</b>
              <p>
                Sim. Coorientadores externos devem ter, no mínimo, pós-graduação lato sensu. O docente orientador deve enviar à coordenação a comprovação da titulação.<br />
                <span className="italic text-sm">Observação: O coorientador não substitui o orientador principal.</span>
              </p>
            </div>
          </section>

          {/* Documentos para Download */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-blue-800 mb-2">V. Documentos para Download</h2>
            <div className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-700 text-gray-800">
              <a
                href="https://biblioteca.uepb.edu.br/abnt-guia-de-normalizacao/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 font-semibold underline hover:text-blue-900 block text-base"
                style={{ color: '#1d4ed8' }}
              >
                Modelos de artigo, monografia e relatório técnico (Guia de Normalização da Biblioteca)
              </a>
            </div>
          </section>

          <div className="text-center mt-8">
            <p className="text-gray-700 font-medium">Dúvidas? Entre em contato conosco!</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tcc1Page;
