import { Transaction } from '@modules/transactions/domain/entities/transaction.entities';
import { TransactionRepository } from '@modules/transactions/domain/repositories/transaction.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TransactionInMemory implements TransactionRepository {
  private readonly transactions: Transaction[] = [];

  create(transaction: Transaction): Transaction {
    this.transactions.push(transaction);
    return transaction;
  }

  findAll(): Transaction[] {
    return this.transactions;
  }
}
