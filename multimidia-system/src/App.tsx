import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FlowchartPage from './pages/FlowchartPage';
import CalendarPage from './pages/CalendarPage';
import PlanoCursoPage from './pages/PlanoCursoPage';
import FormularioPage from './pages/FormularioPage';
import EstagiosPage from './pages/EstagiosPage';
import TccPage from './pages/TccPage';
import Tcc1Page from './pages/Tcc1Page';
import Tcc2Page from './pages/Tcc2Page';
import ProfessoresPage from './pages/ProfessoresPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/calendario" element={<CalendarPage />} />
      <Route path="/fluxograma" element={<FlowchartPage />} />
      <Route path="/plano-curso" element={<PlanoCursoPage />} />
      <Route path="/professores" element={<ProfessoresPage />} />
      <Route path="/estagios" element={<EstagiosPage />} />
      <Route path="/tcc" element={<TccPage />} />
      <Route path="/tcc1" element={<Tcc1Page />} />
      <Route path="/tcc2" element={<Tcc2Page />} />
      <Route path="/formularios" element={<FormularioPage />} />
    </Routes>
  );
}

export default App;