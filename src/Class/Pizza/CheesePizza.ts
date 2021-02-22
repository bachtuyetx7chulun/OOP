import Pizza from './Pizza';

export default class CheesePizza extends Pizza {
  constructor() {
    super('Cheese Pizza', 'Thick', 'Quite spicy sauce', [
      'Black olives',
      'Tomato',
    ]);
  }

}
