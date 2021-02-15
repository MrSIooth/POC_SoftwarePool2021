type Callback = {(err: Error, result?: undefined): Error, (err: null, result: number): number};

function callback(err: Error, result?: undefined): Error;
function callback(err: null, result: number): number;

function callback(err: Error | null, result: any): Error | number {
  if (err) {
    console.log(err.message);
    return err;
  }
  console.log(`Result: ${result}`);
  return result;
}

function superComputer(nbrFirst : number, symbole : string, nbrSecond : number, call : Callback) {
  if ((symbole === '/' || symbole === '%') && nbrSecond === 0) {
    call(new Error((symbole === '/') ? 'division by 0' : 'modulo by 0'));
    return;
  }
  switch (symbole) {
    case '+': {
      call(undefined, nbrFirst + nbrSecond);
      break;
    } case '-': {
      call(undefined, nbrFirst - nbrSecond);
      break;
    } case '*': {
      call(undefined, nbrFirst * nbrSecond);
      break;
    } case '/': {
      call(undefined, nbrFirst / nbrSecond);
      break;
    } case '%': {
      call(undefined, nbrFirst % nbrSecond);
      break;
    } default: {
      call(new Error('Bad operator'));
    }
  }
}
