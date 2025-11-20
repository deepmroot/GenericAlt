import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './api/auth.js';
import { initializeDatabase } from './db/init.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, 'dist');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS for development
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// API routes
app.use('/api/auth', authRoutes);

// Static files
app.use(express.static(distPath));

app.get('/healthz', (_req, res) => {
  res.status(200).send('ok');
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

const port = process.env.PORT || 4173;

// Initialize database and start server
async function startServer() {
  // Start server first so health checks can pass
  app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on port ${port}`);
  });

  // Initialize database in background
  if (process.env.DATABASE_URL) {
    try {
      await initializeDatabase();
      console.log('✅ Database ready');
    } catch (error) {
      console.error('❌ Database initialization failed:', error);
      console.warn('⚠️  Server running but auth features may not work');
    }
  } else {
    console.warn('⚠️  No DATABASE_URL found - auth features will not work');
  }
}

startServer();
