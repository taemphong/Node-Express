import mysql2 from 'mysql2'
import config from './config.js'

export const pool = mysql2.createPool(config.db.main).promise()

pool.query('SELECT 1')
    .then(() => console.log('Database connected!'))
    .catch(err => console.error('Database connection failed:', err));
