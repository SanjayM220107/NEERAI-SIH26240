import { useApp } from '@/context/AppContext';
import {
  LayoutDashboard,
  Map as MapIcon,
  Droplets,
  Brain,
  ClipboardList,
  CheckSquare,
  BarChart3,
  FileText,
  Mountain,
} from 'lucide-react';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'map', label: 'Springshed Map', icon: MapIcon },
  { id: 'analysis', label: 'Spring Analysis', icon: Droplets },
  { id: 'ai-model', label: 'AI Recharge Model', icon: Brain },
  { id: 'intervention', label: 'Intervention Planner', icon: ClipboardList },
  { id: 'validation', label: 'Field Validation', icon: CheckSquare },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'reports', label: 'Reports', icon: FileText },
];

export default function Sidebar() {
  const { currentPage, setCurrentPage } = useApp();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen sticky top-0 flex-shrink-0">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-gray-200">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-md">
            <Mountain className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900 tracking-tight">NEERAI</h1>
            <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Springshed Intelligence</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto">
        <p className="px-3 mb-2 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Main</p>
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = currentPage === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setCurrentPage(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className={`h-[18px] w-[18px] ${active ? 'text-blue-600' : 'text-gray-400'}`} />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-gray-200">
        <div className="rounded-lg bg-amber-50 border border-amber-200 px-3 py-2.5">
          <p className="text-[11px] text-amber-800 font-medium leading-snug">
            Demo / Synthetic Data
          </p>
          <p className="text-[10px] text-amber-600 mt-0.5 leading-snug">
            AI-assisted decision support. Field verification required.
          </p>
        </div>
      </div>
    </aside>
  );
}