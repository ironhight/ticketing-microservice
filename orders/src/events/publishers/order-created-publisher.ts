import { Publisher, OrderCreatedEvent, Subjects } from '@ironhight/tickets';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
