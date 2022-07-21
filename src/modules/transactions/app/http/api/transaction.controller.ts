import { Transaction } from '@modules/transactions/domain/entities/transaction.entities';
import { TransactionService } from '@modules/transactions/domain/services/transaction.service';
import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiResponse } from '@nestjs/swagger';
import { TransactionCommand } from './transaction.command';

@Controller({
  path: 'transactions',
  version: ['1'],
})
export class TransactionsController {
  private readonly logger = new Logger(TransactionsController.name);

  constructor(private transactionService: TransactionService) {}

  @Get()
  @ApiCreatedResponse({ description: 'Get the list of transactions' })
  @ApiResponse({ type: [Transaction] })
  findAll(): Transaction[] {
    return this.transactionService.findAll();
  }

  @Post()
  @ApiCreatedResponse({ description: 'Transaction created' })
  @ApiBody({ type: TransactionCommand })
  @ApiResponse({ type: [Transaction] })
  create(@Body() transactionCommand: TransactionCommand): Transaction {
    const transaction = this.transactionService.create(
      transactionCommand.description,
      transactionCommand.priority,
    );
    this.logger.debug(transactionCommand);
    this.logger.debug({ transaction });
    return transaction;
  }
}
