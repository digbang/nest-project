import { Transaction } from '@modules/transactions/domain/entities/transaction.entities';
import { TransactionService } from '@modules/transactions/domain/services/transaction.service';
import { Injectable } from '@nestjs/common';
import { TransactionCommand } from './transaction.command';

@Injectable()
export class TransactionsApiService {
  constructor(private transactionService: TransactionService) {}

  create(transactionCommand: TransactionCommand): Transaction {
    return this.transactionService.create(
      transactionCommand.description,
      transactionCommand.priority,
    );
  }

  findAll(): Transaction[] {
    return this.transactionService.findAll();
  }
}
