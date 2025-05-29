import React from 'react';

const Announcements: React.FC = () => {
  const announcements = [
    {
      id: 1,
      title: 'Reunião de TCC - 2025.1',
      date: '15/05/2025',
      content: 'Próxima reunião de orientação de TCC será realizada no dia 20/05 às 14h no laboratório 3.'
    },
    {
      id: 2,
      title: 'Período de Matrícula',
      date: '10/05/2025',
      content: 'O período de matrícula para o próximo semestre será de 25/05 a 05/06. Fique atento!'
    },
    {
      id: 3,
      title: 'Semana Acadêmica de Computação',
      date: '05/05/2025',
      content: 'Inscrições abertas para a VII Semana Acadêmica de Computação. Submeta seu trabalho até 30/05.'
    }
  ];

  return (
    <section className="py-8 sm:py-12 bg-gray-50">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Avisos Recentes</h2>
          <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto mt-2"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {announcements.map((announcement) => (
            <div 
              key={announcement.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow flex flex-col min-h-[160px] sm:min-h-[220px]"
            >
              <div className="p-4 sm:p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">{announcement.title}</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                    {announcement.date}
                  </span>
                </div>
                <p className="text-gray-600 text-sm sm:text-base">{announcement.content}</p>
              </div>
              <div className="px-4 sm:px-5 py-2 sm:py-3 bg-gray-50 border-t border-gray-100 flex justify-end">
                <button className="text-blue-600 hover:text-blue-800 font-medium text-xs sm:text-sm">
                  Leia mais &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 sm:mt-10">
          <button className="bg-white border border-blue-600 text-blue-600 font-medium py-2 px-6 sm:py-2.5 sm:px-8 rounded-lg transition-colors inline-flex items-center text-sm sm:text-base">
            Ver mais
          </button>
        </div>
      </div>
    </section>
  );
};

export default Announcements; // Exportação padrão corrigida