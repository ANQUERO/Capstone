import { config } from 'dotenv';

// Ensure a default NODE_ENV is used if it's not set
const envFile = `.env.${process.env.NODE_ENV || 'development'}.local`;
config({ path: envFile });

export const { PORT, NODE_ENV } = process.env;
