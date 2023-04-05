import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import User from "./users.entity";

@Entity("customers")
class Customers {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 80 })
  name: string;

  @Column({ length: 35 })
  email: string;

  @Column({ length: 12 })
  phone: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.customers)
  user: User;
}

export default Customers;
