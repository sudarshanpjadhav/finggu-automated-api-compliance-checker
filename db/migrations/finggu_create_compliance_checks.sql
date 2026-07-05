CREATE TABLE finggu_compliance_checks (
  id SERIAL PRIMARY KEY,
  api_spec JSONB NOT NULL,
  compliant BOOLEAN NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);