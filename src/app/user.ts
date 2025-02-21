import * as v from 'valibot';

export const UserSchema = v.object({
  id: v.number(),
  name: v.string(),
  avatarUrl: v.string(),
  country: v.string(),
  emailAddress: v.string()
});

export const UserArraySchema = v.array(UserSchema);

export type User = v.InferOutput<typeof UserSchema>;
