import { UserModel } from '../model/userModel';
import { DBO } from './DboHelper';

export class UserRepository extends DBO {
  constructor() {
    super();
  }

  async createUser({
    email,
    password,
    phone,
    user_type,
    salt,
  }: UserModel): Promise<boolean> {
    try {
      const query = `INSERT into users (email,password,phone,user_type,salt)  Values(?,?,?,?,?);`;
      const value = [email, password, phone, user_type, salt];
      const result = await this.executeQuery(query, value);
      console.log('results------>', result);
      if (result.rowCount > 0) return true;
      return false;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getUser(email: string): Promise<UserModel> {
    //
    // const client = DBClient();
    // const query = `SELECT email,phone,password,user_type,salt FROM users where email= $1;`;
    // const value = [email];
    // const result = await client.query(query, value);
    // await client.end();
    return {} as UserModel;
  }
}
