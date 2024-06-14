import { validate, ValidationError } from 'class-validator';

export const AppValidator = async (
  input: any
): Promise<ValidationError[] | false> => {
  const error = await validate(input, { ValidationError: { target: true } });
  if (error.length) return error;
  return false;
};
