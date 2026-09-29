import { AppProvider, useApp } from '@/context/AppContext';
import Sidebar from '@/components/Sidebar';
import ToastContainer from '@/components/Toast';
import Dashboard from '@/pages/Dashboard';
import SpringshedMap from '@/pages/SpringshedMap';
import SpringAnalysis from '@/pages/SpringAnalysis';
import AIRechargeModel from '@/pages/AIRechargeModel';
import InterventionPlanner from '@/pages/InterventionPlanner';
import FieldValidation from '@/pages/FieldValidation';
import Analytics from '@/pages/Analytics';
import Reports from '@/pages/Reports';

function PageRouter() {
  const { currentPage } = useApp();

  switch (currentPage) {
    case 'dashboard': return <Dashboard />;
    case 'map': return <SpringshedMap />;
    case 'analysis': return <SpringAnalysis />;
    case 'ai-model': return <AIRechargeModel />;
    case 'intervention': return <InterventionPlanner />;
    case 'validation': return <FieldValidation />;
    case 'analytics': return <Analytics />;
    case 'reports': return <Reports />;
    default: return <Dashboard />;
  }
}

function AppLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="print:hidden">
        <Sidebar />
      </div>
      <main className="flex-1 overflow-x-auto">
        <PageRouter />
      </main>
      <ToastContainer />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppLayout />
    </AppProvider>
  );
}

export default App;