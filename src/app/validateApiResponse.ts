import { map, pipe } from 'rxjs';
import { z } from 'zod';

export function validateApiResponse<T extends z.ZodTypeAny>(schema: T) {
  return pipe(
    map((response: unknown) => schema.parse(response))
  );
}
