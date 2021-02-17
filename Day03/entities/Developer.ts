import {Entity, Column, BaseEntity} from "typeorm";

@Entity()
class Developer extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: string;
    @Column ()
    name: string;
    @Column ()
    age : number;
    @Column ()
    school: string;
    @Column ()
    experience: number;

    constructor(id: string, name: string, age : number, school: string, experience: number) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.school = school;
        this.experience = experience;
    }
}