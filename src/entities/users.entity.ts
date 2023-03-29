import { hashSync } from "bcryptjs";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  OneToMany,
} from "typeorm";
import Customers from "./customers.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 80 })
  name: string;

  @Column({ length: 150, unique: true })
  email: string;

  @Column({ length: 120 })
  password: string;

  @Column({ length: 12 })
  phone: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  hashPassowrd() {
    this.password = hashSync(this.password, 10);
  }

  @OneToMany(() => Customers, (customer) => customer.user)
  customer: Customers[];
}

export default User;
