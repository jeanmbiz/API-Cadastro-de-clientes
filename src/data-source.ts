import 'reflect-metadata'
import 'dotenv/config'
import { DataSource } from 'typeorm'
import User from './entities/user.entity'
import Customers from './entities/customers.entity'
import { createdTables1679424130007 } from './migrations/1679424130007-createdTables'



const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.PGHOST,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    port: parseInt(process.env.PGPORT),
    database: process.env.DB,
    synchronize: false,
    logging: true,
    entities: [User, Customers],
    migrations: [createdTables1679424130007]
})

export default AppDataSource