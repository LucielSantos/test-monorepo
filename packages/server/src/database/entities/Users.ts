import { Column, Entity, PrimaryColumn } from "typeorm";
import { IsEmail } from "class-validator";

@Entity()
export class Users {
  @PrimaryColumn({ type: "integer" })
  id: number;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  fullName: string;

  @Column()
  phone: string;

  @Column()
  cpf: string;

  @Column({ nullable: true })
  pix: string;

  @Column({ nullable: true })
  bank: string;

  @Column({ nullable: true })
  agency: string;

  @Column({ nullable: true })
  account: string;

  @Column({ nullable: true })
  registration: string;

  @Column()
  password: string;

  @Column({ type: "boolean" })
  operationAccessAll: boolean;

  @Column({ type: "boolean" })
  status: boolean;

  @Column({ type: "integer" })
  typeId: number;
}
