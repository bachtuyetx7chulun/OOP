import CheesePizza from './Pizza/CheesePizza';
import GreekPizza from './Pizza/GreekPizza';

export default class OrderPizza {
  public Order(type: string): void {
    let pizza = null;
    switch (type) {
      case 'Cheese Pizza':
        pizza = new CheesePizza();
        break;
      case 'Greek Pizza':
        pizza = new GreekPizza();
        break;
      default:
        console.log(
          `We don't have ${type}. Sorry, you should choose other ones.`
        );
        break;
    }

    pizza?.Preparing();
    pizza?.Bake();
    pizza?.Cut();
    pizza?.Box();
  }
}
