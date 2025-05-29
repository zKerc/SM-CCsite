import React from 'react';
import { Link } from 'react-router-dom';

const QuickLinks: React.FC = () => {
  const links = [
    { 
      title: 'Plano de Curso', 
      description: 'Conheça a estrutura curricular e as disciplinas do curso',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
        </svg>
      ),
      path: '/plano-curso'
    },
    { 
      title: 'Fluxograma', 
      description: 'Visualize o caminho das disciplinas ao longo dos períodos',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
      ),
      path: '/fluxograma'
    },
    { 
      title: 'Professores', 
      description: 'Conheça o corpo docente e suas áreas de atuação',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
      path: '/professores'
    },
    { 
      title: 'Estágios', 
      description: 'Informações sobre estágios obrigatórios e supervisionados',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      path: '/estagios'
    },
    { 
      title: 'TCC', 
      description: 'Trabalho de Conclusão de Curso: normas e orientações',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      ),
      path: '/tcc'
    },
    { 
      title: 'Formulários', 
      description: 'Documentos e formulários para solicitações acadêmicas',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      ),
      path: '/formularios'
    },
  ];

  return (
    <section className="py-10 sm:py-14 md:py-16 bg-gray-50">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Recursos do Curso</h2>
          <p className="text-gray-600 mt-2 sm:mt-3 max-w-2xl mx-auto text-base sm:text-lg">
            Acesse rapidamente as principais informações e ferramentas acadêmicas
          </p>
          <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto mt-3 sm:mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 max-w-6xl mx-auto">
          {links.map((link, index) => (
            <Link 
              key={index} 
              to={link.path}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group relative min-h-[180px] sm:min-h-[220px] h-[200px] sm:h-[240px] flex flex-col"
            >
              <div className="p-4 sm:p-6 flex items-start flex-1">
                <div className="bg-blue-100 p-2 sm:p-3 rounded-lg text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {link.icon}
                </div>
                <div className="ml-3 sm:ml-5">
                  <h3 className="font-bold text-lg sm:text-xl text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                    {link.title}
                  </h3>
                  <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base group-hover:text-gray-800 transition-colors duration-300">
                    {link.description}
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 px-4 sm:px-6 py-3 sm:py-4 w-full flex justify-end bg-gradient-to-t from-gray-50 via-white/80 to-transparent pointer-events-none">
                <span className="font-medium text-blue-600 group-hover:text-blue-800 flex items-center pointer-events-auto bg-white rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 shadow transition-colors text-sm sm:text-base">
                  Acessar
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;