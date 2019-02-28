require('dotenv').config();

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host     : process.env.DB_HOST,
      user     : process.env.DB_USER,
      password : process.env.DB_PASS,
      database : process.env.DB_NAME,
      port     : process.env.DB_PORT,
      ssl      : process.env.DB_SSL
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },

  production: {
    client: 'postgresql',
    connection: 'postgres://tuomxgfnoevowk:6f9dfd9283a5de4df58f286829ffa1bc583d0491511ffc6db993fd644232eade@ec2-174-129-236-21.compute-1.amazonaws.com:5432/ddpcvb0gu1l7jg?ssl=true',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    },
    ssl: true
  }

};


