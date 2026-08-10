import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/tokens.css';
import { AuthProvider } from './providers/AuthProvider/AuthProvider.tsx';
import { InnerApp } from './config/RouterProvider.tsx';

export function App() {
  return (
    <AuthProvider>
      <InnerApp />
    </AuthProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
