import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

@Module({

  controllers: [TicketController],
  providers: [TicketService, {
    provide: 'WORKER_SERVICE',
    useFactory: () => {
      return ClientProxyFactory.create({
        transport: Transport.TCP,
        options: {
          host: '0.0.0.0',
          port: 3010,
        },
      });
    },
    inject: [],
  },]
})
export class TicketModule { }
