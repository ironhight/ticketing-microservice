import { Subjects, Publisher, PaymentCreatedEvent } from '@ironhight/tickets';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
