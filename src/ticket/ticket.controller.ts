import { Controller, Inject } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';

@Controller()
export class TicketController {
  constructor(@Inject('WORKER_SERVICE') private readonly ticketService: TicketService) { }

  @MessagePattern('createTicket')
  create(@Payload() createTicketDto: CreateTicketDto) {
    return this.ticketService.findAll();
  }

  @EventPattern('register_news')
  receiveNews(data): void {
    console.info('Received news', data);
  }

  @MessagePattern('findAllTicket')
  findAll() {
    return this.ticketService.findAll();
  }

  @MessagePattern('findOneTicket')
  findOne(@Payload() id: number) {
    return this.ticketService.findOne(id);
  }

  @MessagePattern('updateTicket')
  update(@Payload() updateTicketDto: UpdateTicketDto) {
    return this.ticketService.update(updateTicketDto.id, updateTicketDto);
  }

  @MessagePattern('removeTicket')
  remove(@Payload() id: number) {
    return this.ticketService.remove(id);
  }
}
