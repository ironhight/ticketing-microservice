import { Publisher, Subjects, TicketCreatedEvent } from '@ironhight/tickets';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
