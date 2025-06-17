import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

// Importa o PDF
import PlanoCursoPDF from '../assets/documents/Plano-Curso.pdf';

function isMobileDevice() {
  if (typeof window === 'undefined') return false;
  return /android|iphone|ipad|ipod|opera mini|iemobile|mobile/i.test(window.navigator.userAgent);
}

const PlanoCursoPage: React.FC = () => {
  const isMobile = isMobileDevice();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-2 sm:px-4 py-8 max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Plano de Curso</h1>
            <p className="text-gray-600 mt-2">Consulte o plano de curso oficial do Bacharelado em Computação da UEPB</p>
            <div className="w-32 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a
              href={PlanoCursoPDF}
              download="Plano-Curso.pdf"
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
              {!isMobile ? (
                <embed
                  src={PlanoCursoPDF + "#toolbar=1&navpanes=0"}
                  type="application/pdf"
                  className="w-full"
                  style={{
                    minHeight: 1200, // maior altura mínima
                    height: '95vh',  // ocupa quase toda a tela
                    borderRadius: '0.75rem'
                  }}
                  title="Plano de Curso"
                />
              ) : (
                <div className="flex flex-col items-center justify-center w-full py-12">
                  <p className="text-blue-900 font-semibold mb-4 text-center">
                    Visualização de PDF não suportada neste dispositivo.<br />
                    Clique abaixo para abrir o PDF em uma nova aba.
                  </p>
                  <a
                    href={PlanoCursoPDF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium shadow"
                  >
                    Abrir PDF
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="max-w-2xl mx-auto mt-8 bg-blue-50 rounded-lg p-4 text-blue-900 text-sm text-center">
            Caso o PDF não carregue corretamente,{' '}
            <a
              href={PlanoCursoPDF}
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

export default PlanoCursoPage;
