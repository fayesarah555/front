import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/Login/LoginPage';
import RegisterPage from './Components/Register/RegisterPage';
import Home from './Components/Admin/Home';
import DashboardLayout from './Components/Admin/DashboardLayout';
import Users from './Components/Admin/Users';
import Settings from './Components/Admin/Settings';
// import Navigation from './Navigation';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;