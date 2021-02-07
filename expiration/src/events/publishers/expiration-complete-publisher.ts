import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@ironhight/tickets';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
