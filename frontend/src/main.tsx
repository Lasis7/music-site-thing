import ReactDOM from 'react-dom/client';
import './styles/tokens.css';
import { AuthProvider } from './providers/AuthProvider/AuthProvider.tsx';
import { ThemeProvider } from './providers/ThemeProvider/ThemeProvider.tsx';
import { IntroProvider } from './providers/IntroProvider/IntroProvider.tsx';
import { InnerApp } from './config/RouterProvider.tsx';
import IntroHolder from './components/dialog/Intro/IntroHolder.tsx';

export function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <IntroProvider>
          <InnerApp />
          <IntroHolder />
        </IntroProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
