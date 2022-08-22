const msg = '   Ts!!';

console.log(msg);

const sayHello = (msg: string) => {
  return 'hello' + msg;
};
document.body.textContent = sayHello(msg);
