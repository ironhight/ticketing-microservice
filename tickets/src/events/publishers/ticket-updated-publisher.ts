import { Publisher, Subjects, TicketUpdatedEvent } from '@ironhight/tickets';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
