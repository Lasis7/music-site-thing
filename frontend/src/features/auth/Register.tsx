import z from 'zod';
import Card from '@/components/Card';
import { useForm } from '@tanstack/react-form';
import BigText from '@/components/bigText';
import CInput from '@/components/input';
import {
  emailPlaceholders,
  userPlaceholders,
  passwordPlaceholders,
} from '@/const/auth';
import { useState } from 'react';
import { getRandomPlaceholder } from '@/shared/shared';
import CButton from '@/components/button';
import { Link } from '@tanstack/react-router';

export function Register() {
  const [emailPlaceholder, setEmailPlaceholder] = useState(
    getRandomPlaceholder([...emailPlaceholders]),
  );

  const [usernamePlaceholder, setUsernamePlaceholder] = useState(
    getRandomPlaceholder([...userPlaceholders]),
  );
  const [passwordPlaceholder, setPasswordPlaceholder] = useState(
    getRandomPlaceholder([...passwordPlaceholders]),
  );

  const registerSchema = z.object({
    email: z.email(),
    username: z.string().min(1),
    password: z
      .string()
      .min(8)
      .regex(/[0-9]/, 'Password must contain a number')
      .regex(/[A-Z]/, 'Password must contain an uppercase letter')
      .regex(/[a-z]/, 'Password must contain a lowercase letter'),
  });

  const { Field, handleSubmit, Subscribe } = useForm({
    defaultValues: {
      email: '',
      username: '',
      password: '',
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
    validators: {
      onBlur: registerSchema,
    },
  });

  return (
    <Card>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="flex flex-col gap-10 items-center w-full">
          <BigText text="Register" />
          <Field name="email">
            {(field) => {
              const { errors } = field.state.meta;
              return (
                <>
                  <CInput
                    placeholder={emailPlaceholder}
                    id="email"
                    value={field.state.value}
                    label="Email"
                    onChange={(e) => {
                      field.handleChange(e.target.value);
                      {
                        /* Get new placeholder when field is empty */
                      }
                      if (e.target.value.length === 0) {
                        setEmailPlaceholder(
                          getRandomPlaceholder(
                            [...emailPlaceholders],
                            emailPlaceholder,
                          ),
                        );
                      }
                    }}
                  />
                  {errors.length > 0 && (
                    <span className="text-red-500">{errors[0]?.message}</span>
                  )}
                </>
              );
            }}
          </Field>
          <Field name="username">
            {(field) => {
              const { errors } = field.state.meta;
              return (
                <>
                  <CInput
                    placeholder={usernamePlaceholder}
                    id="username"
                    value={field.state.value}
                    label="Username"
                    onChange={(e) => {
                      field.handleChange(e.target.value);
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
                  {errors.length > 0 && (
                    <span className="text-red-500">{errors[0]?.message}</span>
                  )}
                </>
              );
            }}
          </Field>
          <Field name="password">
            {(field) => {
              const { errors } = field.state.meta;
              return (
                <>
                  <CInput
                    placeholder={passwordPlaceholder}
                    id="password"
                    value={field.state.value}
                    label="Password"
                    type="password"
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
                  {errors.length > 0 && (
                    <span className="text-red-500">{errors[0]?.message}</span>
                  )}
                </>
              );
            }}
          </Field>
          <p className="text-text-general">
            Already have an account? Login{' '}
            <Link className="underline hover:text-blue-500" to="/login">
              here
            </Link>
          </p>
          <Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <CButton
                type="submit"
                label={isSubmitting ? '...' : 'Register'}
                disabled={!canSubmit}
              />
            )}
          />
        </div>
      </form>
    </Card>
  );
}
