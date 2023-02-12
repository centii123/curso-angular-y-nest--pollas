import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number

    @Column({nullable: true}) //para que sea null
    nombre:string

    @Column({unique:true})//para que sea unico
    apellido:string

    @Column()
    edad:number
}