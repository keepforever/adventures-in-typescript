import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";


// BaseEntity allows us to do some things that make our life easier
// i.e. User.find() or User.create()
@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  email: string;

  @Column("text")
  password: string;

}
