import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class TransactionCommand {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, description: 'description of the entity' })
  description: string;
  @IsNumber()
  @ApiProperty({ type: Number, description: 'priority level' })
  priority = 1;
}
