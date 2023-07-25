import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id:string;

    @Column()
    title:string;

    @Column()
    isCompleted :boolean;

    @Column()
    date : string;
}
