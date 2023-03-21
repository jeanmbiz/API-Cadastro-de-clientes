import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import User from './user.entity'

@Entity('customers')
class Customers{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length:80})
    name: string

    @Column({length:35})
    email: string

    @Column({length:12})
    phone: string

    @Column({default: true})
    isActive: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @ManyToOne(()=> User)
    user: User
}

export default Customers