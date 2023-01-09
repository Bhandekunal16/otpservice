import { Injectable, Body } from '@nestjs/common';
import { UpdateTicketDto } from './dto/update-ticket.dto';

@Injectable()
export class TicketService {

  findAll() {
    return `This action returns all ticket`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ticket`;
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    return `This action updates a #${id} ticket`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticket`;
  }
}
function body() {
  throw new Error('Function not implemented.');
}

