import './App.css';
import Layout from './pages/customer-dashboard/Layout';
import AdminLayout from './pages/admin-dashboard/AdminLayout'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Login from './pages/auth/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Login} />
          <Route path='/admin' Component={AdminLayout} />
          <Route path='/customer' Component={Layout} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
