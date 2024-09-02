import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './components/Dashboard';
import CKEditorDocs from './components/CKEditorDocs';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ckeditor" element={<CKEditorDocs />} />
      </Routes>
    </Router>
  );
};

export default App;
