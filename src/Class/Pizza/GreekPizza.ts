import Pizza from './Pizza';

export default class GreekPizza extends Pizza {
  constructor() {
    super('Greek Pizza', 'Thin', 'Sweet Sauce', ['Tomato', 'Wasabi']);
  }
}
