import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleCreateManuscript = () => {
    navigate('/ckeditor');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div>
      <h1>Student Dashboard</h1>
      <button onClick={handleCreateManuscript}>Create Manuscript</button>
      <button onClick={handleLogout} style={{ marginLeft: '10px' }}>Logout</button>
    </div>
  );
};

export default Dashboard;
