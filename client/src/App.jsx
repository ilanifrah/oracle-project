import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext.jsx';
import { QuizProvider } from './context/QuizContext.jsx';

import LanguageSelect from './pages/LanguageSelect.jsx';
import Landing        from './pages/Landing.jsx';
import Intake         from './pages/Intake.jsx';
import Quiz           from './pages/Quiz.jsx';
import Results        from './pages/Results.jsx';
import Report         from './pages/Report.jsx';

function AppRoutes() {
  const { language } = useLanguage();

  // Gate: force language selection before anything else
  if (!language) {
    return <LanguageSelect />;
  }

  return (
    <Routes>
      <Route path="/"                    element={<Landing />} />
      <Route path="/intake"              element={<Intake />} />
      <Route path="/quiz"                element={<Quiz />} />
      <Route path="/results"             element={<Results />} />
      <Route path="/report/:sessionId"   element={<Report />} />
      <Route path="*"                    element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <QuizProvider>
          <AppRoutes />
        </QuizProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}
