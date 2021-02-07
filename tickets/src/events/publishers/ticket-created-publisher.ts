import { Publisher, Subjects, TicketCreatedEvent } from '@ironhight/tickets';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
