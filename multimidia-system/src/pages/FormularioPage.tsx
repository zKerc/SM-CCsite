import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

// Importa o PDF
import FormModelPDF from '../assets/documents/Form-Model.pdf';

const FormularioPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-2 sm:px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Formulário de Requerimento Geral</h1>
            <p className="text-gray-600 mt-2">Baixe, preencha e envie o formulário oficial para solicitações acadêmicas na coordenação do curso</p>
            <div className="w-32 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900 p-4 rounded-lg shadow text-base">
              <strong>Atenção:</strong> O formulário de requerimento geral deve ser <b>preenchido, assinado</b> (digitalmente ou à mão) e enviado para o e-mail da coordenação (<span className="underline">coord.computacao.cct@setor.uepb.edu.br</span>) para qualquer solicitação acadêmica, como trancamento, aproveitamento, declarações, entre outros.
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a
              href={FormModelPDF}
              download="Form-Model.pdf"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg transition-colors font-medium shadow flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              Baixar PDF
            </a>
          </div>

          <div className="w-full flex justify-center">
            <div className="w-full max-w-4xl bg-white rounded-xl shadow border border-gray-200 p-2 sm:p-4 flex justify-center">
              <embed
                src={FormModelPDF + "#toolbar=1&navpanes=0"}
                type="application/pdf"
                className="w-full"
                style={{
                  minHeight: 900,
                  height: '90vh',
                  borderRadius: '0.75rem'
                }}
                title="Formulário de Requerimento Geral"
              />
            </div>
          </div>

          <div className="max-w-2xl mx-auto mt-8 bg-blue-50 rounded-lg p-4 text-blue-900 text-sm text-center">
            Caso o PDF não carregue corretamente,{' '}
            <a
              href={FormModelPDF}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-800 hover:underline"
              style={{ color: '#1e3a8a', textDecoration: 'none' }}
              onMouseOver={e => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseOut={e => (e.currentTarget.style.textDecoration = 'none')}
            >
              clique aqui para abrir em nova aba
            </a>.
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FormularioPage;
