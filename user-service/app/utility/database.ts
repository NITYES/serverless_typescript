import { Client } from 'pg';
import mysql2, { createConnection } from 'mysql2';

export const DBClient = mysql2.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'example123',
  database:'serverless'
});
