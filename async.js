
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
import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1"

async function fetchData(urlApi){
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

const anotherFunction = async (urlApi) => {
  try{
    const products = await fetchData(`${urlApi}/products`);
    const product = await fetchData(`${urlApi}/products/${products[0].id}`);
    const category=await fetchData(`${urlApi}/categories/${product.category.id}`);

    //console.log(products);
    console.log(product.title);
    console.log(category.name);
  }catch(err){
    console.error(err)
  }
}

anotherFunction(API)