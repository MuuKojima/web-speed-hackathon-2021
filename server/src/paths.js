import path from 'path';

const PUBLIC_PATH = path.resolve(__dirname, '../../public');
const UPLOAD_PATH = path.resolve('/tmp/upload');
const CLIENT_DIST_PATH = path.resolve(__dirname, '../../dist');
const DATABASE_PATH = path.resolve('/tmp/database.sqlite');

export { PUBLIC_PATH, CLIENT_DIST_PATH, DATABASE_PATH, UPLOAD_PATH };
