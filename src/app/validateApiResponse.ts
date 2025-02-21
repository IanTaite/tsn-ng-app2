import { catchError, map, pipe } from 'rxjs';
import { parse, BaseSchema, ValiError } from 'valibot';

export function validateApiResponse<T>(schema: BaseSchema<T, T, any>) {
  return pipe(
    map((response: unknown) => parse(schema, response)),
    catchError((error) => {
      console.error('API response validation error', error);
      throw error;
    })
  );
}

