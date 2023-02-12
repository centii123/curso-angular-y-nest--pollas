import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Animos{
    @PrimaryGeneratedColumn()
    id_animos:number

    @Column({type: 'text'})
    descripccion:string
}