import { Publisher, Subjects, TicketUpdatedEvent } from '@ironhight/tickets';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
