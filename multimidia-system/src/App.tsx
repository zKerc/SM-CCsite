import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FlowchartPage from './pages/FlowchartPage';
import CalendarPage from './pages/CalendarPage';
import PlanoCursoPage from './pages/PlanoCursoPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/calendario" element={<CalendarPage />} />
      <Route path="/fluxograma" element={<FlowchartPage />} />
      <Route path="/plano-curso" element={<PlanoCursoPage />} />
      <Route path="/professores" element={<div className="min-h-screen flex flex-col bg-gray-50">Página Professores</div>} />
      <Route path="/estagios" element={<div className="min-h-screen flex flex-col bg-gray-50">Página Estágios</div>} />
      <Route path="/tcc" element={<div className="min-h-screen flex flex-col bg-gray-50">Página TCC</div>} />
      <Route path="/formularios" element={<div className="min-h-screen flex flex-col bg-gray-50">Página Formulários</div>} />
    </Routes>
  );
}

export default App;