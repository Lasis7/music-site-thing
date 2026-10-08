import z from 'zod';

const registerSchema = z.object({
  email: z.email(),
  username: z.string().min(1),
  password: z
    .string()
    .min(8, 'Password must be at least 8 letters long')
    .regex(/[0-9]/, 'Password must contain a number')
    .regex(/[A-Z]/, 'Password must contain an uppercase letter')
    .regex(/[a-z]/, 'Password must contain a lowercase letter'),
});

const loginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

const updateUserSchema = z.object({
  username: z.string().min(1).optional(),
  bio: z.string().min(1).optional(),
});
