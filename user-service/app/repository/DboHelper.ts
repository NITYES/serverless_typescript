import { DBClient } from '../utility/database';

export interface IDBO {
  executeQuery: (query: string, value?: [any]) => Promise<any>;
}

export class DBO implements IDBO {
  executeQuery(query: string, value?: any[]): Promise<any> {
    return new Promise((resolve, reject) => {
      const result = DBClient.execute(query, value, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }
}
