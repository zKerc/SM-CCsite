import React from 'react';
import SocialLink from './SocialLink';

const ContactSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg overflow-hidden border border-blue-100">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-blue-800 text-white p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Coordenação do Curso</h2>
              
              <div className="mb-4 sm:mb-6">
                <h3 className="font-semibold text-blue-200 mb-1">Coordenadora</h3>
                <p className="text-base sm:text-lg flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                  Ana Isabelle Muniz Leite
                </p>
              </div>
              
              <div className="mb-4 sm:mb-6">
                <h3 className="font-semibold text-blue-200 mb-1">Coordenador Adjunto</h3>
                <p className="text-base sm:text-lg flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                  Janderson Jason Barbosa Aguiar
                </p>
              </div>
              
              <div className="mb-1">
                <h3 className="font-semibold text-blue-200 mb-2">Contato</h3>
                <p className="flex items-center mb-2 text-sm sm:text-base">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  coord.computacao.cct@setor.uepb.edu.br
                </p>
                <p className="flex items-center text-sm sm:text-base">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  (83) 3315-3357
                </p>
              </div>
            </div>
            
            <div className="md:w-1/2 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">Redes Sociais</h2>
              
              <div className="space-y-3 sm:space-y-4">
                <SocialLink
                  href="https://t.me/+OmR1fzcJXSoxZDkx"
                  label="Telegram Oficial"
                  description="Canal de comunicação principal"
                  bgClass="bg-blue-500"
                  icon={
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.136-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                    </svg>
                  }
                />
                
                <SocialLink
                  href="https://www.instagram.com/compuepb?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  label="Instagram"
                  description="Fotos e eventos do curso"
                  bgClass="bg-gradient-to-r from-purple-500 to-pink-500"
                  icon={
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  }
                />

                <SocialLink
                  href="https://uepb.edu.br"
                  label="Site da UEPB"
                  description="Universidade Estadual da Paraíba"
                  bgClass="bg-blue-800"
                  icon={
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 20v-6.5H6L12 4l6 9.5h-4V20h-4z"/>
                    </svg>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;