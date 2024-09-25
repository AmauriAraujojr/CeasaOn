import { getRounds, hashSync } from "bcryptjs";
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Address from "./address.entity";

export enum UserType {
  COMPRADOR = "Comprador",
  PRODUTOR = "Produtor",
}

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 50 })
  nome: string;

  @Column({ length: 30, unique: true })
  cpf: string;

  @Column({ length: 30 })
  celular: string;

  @Column({ type: "enum", enum: UserType, default: UserType.PRODUTOR })
  tipo_de_conta: UserType;

  //   @Column({ length: 200 })
  //   password: string;

  //   @BeforeInsert()
  //   @BeforeUpdate()
  //   hashPassword() {
  //     const hasRounds: any = getRounds(this.password);
  //     if (!hasRounds) {
  //       this.password = hashSync(this.password, 10);
  //     }
  //   }
  @OneToOne(() => Address, { onDelete: "CASCADE" })
  @JoinColumn()
  address: Address;

  //   @OneToMany(() => Anouncement, (an) => an.user)
  //   anouncements: Array<Anouncement>;

  //   @OneToMany(() => Comment, (c) => c.user)
  //   comments: Array<Comment>;
}

export default User;
