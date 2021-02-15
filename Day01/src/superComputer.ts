export type Callback = {(err: Error, result?: undefined): Error, (err: null, result: number): number};

export function callback(err: Error, result?: undefined): Error;
export function callback(err: null, result: number): number;

export function callback(err: Error | null, result: any): Error | number {
  if (err) {
    return err;
  }
  return result;
}

export function superComputer(nbrFirst : number, symbole : string, nbrSecond : number, call : Callback): Error | number {
  if ((symbole === '/' || symbole === '%') && nbrSecond === 0) {
    call(new Error((symbole === '/') ? 'division by 0' : 'modulo by 0'));
    return;
  }
  switch (symbole) {
    case '+': {
      return (call(undefined, nbrFirst + nbrSecond));
      break;
    } case '-': {
      return (call(undefined, nbrFirst - nbrSecond));
      break;
    } case '*': {
      return (call(undefined, nbrFirst * nbrSecond));
      break;
    } case '/': {
      return (call(undefined, nbrFirst / nbrSecond));
      break;
    } case '%': {
      return (call(undefined, nbrFirst % nbrSecond));
      break;
    } default: {
      return (call(new Error('Bad operator')));
    }
  }
}
