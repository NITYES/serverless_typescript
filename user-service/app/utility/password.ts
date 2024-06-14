import { compare, genSalt, hash } from 'bcrypt';
type hashedPassword = string;

export const getSalt = async (): Promise<string> => {
  return genSalt();
};

export const hashedPassword = async (
  password: string,
  salt: string
): Promise<hashedPassword> => {
  // const salt=await getSalt()
  return hash(password, salt);
};

export const verifyPassword = async (
  inputPassword: string,
  savedPassword: string,
  salt: string
) => {
  return (await hashedPassword(inputPassword, salt)) === savedPassword;
};
