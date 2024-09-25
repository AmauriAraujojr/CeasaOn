import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import User from "./user.entity";

@Entity("addresses")
class Address {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 100 })
  bairro: string;

  @Column({ type: "varchar", length: 150, nullable: true })
  rua?: string | null | undefined;

  @Column({ type: "varchar", length: 7, nullable: true })
  numero?: string | null | undefined;

  @OneToOne(() => User, (u) => u.address, { onDelete: "CASCADE" })
  user: User;
}

export default Address;
