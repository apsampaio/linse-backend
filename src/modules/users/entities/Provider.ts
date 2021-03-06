import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("providers")
class Provider {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  career: string;

  @Column()
  average_value: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Provider;
