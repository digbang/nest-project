import { Logger, Module } from '@nestjs/common';
import { TransactionsController } from './app/http/api/transaction.controller';
import { TransactionsApiService } from './app/http/api/transaction.service';
import { TransactionInMemory } from './infra/repositories/transactionInMemory.repository';
import { TransactionRepository } from './domain/repositories/transaction.repository';
import { TransactionService } from './domain/services/transaction.service';

@Module({
  imports: [Logger],
  controllers: [TransactionsController],

  providers: [
    TransactionService,
    TransactionsApiService,
    {
      provide: TransactionRepository,
      useClass: TransactionInMemory,
    },
  ],
})
export class TransactionsModule {}
