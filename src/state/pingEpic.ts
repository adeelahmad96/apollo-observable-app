import { mapTo } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { ping , pong } from './pingPong';

// epic
export const pingEpic = (action$: any) => action$.pipe(
  ofType(ping.type),
  mapTo(pong(false))
  
);