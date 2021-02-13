import { Publisher, OrderCreatedEvent, Subjects } from '@ironhight/tickets';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
