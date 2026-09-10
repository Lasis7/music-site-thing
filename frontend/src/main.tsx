import ReactDOM from 'react-dom/client';
import './styles/tokens.css';
import { AuthProvider } from './providers/AuthProvider/AuthProvider.tsx';
import { ThemeProvider } from './providers/ThemeProvider/ThemeProvider.tsx';
import { InnerApp } from './config/RouterProvider.tsx';

export function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <InnerApp />
      </ThemeProvider>
    </AuthProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
