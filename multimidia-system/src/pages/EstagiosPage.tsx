import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const EstagiosPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-2 sm:px-4 py-8 max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900">Estágio Supervisionado</h1>
            <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
              Informações essenciais sobre estágio obrigatório, convalidação e procedimentos para estudantes do Bacharelado em Computação.
            </p>
            <div className="w-32 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          {/* Estágio Supervisionado */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-blue-800 mb-2 flex items-center gap-2">
              <span role="img" aria-label="estágio">🏢</span> Estágio Supervisionado
            </h2>
            <div className="bg-white rounded-lg shadow p-4 space-y-3 border-l-4 border-blue-700 text-gray-800">
              <p><b>Art. 66.</b> O Estágio Supervisionado do curso de Bacharelado é um componente curricular obrigatório, definido no PPC. Tem como objetivo proporcionar a integração entre teoria e prática, desenvolvendo competências e habilidades essenciais para o exercício profissional.</p>
              <p><b>Art. 67.</b> O estágio pode ser realizado na UEPB ou em instituições públicas, privadas e demais setores que possuam estrutura e organização compatíveis com a área de formação, preferencialmente na cidade sede do curso ou em cidades vizinhas.</p>
              <p><b>Art. 68.</b> A carga horária do estágio obrigatório é definida no PPC, de acordo com as Diretrizes Curriculares Nacionais (DCNs) do curso.</p>
              <p className="italic text-sm text-blue-900">Parágrafo único: Essa carga horária pode ser cumprida de forma distribuída ao longo dos períodos ou concentrada, conforme as DCNs.</p>
            </div>
          </section>

          {/* Convalidação de Estágio */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-blue-800 mb-2 flex items-center gap-2">
              <span role="img" aria-label="convalidação">🔁</span> Convalidação de Estágio
            </h2>
            <div className="bg-white rounded-lg shadow p-4 space-y-3 border-l-4 border-yellow-600 text-gray-800">
              <p><b>Art. 69.</b> É possível solicitar a convalidação do estágio obrigatório caso o estudante tenha exercido, nos últimos três anos, atividade profissional compatível com sua área de formação, por um período mínimo de seis meses e com carga horária igual ou superior à exigida pelo curso.</p>
              <ul className="list-disc ml-6 text-gray-800">
                <li>
                  <b>§1º.</b> A solicitação deve ser feita por meio de requerimento específico, acompanhado de documentação comprobatória, e entregue ao Coordenador de Estágio do curso.
                  {' '}Acesse o formulário em{' '}
                  <a
                    href="https://proreitorias.uepb.edu.br/prograd/requerimento/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 font-semibold underline hover:text-blue-900"
                    style={{ color: '#1d4ed8' }}
                  >
                    https://proreitorias.uepb.edu.br/prograd/requerimento/
                  </a>.
                </li>
                <li><b>§2º.</b> É necessário apresentar um relatório de atividades, que será avaliado pelo orientador, com emissão de parecer.</li>
                <li><b>§3º.</b> Toda a documentação, juntamente com o parecer, será analisada pelo Coordenador de Estágio do curso e encaminhada para homologação pela Coordenação Geral de Estágios (PROGRAD).</li>
              </ul>
              <p><b>Art. 70.</b> Se aprovado, o processo será formalizado na PROGRAD, que registrará a integralização das horas referentes à convalidação.</p>
              <p><b>Art. 71.</b> Não é permitido utilizar as mesmas horas de estágio para cumprir mais de um componente curricular.</p>
            </div>
          </section>

          {/* Procedimentos para Convalidação */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-blue-800 mb-2 flex items-center gap-2">
              <span role="img" aria-label="procedimentos">✅</span> Procedimentos para Convalidação
            </h2>
            <div className="bg-white rounded-lg shadow p-4 border-l-4 border-green-600 space-y-4 text-gray-800">
              <div>
                <p className="font-semibold text-blue-900 mb-1">Na condição de <span className="underline">Empregado</span>, apresentar:</p>
                <ul className="list-disc ml-6">
                  <li>Carteira de Trabalho (CTPS) ou declaração da empresa, em papel timbrado, assinada e carimbada, informando que atuou na área por período igual ou superior a:</li>
                  <li className="ml-4 text-sm">225 horas (grade antiga) ou 240 horas (grade nova).</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-blue-900 mb-1">Na condição de <span className="underline">Empresário</span>, apresentar:</p>
                <ul className="list-disc ml-6">
                  <li>Cartão do CNPJ;</li>
                  <li>Contrato social ou documento oficial que comprove participação no quadro societário da empresa, por tempo igual ou superior ao estágio obrigatório.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-blue-900 mb-1">Na condição de <span className="underline">Autônomo</span>, apresentar:</p>
                <ul className="list-disc ml-6">
                  <li>Comprovante de registro na prefeitura;</li>
                  <li>Comprovante de recolhimento do ISS;</li>
                  <li>Carnê de contribuição ao INSS, correspondente ao período mínimo exigido.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Procedimentos para Formalização */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-blue-800 mb-2 flex items-center gap-2">
              <span role="img" aria-label="formulario">📝</span> Procedimentos para Formalização da Convalidação
            </h2>
            <div className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-400 space-y-3 text-gray-800">
              <ol className="list-decimal ml-6 space-y-1">
                <li>Verificar se está apto ao estágio, conforme o PPC do curso;</li>
                <li>
                  Preencher o formulário de requerimento de convalidação disponível em:{' '}
                  <a
                    href="https://proreitorias.uepb.edu.br/prograd/requerimento/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 font-semibold underline hover:text-blue-900"
                    style={{ color: '#1d4ed8' }}
                  >
                    https://proreitorias.uepb.edu.br/prograd/requerimento/
                  </a>
                </li>
                <li>Anexar ao requerimento:
                  <ul className="list-disc ml-6">
                    <li>Documentação comprobatória;</li>
                    <li>Relatório das atividades desenvolvidas (formato de Relatório de Atividades de Estágio);</li>
                  </ul>
                </li>
                <li>Abrir um processo no setor de protocolo, solicitando a convalidação, e endereçá-lo à Coordenação do Curso ou à Coordenação Geral de Estágios (PROGRAD);</li>
                <li>Encaminhar o processo.</li>
              </ol>
              <p>
                <b>Fluxo:</b> A Coordenação do Curso analisará o pedido e, se estiver de acordo, encaminhará para parecer da Coordenação de Estágio. Após análise, o processo segue para a Coordenação Geral de Estágio (PROGRAD) para formalização, caso o parecer seja favorável.
              </p>
            </div>
          </section>

          {/* Acompanhamento e Avaliação do Estágio */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-blue-800 mb-2 flex items-center gap-2">
              <span role="img" aria-label="acompanhamento">🔍</span> Acompanhamento e Avaliação do Estágio
            </h2>
            <div className="bg-white rounded-lg shadow p-4 border-l-4 border-indigo-600 space-y-3 text-gray-800">
              <p><b>Art. 60.</b> Para realizar ou convalidar o estágio, o estudante deve estar regularmente matriculado.</p>
              <p className="text-sm text-blue-900 italic">Parágrafo único: O Coordenador de Estágio é responsável por orientar os estudantes nos procedimentos de matrícula, acompanhamento, avaliação e convalidação.</p>
              <p><b>Art. 61.</b> O estudante deve elaborar o plano de atividades e reunir a documentação para assinatura do Termo de Compromisso entre a UEPB e a instituição concedente, a ser entregue à PROGRAD.</p>
              <ul className="list-disc ml-6 text-gray-800">
                <li><b>§1º.</b> Se o estágio for realizado na própria UEPB, o Termo de Compromisso é dispensado.</li>
                <li><b>§2º.</b> O PPC do curso define os procedimentos para indicação dos docentes orientadores.</li>
                <li><b>§3º.</b> A relação de orientação é formalizada através de uma Carta de Aceite de Orientação.</li>
                <li><b>§4º.</b> O plano de trabalho deve incluir:
                  <ul className="list-disc ml-6">
                    <li>Dias e horários das orientações;</li>
                    <li>Se serão presenciais ou remotas;</li>
                    <li>Como ocorrerá o acompanhamento das atividades.</li>
                  </ul>
                </li>
              </ul>
              <p><b>Art. 62.</b> Cabe à UEPB, por meio do orientador ou coordenador de estágio, verificar se as atividades propostas estão alinhadas com a formação do estudante.</p>
              <p><b>Art. 63.</b> As atividades do estágio devem ser descritas em relatório, que será avaliado pelo orientador.</p>
              <ul className="list-disc ml-6 text-gray-800">
                <li>I. O relatório deve estabelecer a relação entre teoria e prática.</li>
                <li>II. Ele pode servir de base para o Trabalho de Conclusão de Curso (TCC).</li>
                <li>III. Os relatórios finais serão arquivados pelos orientadores e uma cópia enviada à Coordenação de Estágio para registro.</li>
              </ul>
              <ul className="list-disc ml-6 text-gray-800">
                <li className="text-sm"><b>§1º.</b> Uma amostra dos relatórios será avaliada pelos NDEs e/ou por pareceristas da PROGRAD para monitoramento da qualidade e proposição de melhorias.</li>
                <li className="text-sm"><b>§2º.</b> As formas de avaliação dos estágios supervisionados estão descritas no PPC do curso.</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EstagiosPage;
