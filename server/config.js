require('dotenv').config();

const { URL } = require('url');

const env = (name, fallback) => process.env[name] || fallback;
const envInt = (name, fallback) => parseInt(env(name, fallback), 10);
const envBool = (name, fallback) => {
  const value = env(name, fallback);

  return value !== 'false' && value !== '0' && value !== 'off';
};
const isDev = process.env['NODE_ENV'] !== 'production';

const config = {
  isDev,
  dialog: {
    webhook: env('DIALOG_WEBHOOK', null),
  },
  email_to: env('EMAIL_TO', 'info@dlg.im'),
  email: {
    host: env('EMAIL_HOST', 'smtp.gmail.com'),
    port: envInt('EMAIL_PORT', 465),
    secure: true,
    auth: {
      user: env('EMAIL_USER', null),
      pass: env('EMAIL_PASSWORD', null),
    },
  },
  server: {
    port: envInt('PORT', isDev ? 3010 : 3000),
    host: env('HOST', '0.0.0.0'),
  },
  ghost: {
    endpoint: env('GHOST_ENDPOINT', null),
    apiKey: env('GHOST_API_KEY', null),
  },
};

function checkOrFail(envName, variable) {
  try {
    if (!variable) {
      throw new Error(`${envName} not configured!`);
    }
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

function checkUrlOrFail(envName, url) {
  try {
    if (url) {
      // check if url is valid
      new URL(url);
    } else {
      throw new Error(`${envName} not configured!`);
    }
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
}

checkUrlOrFail('GHOST_ENDPOINT', config.ghost.endpoint);
checkOrFail('GHOST_API_KEY', config.ghost.apiKey);

module.exports = config;
