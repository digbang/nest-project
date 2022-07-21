import { Transaction } from '../entities/transaction.entities';

export interface TransactionRepository {
  create(transaction: Transaction): Transaction;
  findAll(): Transaction[];
}

export const TransactionRepository = Symbol('TransactionRepository');
