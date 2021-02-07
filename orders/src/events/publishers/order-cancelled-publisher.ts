import { Subjects, Publisher, OrderCancelledEvent } from '@ironhight/tickets';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
