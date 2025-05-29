import React, { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

// Importa os PDFs
import CA20251 from '../assets/documents/CA-2025.1.pdf';
import CA20252 from '../assets/documents/CA-2025.2.pdf';

const calendars = [
  {
    label: 'Calendário 2025.1',
    file: CA20251,
    download: 'CA-2025.1.pdf',
  },
  {
    label: 'Calendário 2025.2',
    file: CA20252,
    download: 'CA-2025.2.pdf',
  },
];

const CalendarPage: React.FC = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-2 sm:px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Calendário Acadêmico</h1>
            <p className="text-gray-600 mt-2">Consulte o calendário oficial da UEPB para o ano de 2025</p>
            <div className="w-32 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {calendars.map((cal, idx) => (
              <button
                key={cal.label}
                className={`px-5 py-2.5 rounded-lg font-medium transition-colors shadow text-base
                  ${selected === idx
                    ? 'bg-blue-700 text-white border-2 border-black'
                    : 'bg-white text-blue-800 hover:bg-blue-100 border-0'
                  }`}
                onClick={() => setSelected(idx)}
                style={{
                  // Remova o color manual, deixe o Tailwind controlar as cores
                  border: selected === idx ? '2px solid #000' : 'none',
                  backgroundColor: selected === idx ? '#1d4ed8' : '#fff', // força fundo azul quando selecionado
                  color: selected === idx ? '#fff' : '#1e3a8a', // força texto branco quando selecionado
                }}
              >
                {cal.label}
              </button>
            ))}
            <a
              href={calendars[selected].file}
              download={calendars[selected].download}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg transition-colors font-medium shadow flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              Baixar PDF
            </a>
          </div>

          <div className="w-full flex justify-center">
            <div className="w-full max-w-4xl bg-white rounded-xl shadow border border-gray-200 p-2 sm:p-4">
              <embed
                src={calendars[selected].file + "#toolbar=1&navpanes=0"}
                type="application/pdf"
                className="w-full"
                style={{
                  minHeight: 900, // aumente aqui para mais comprimento
                  height: '90vh',
                  borderRadius: '0.75rem'
                }}
                title={calendars[selected].label}
              />
            </div>
          </div>

          <div className="max-w-2xl mx-auto mt-8 bg-blue-50 rounded-lg p-4 text-blue-900 text-sm text-center">
            Caso o PDF não carregue corretamente,{' '}
            <a
              href={calendars[selected].file}
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

export default CalendarPage;
