import { Subjects, Publisher, OrderCancelledEvent } from '@ironhight/tickets';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
