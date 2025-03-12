const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const selfsigned = require('selfsigned');

// Create the certs directory if it doesn't exist
const certsDir = path.join(__dirname, '..', 'certs');
if (!fs.existsSync(certsDir)) {
  fs.mkdirSync(certsDir, { recursive: true });
}

// Generate self-signed certificates
console.log('Generating self-signed certificates...');
const attrs = [{ name: 'commonName', value: 'localhost' }];
const pems = selfsigned.generate(attrs, {
  days: 365,
  keySize: 2048,
  algorithm: 'sha256'
});

// Write certificate files
fs.writeFileSync(path.join(certsDir, 'server.key'), pems.private);
fs.writeFileSync(path.join(certsDir, 'server.crt'), pems.cert);

console.log('Self-signed certificates generated successfully!');
console.log(`Certificates saved to: ${certsDir}`);