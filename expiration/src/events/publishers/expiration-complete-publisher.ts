import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@ironhight/tickets';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
