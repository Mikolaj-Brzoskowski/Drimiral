const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'host.docker.internal',
  database: 'postgres',
  password: 'password',
  port: 5432,
})

const getData = (request, response) => {
    pool.query(`SELECT * FROM public."table" ORDER BY id ASC`, (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
}

exports.GETDATA = getData