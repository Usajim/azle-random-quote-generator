import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'getPersonalisedQuote' : ActorMethod<[], string>,
  'getQuote' : ActorMethod<[], string>,
  'setMessage' : ActorMethod<[string], undefined>,
}
