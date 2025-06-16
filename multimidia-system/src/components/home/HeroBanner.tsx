import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroBanner: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white py-12 md:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIiBvcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10 flex flex-col items-center">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
          Bacharelado em Computação
        </h1>
        <p className="text-base xs:text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
          Formando profissionais de excelência em tecnologia na Paraíba
        </p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <button
            className="bg-white text-blue-800 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-medium hover:bg-blue-100 transition-colors shadow-lg w-full max-w-xs sm:w-auto"
            style={{ backgroundColor: '#fff', color: '#1e40af' }}
            onClick={() => navigate('/calendario')}
          >
            Calendário Acadêmico
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-white opacity-10"></div>
    </div>
  );
};

export default HeroBanner;