-- Drop and recreate Users table (Example)
DROP TABLE IF EXISTS notifications CASCADE;

CREATE TABLE notifications (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW(),
  body TEXT NOT NULL,
  viewed BOOLEAN DEFAULT false
);