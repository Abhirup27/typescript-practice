const nums: Array<number> = [1, 2, 3, 4]; // const nums: number[]
const doubled: number[] = nums.map(n => n * 2);
console.log(doubled);

function mult(factor:number):(num: number) => number
{
  return (num: number): number => num * factor;
}
const triple: (num: number) => number = mult(3);

const result: number = triple(5);
console.log(result);

type Pizza = {
  name: string;
  price: number;
};
type Order = {
  pizza: Pizza;
  status: string;
};

const menu: Pizza[] = [];
let cashRegister:number = 100;

const addNewPizza = (pizza: Pizza): void => { menu.push(pizza) };

const orderQueue: Order[] = [];
const placeOrder = (pizzaName:string): boolean => 
{
  //const pizza = menu.find(x => x.name === pizzaName);
  for (const pizza of menu )
  {
    if (pizzaName === pizza.name)
    {
      orderQueue.push({pizza, status:"Ordered"});
      console.log(`Order placed for ${pizza.name}.`);
      return true;
    }
    else
    {
      console.log(`Pizza with name ${pizzaName} not found on the menu`);
      return false;
    }
    }
    return false;
}


addNewPizza({ name: 'pepperoni', price: 10 });
console.log(menu);
const addCash = (result: boolean, price:number) => result ? cashRegister+= price:undefined;
placeOrder('pepperoni');
placeOrder('pepperoni');
console.log(orderQueue);
placeOrder('margherita');