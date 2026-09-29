import { useApp } from '@/context/AppContext';
import { CheckCircle2, XCircle, Info, AlertTriangle, X } from 'lucide-react';

export default function ToastContainer() {
  const { toasts, removeToast } = useApp();

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 max-w-sm">
      {toasts.map((toast) => {
        const Icon =
          toast.type === 'success' ? CheckCircle2 :
          toast.type === 'error' ? XCircle :
          toast.type === 'warning' ? AlertTriangle :
          Info;
        const color =
          toast.type === 'success' ? 'text-green-600 bg-green-50 border-green-200' :
          toast.type === 'error' ? 'text-red-600 bg-red-50 border-red-200' :
          toast.type === 'warning' ? 'text-orange-600 bg-orange-50 border-orange-200' :
          'text-blue-600 bg-blue-50 border-blue-200';

        return (
          <div
            key={toast.id}
            className={`flex items-start gap-3 rounded-lg border px-4 py-3 shadow-lg animate-[slideIn_0.3s_ease-out] ${color}`}
          >
            <Icon className="h-5 w-5 flex-shrink-0 mt-0.5" />
            <p className="text-sm font-medium flex-1">{toast.message}</p>
            <button onClick={() => removeToast(toast.id)} className="flex-shrink-0 opacity-60 hover:opacity-100">
              <X className="h-4 w-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
}