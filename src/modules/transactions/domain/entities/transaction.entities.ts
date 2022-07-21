import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsString } from 'class-validator';
import { randomUUID } from 'crypto';
export class Transaction {
  @IsString()
  @ApiProperty({ type: String, description: 'unique id of the entity' })
  private id: string;
  @IsString()
  @ApiProperty({ type: String, description: 'description of the entity' })
  description: string;
  @IsString()
  @ApiProperty({ type: String, description: 'status of the entity' })
  status: TransactionStatus;
  @IsDate()
  @ApiProperty({ type: String, description: 'creation date' })
  createAt: Date;
  @IsDate()
  @ApiProperty({ type: String, description: 'date of last modification' })
  updateAt: Date;
  @IsNumber()
  @ApiProperty({ type: String, description: 'priority level' })
  priority: number;

  constructor(description: string, priority: number) {
    this.id = randomUUID();
    this.description = description;
    this.status = TransactionStatus.OPEN;
    this.createAt = new Date();
    this.updateAt = new Date();
    this.priority = priority;
  }

  isClosed(): boolean {
    return this.status === TransactionStatus.CLOSED;
  }
}

enum TransactionStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  CLOSED = 'CLOSED',
}
