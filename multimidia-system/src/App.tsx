import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FlowchartPage from './pages/FlowchartPage';
import CalendarPage from './pages/CalendarPage';
import PlanoCursoPage from './pages/PlanoCursoPage';
import FormularioPage from './pages/FormularioPage';
import EstagiosPage from './pages/EstagiosPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/calendario" element={<CalendarPage />} />
      <Route path="/fluxograma" element={<FlowchartPage />} />
      <Route path="/plano-curso" element={<PlanoCursoPage />} />
      <Route path="/professores" element={<div className="min-h-screen flex flex-col bg-gray-50">Página Professores</div>} />
      <Route path="/estagios" element={<EstagiosPage />} />
      <Route path="/tcc" element={<div className="min-h-screen flex flex-col bg-gray-50">Página TCC</div>} />
      <Route path="/formularios" element={<FormularioPage />} />
    </Routes>
  );
}

export default App;