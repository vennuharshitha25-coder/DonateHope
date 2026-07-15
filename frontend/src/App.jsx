import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import RegisterDonor from './pages/RegisterDonor';
import RegisterOrg from './pages/RegisterOrg';
import DashboardDonor from './pages/DashboardDonor';
import DashboardOrg from './pages/DashboardOrg';
import ProtectedRoute from './components/ProtectedRoute';

import AdminDashboard from './pages/AdminDashboard';
import PaymentPage from './pages/PaymentPage';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderMainContent = () => {
    switch (currentPage) {
      case 'landing': return <LandingPage onNavigate={setCurrentPage} />;
      case 'login': return <Login onNavigate={setCurrentPage} />;
      case 'reg-donor': return <RegisterDonor onNavigate={setCurrentPage} />;
      case 'reg-org': return <RegisterOrg onNavigate={setCurrentPage} />;
      case 'payment': return <PaymentPage />;
      case 'donor-dash':
        return (
          <ProtectedRoute allowedRoles={['donor']}>
            <div className="flex pt-16 min-h-screen bg-gray-50/50">
              
              <main className="flex-1 p-4 md:p-8 overflow-x-hidden"><DashboardDonor /></main>
            </div>
          </ProtectedRoute>
        );
      case 'org-dash':
        return (
          <ProtectedRoute allowedRoles={['organization']}>
            <div className="flex pt-16 min-h-screen bg-gray-50/50">
              <main className="flex-1 p-4 md:p-8 overflow-x-hidden"><DashboardOrg /></main>
            </div>
          </ProtectedRoute>
        );
        case 'admin-dash':
  return (
    <ProtectedRoute allowedRoles={['admin']}>
      <div className="flex pt-16 min-h-screen bg-gray-50/50">
        <main className="flex-1 p-4 md:p-8 overflow-x-hidden">
          <AdminDashboard />
        </main>
      </div>
    </ProtectedRoute>
  );
      default: return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
          onNavigate={setCurrentPage}
        />
        {renderMainContent()}
      </div>
    </AuthProvider>
  );
}

export default App;