import InnerCard from '@/components/innerCard';
import { useAuth } from '@/providers/AuthProvider/useAuth';

export function Login() {
  const { logIn } = useAuth();

  function login() {
    logIn('aaa');
  }

  return (
    <InnerCard>
      <button onClick={login}>abc</button>
    </InnerCard>
  );
}
