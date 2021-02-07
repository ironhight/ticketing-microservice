import { Subjects, Publisher, PaymentCreatedEvent } from '@ironhight/tickets';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
