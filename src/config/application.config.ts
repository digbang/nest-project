import { cleanEnv, num, str } from 'envalid';

export const appConfig = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ['development', 'production'], default: 'development' }),
  PORT: num({ default: 3000 }),
});
