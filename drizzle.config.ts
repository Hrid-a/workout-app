import {loadEnvConfig} from '@next/env';
import { defineConfig } from 'drizzle-kit';

loadEnvConfig(process.cwd());

if(!process.env.DATABASE_URL){
    throw Error('DATABASE_URL is not defined');
}

export default defineConfig({
    schema: './src/db/schema.ts',
    out: './drizzle',
    dialect: 'postgresql', // 'postgresql' | 'mysql' | 'sqlite'
    dbCredentials: {
        url: process.env.DATABASE_URL,
    },
});
