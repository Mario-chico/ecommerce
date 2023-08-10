const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true) 
      ? setTimeout(() => resolve('async'), 10) 
      : reject(new Error('error'))
  });
}

const anotherFn = async () => {
  const data = await fnAsync();
  console.log({data}); // {data: 'async'}
}

console.log('Antes');
anotherFn();
console.log('Despues');