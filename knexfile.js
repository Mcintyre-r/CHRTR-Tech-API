// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'chrtr://postgres:145900Qq@localhost:5432/postgres',
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
  production: {
    client: 'pg', 
    connection: {connectionString: process.env.HEROKU_POSTGRESQL_GREEN_URL, ssl: {
      rejectUnauthorized: false
    }}, 
    
    migrations: {
       directory: './data/migrations',
    },
    seeds: {
      directory: "./data/seeds",
    },
  }
};
