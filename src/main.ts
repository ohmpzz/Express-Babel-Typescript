import * as dotenv from 'dotenv';
dotenv.config();

import { createServer } from './server';
import app from './app';

createServer(app);
