import { z } from 'zod';

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  avatarUrl: z.string(),
  country: z.string(),
  emailAddress: z.string()
});

export const UserArraySchema = z.array(UserSchema);

export type User = z.infer<typeof UserSchema>;
