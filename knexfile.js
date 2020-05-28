const pgConnection = process.env.DATABASE_URL || {
  database: 'pg databasenamehere',    //postgres by default
  user:     'pg usernamehere',        //postgres by default
  password: 'pg passhere'             //blank by default
};

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/pintereach.db3",
    },
    useNullAsDefault: true,
    pool : {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON",done);
      }
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
  testing: {
    client: "sqlite3",
    connection: {
      filename: ":memory:",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    }
  },
  production: {
    client: 'pg',
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  }
};
