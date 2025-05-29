import React, { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

// Cores das áreas (tons mais escuros)
const COLORS = {
  comum: 'bg-green-500 border-green-700',
  ciencia: 'bg-blue-500 border-blue-700',
  prog: 'bg-orange-500 border-orange-700',
  base: 'bg-yellow-500 border-yellow-700',
  eletiva: 'bg-purple-600 border-purple-800',
  tcc: 'bg-yellow-300 border-yellow-600',
};

// Dados das disciplinas (adicione todas conforme sua matriz)
const SEMESTERS = [
  [
    { name: 'Ética em computação', hours: 30, area: 'comum' },
    { name: 'Metodologia Científica', hours: 60, area: 'comum' },
    { name: 'Português instrumental', hours: 30, area: 'comum' },
    { name: 'Introdução à computação', hours: 60, area: 'ciencia', prereq: [] },
    { name: 'Lógica para computação', hours: 60, area: 'ciencia', prereq: [] },
    { name: 'Matemática Discreta I', hours: 60, area: 'ciencia', prereq: [] },
    { name: 'Algoritmos', hours: 60, area: 'prog', prereq: [] },
  ],
  [
    { name: 'Cálculo Diferencial e Integral I', hours: 60, area: 'comum', prereq: [] },
    { name: 'Vetores e geometria analítica', hours: 60, area: 'comum', prereq: [] },
    { name: 'Inglês instrumental', hours: 30, area: 'comum', prereq: [] },
    { name: 'Tecnologia, ciência e sociedade', hours: 30, area: 'comum', prereq: [] },
    { name: 'Matemática Discreta II', hours: 60, area: 'ciencia', prereq: ['Matemática Discreta I'] },
    { name: 'Linguagem de Programação I', hours: 60, area: 'prog', prereq: ['Algoritmos'] },
    { name: 'Laboratório de Programação I', hours: 60, area: 'prog', prereq: ['Algoritmos'] },
  ],
  [
    { name: 'Cálculo Diferencial e Integral II', hours: 60, area: 'comum', prereq: ['Cálculo Diferencial e Integral I'] },
    { name: 'Álgebra linear I', hours: 60, area: 'comum', prereq: ['Vetores e geometria analítica'] },
    { name: 'Org. e arq. de computadores', hours: 60, area: 'ciencia', prereq: ['Introdução a Computação'] },
    { name: 'Laboratório de org. e arq. de computadores', hours: 60, area: 'ciencia', prereq: ['Introdução a Computação'] },
    { name: 'Cálculo numérico', hours: 60, area: 'comum', prereq: ['Cálculo Diferencial e Integral I'] },
    { name: 'Linguagem de Programação II', hours: 60, area: 'prog', prereq: ['Linguagem de Programação I'] },
    { name: 'Laboratório de Programação II', hours: 60, area: 'prog', prereq: ['Laboratório de Programação I'] },
  ],
  [
    { name: 'Probabilidade e estatística I', hours: 60, area: 'comum', prereq: ['Cálculo Diferencial e Integral II'] },
    { name: 'Cálculo Diferencial e Integral III', hours: 60, area: 'comum', prereq: ['Cálculo Diferencial e Integral II', 'Álgebra Linear'] },
    { name: 'Análise e projeto de sistemas', hours: 60, area: 'base', prereq: ['Linguagem de Programação II'] },
    { name: 'Linguagens formais e teoria da computação', hours: 60, area: 'ciencia', prereq: ['Lógica para computação'] },
    { name: 'Tecnologia de desenvolvimento de interface gráfica', hours: 60, area: 'base', prereq: ['Linguagem de Programação II'] },
    { name: 'Estrutura de dados', hours: 60, area: 'prog', prereq: ['Linguagem de Programação II'] },
    { name: 'Lab. de estrutura de dados', hours: 60, area: 'prog', prereq: ['Linguagem de Programação II'] },
  ],
  [
    { name: 'Probabilidade e estatística II', hours: 60, area: 'comum', prereq: ['Probabilidade e estatística I'] },
    { name: 'Redes de computadores', hours: 60, area: 'ciencia', prereq: ['Org. e arq. de computadores'] },
    { name: 'Engenharia de software I', hours: 60, area: 'base', prereq: ['Análise e projeto de sistemas'] },
    { name: 'Banco de dados', hours: 60, area: 'base', prereq: ['Estrutura de Dados'] },
    { name: 'Técnicas de análise de algoritmo', hours: 60, area: 'ciencia', prereq: ['Cálculo númerico'] },
    { name: 'Paradigmas de programação', hours: 60, area: 'prog', prereq: ['Linguagem de Programação II'] },
    { name: 'Métodos avançados de programação', hours: 60, area: 'prog', prereq: ['Estrutura de Dados', 'Laboratório de Estrutura de Dados'] },
  ],
  [
    { name: 'Computação Gráfica', hours: 60, area: 'base', prereq: ['Cálculo Diferencial e Integral III', 'Técnicas de análise de algoritmo'] },
    { name: 'Sistemas operacionais', hours: 60, area: 'ciencia', prereq: ['Org. e arq. de computadores'] },
    { name: 'Interconexão e segurança de redes de computadores', hours: 60, area: 'ciencia', prereq: ['Redes de computadores'] },
    { name: 'Engenharia de software II', hours: 60, area: 'base', prereq: ['Engenharia de software I'] },
    { name: 'Gerência de projeto', hours: 60, area: 'base', prereq: ['Engenharia de software I'] },
    { name: 'Inteligência artificial', hours: 60, area: 'ciencia', prereq: ['Paradigmas de programação'] },
  ],
  [
    { name: 'Sistemas multimídia', hours: 60, area: 'base', prereq: ['Computação Gráfica'] },
    { name: 'Compiladores', hours: 60, area: 'ciencia', prereq: ['Linguagens formais e teoria da computação'] },
    { name: 'Projeto de interface homem-computador', hours: 60, area: 'base', prereq: ['Engenharia de software II'] },
    { name: 'Eletiva I', hours: 60, area: 'eletiva', prereq: [] },
    { name: 'Programação WEB', hours: 60, area: 'prog', prereq: ['Métodos avançados de programação'] },
    { name: 'TCC I', hours: 30, area: 'tcc', prereq: [] },
  ],
  [
    { name: 'Educação à distância', hours: 60, area: 'base', prereq: [] },
    { name: 'Métodos formais', hours: 60, area: 'ciencia', prereq: ['Compiladores'] },
    { name: 'Computação de alto desempenho', hours: 60, area: 'ciencia', prereq: ['Sistemas operacionais', 'Interconexão e segurança de redes de computadores'] },
    { name: 'Eletiva II', hours: 60, area: 'eletiva', prereq: [] },
    { name: 'Eletiva III', hours: 60, area: 'eletiva', prereq: [] },
    { name: 'TCC II', hours: 30, area: 'tcc', prereq: ['TCC I'] },
  ],
];

// Função para cor da área
function getColor(area: string) {
  return COLORS[area as keyof typeof COLORS] || 'bg-gray-200 border-gray-300';
}

const FlowchartPage: React.FC = () => {
  const [selected, setSelected] = useState<{ name: string; prereq?: string[] } | null>(null);

  // Carga horária total por semestre
  const totalHours = SEMESTERS.map((sem) =>
    sem.reduce((acc, disc) => acc + (disc.hours || 0), 0)
  );

  // Legenda das áreas
  const legend = [
    { label: 'Básico comum', color: COLORS.comum },
    { label: 'Ciência da Computação', color: COLORS.ciencia },
    { label: 'Programação', color: COLORS.prog },
    { label: 'Base Tecnológica', color: COLORS.base },
    { label: 'Eletivas', color: COLORS.eletiva },
    { label: 'TCC', color: COLORS.tcc },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-2 sm:px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Matriz Curricular do Curso</h1>
            <p className="text-gray-600 mt-2">Estrutura curricular do curso de Bacharelado em Computação</p>
            <div className="w-32 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          {/* Botão único para download */}
          <div className="flex flex-wrap gap-4 mb-6 justify-center">
            <a 
              href="https://lh4.googleusercontent.com/YggM8jMmoG5CZ5vCf1VLOoT0v-YqMAbLDKvG0-aznpDmP4Sz_CqKO5AQCdPL73hXdgvSprOjCFE-O3EsMEOibMC_4EAghZEnJTaXuhFKIjrF5MnkScTjj_A5NtcYY3RZtg=w1280" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg transition-colors flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              Baixar Fluxograma Oficial (JPG)
            </a>
          </div>

          {/* Legenda */}
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            {legend.map((item) => (
              <div key={item.label} className={`flex items-center px-3 py-1 rounded border ${item.color}`}>
                <span className="w-3 h-3 rounded-full mr-2 inline-block border border-gray-400"></span>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Matriz Curricular em formato de tabela, responsivo e centralizado */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-screen-2xl overflow-x-auto">
              <table className="w-full border-collapse rounded-xl overflow-hidden shadow bg-white text-base">
                <thead>
                  <tr>
                    {SEMESTERS.map((_, i) => (
                      <th
                        key={i}
                        className="border border-gray-300 p-2 md:p-3 bg-blue-50 text-xs md:text-base text-blue-900 font-bold"
                      >
                        {i + 1}º SEMESTRE
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Máximo de disciplinas em um semestre */}
                  {Array.from({ length: Math.max(...SEMESTERS.map(s => s.length)) }).map((_, rowIdx) => (
                    <tr key={rowIdx}>
                      {SEMESTERS.map((sem, colIdx) => {
                        const disc = sem[rowIdx];
                        if (!disc) {
                          return <td key={colIdx} className="border border-gray-200 p-2 md:p-3 bg-gray-50"></td>;
                        }
                        return (
                          <td
                            key={colIdx}
                            className={`border-2 p-2 md:p-3 cursor-pointer transition-all text-center select-none ${getColor(disc.area)} ${selected?.name === disc.name ? 'ring-2 ring-blue-500' : ''}`}
                            style={{
                              minWidth: '120px',
                              maxWidth: '220px',
                              wordBreak: 'break-word',
                            }}
                            onClick={() => setSelected(disc)}
                          >
                            <div className="font-bold text-white drop-shadow-sm text-xs md:text-base" style={{ textShadow: '0 1px 2px #0003' }}>{disc.name}</div>
                            <div className="text-xs text-white/90">{disc.hours}h</div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    {totalHours.map((h, i) => (
                      <td key={i} className="border border-gray-300 p-2 md:p-3 bg-blue-50 text-xs md:text-base font-bold text-blue-900 text-center">
                        {h}h
                      </td>
                    ))}
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Cards de pré-requisitos e como navegar, lado a lado em telas grandes */}
          <div className="flex flex-col md:flex-row gap-8 mt-8 max-w-5xl mx-auto">
            <div className="md:w-1/2 w-full">
              <div className="bg-white rounded-xl shadow p-6 min-h-[140px]">
                <h2 className="font-bold text-blue-800 mb-2 text-lg">Pré-requisitos</h2>
                {selected ? (
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">{selected.name}</div>
                    {selected.prereq && selected.prereq.length > 0 ? (
                      <ul className="list-disc ml-5 text-gray-700">
                        {selected.prereq.map((p, idx) => (
                          <li key={idx}>{p}</li>
                        ))}
                      </ul>
                    ) : (
                      <div className="text-gray-500">Sem pré-requisitos.</div>
                    )}
                  </div>
                ) : (
                  <div className="text-gray-500">Clique em uma disciplina para ver os pré-requisitos.</div>
                )}
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="bg-white rounded-xl shadow-lg p-6 min-h-[140px]">
                <h2 className="text-lg font-bold text-gray-800 mb-2">Como navegar pela Matriz Curricular</h2>
                <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                  <li>
                    <b>Clique</b> em uma disciplina para ver seus pré-requisitos ao lado.
                  </li>
                  <li>
                    As cores indicam as áreas: <span className="font-semibold text-green-700">Básico comum</span>, <span className="font-semibold text-blue-700">Ciência da Computação</span>, <span className="font-semibold text-orange-700">Programação</span>, <span className="font-semibold text-yellow-700">Base Tecnológica</span>, <span className="font-semibold text-purple-700">Eletivas</span> e <span className="font-semibold text-yellow-600">TCC</span>.
                  </li>
                  <li>
                    Consulte a matriz curricular completa para detalhes de dependências e ementas.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FlowchartPage;