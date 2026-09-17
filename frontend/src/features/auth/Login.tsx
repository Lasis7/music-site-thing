import CButton from '@/components/button';
import Card from '@/components/Card';
import { useAuth } from '@/providers/AuthProvider/useAuth';
import CInput from '@/components/input';
import { useForm } from '@tanstack/react-form';
import BigText from '@/components/bigText';
import z from 'zod';
import { userPlaceholders, passwordPlaceholders } from '@/const/auth';
import { useState } from 'react';
import { getRandomPlaceholder } from '@/shared/shared';
import { Link } from '@tanstack/react-router';
import { Eye, EyeClosed } from 'lucide-react';

export function Login() {
  const [usernamePlaceholder, setUsernamePlaceholder] = useState(
    getRandomPlaceholder([...userPlaceholders]),
  );
  const [passwordPlaceholder, setPasswordPlaceholder] = useState(
    getRandomPlaceholder([...passwordPlaceholders]),
  );

  const [passwordShown, setPasswordShown] = useState<boolean>(false);

  const loginSchema = z.object({
    username: z.string().min(1),
    password: z.string().min(1),
  });

  const { Field, handleSubmit, Subscribe } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
    onSubmit: async ({ value }) => {
      console.log(value);
      logIn(value.username);
    },
    validators: {
      onChange: loginSchema,
    },
  });

  const { logIn } = useAuth();

  return (
    <Card>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="flex flex-col gap-10 items-center w-full">
          <BigText text="Login" />
          <Field name="username">
            {(field) => (
              <CInput
                placeholder={usernamePlaceholder}
                id="username"
                value={field.state.value}
                label="Username"
                style={{
                  variant: 'normal',
                }}
                onChange={(e) => {
                  field.handleChange(e.target.value);
                  {
                    /* Get new placeholder when field is empty */
                  }
                  if (e.target.value.length === 0) {
                    setUsernamePlaceholder(
                      getRandomPlaceholder(
                        [...userPlaceholders],
                        usernamePlaceholder,
                      ),
                    );
                  }
                }}
              />
            )}
          </Field>
          <Field name="password">
            {(field) => (
              <CInput
                placeholder={passwordPlaceholder}
                id="password"
                value={field.state.value}
                label="Password"
                type="password"
                style={{
                  variant: 'extraIcon',
                }}
                iconConfig={{
                  icon: passwordShown ? (
                    <EyeClosed
                      size={32}
                      className="cursor-pointer text-button-primary-text"
                    />
                  ) : (
                    <Eye
                      size={32}
                      className="cursor-pointer text-button-primary-text"
                    />
                  ),
                  onClick: () => setPasswordShown(!passwordShown),
                }}
                onChange={(e) => {
                  field.handleChange(e.target.value);
                  if (e.target.value.length === 0) {
                    setPasswordPlaceholder(
                      getRandomPlaceholder(
                        [...passwordPlaceholders],
                        passwordPlaceholder,
                      ),
                    );
                  }
                }}
              />
            )}
          </Field>
          <p className="text-text-general">
            Don't have an account? Register{' '}
            <Link className="underline hover:text-blue-500" to="/register">
              here
            </Link>
          </p>
          <Subscribe
            selector={(state) => [
              state.canSubmit,
              state.isSubmitting,
              state.isPristine,
            ]}
            children={([canSubmit, isSubmitting, isPristine]) => (
              <CButton
                type="submit"
                label={isSubmitting ? '...' : 'Login'}
                disabled={!canSubmit || isPristine}
                style={{
                  width: 'limited',
                }}
              />
            )}
          />
        </div>
      </form>
    </Card>
  );
}
