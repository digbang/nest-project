import { Inject, Injectable } from '@nestjs/common';
import { Transaction } from '../entities/transaction.entities';
import { TransactionRepository } from '../repositories/transaction.repository';

@Injectable()
export class TransactionService {
  constructor(
    @Inject(TransactionRepository)
    private readonly transactionRepository: TransactionRepository,
  ) {}

  create(description: string, priority: number): Transaction {
    const transaction = new Transaction(description, priority);
    if (this.findActiveTransactions().length >= 3) {
      throw new Error('Transactions count is more than 3');
    }
    this.transactionRepository.create(transaction);
    return transaction;
  }

  findAll(): Transaction[] {
    return this.transactionRepository.findAll();
  }

  findActiveTransactions(): Transaction[] {
    return this.transactionRepository.findAll().filter(transaction => !transaction.isClosed);
  }
}
