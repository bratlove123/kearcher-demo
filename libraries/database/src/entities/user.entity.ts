import { AutoMap } from '@automapper/classes';
import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryColumn()
  @AutoMap()
  id: string;

  @Column({ name: 'name' })
  @AutoMap()
  name: string;

  @Column({ name: 'type' })
  @AutoMap()
  type: string;

  @CreateDateColumn({ name: 'createdAt' })
  @AutoMap()
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  @AutoMap()
  updatedAt: Date;
}
