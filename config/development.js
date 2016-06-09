export default {
  logging: {
    enabled: true,
    level: env('LOG_LEVEL') || 'info',
    logglyConfig: {
      token: null,
      subdomain: null
    }
  }
}

function env(name) {
  return process.env[name]
}
