import IPizza from '../../Interface/IPizza';
export default abstract class Pizza implements IPizza {
  // constructor(
  //   protected name: string,
  //   protected dough: string,
  //   protected sauce: string,
  //   protected toppings: Array<string>
  // ) {}

  protected name: string;
  protected dough: string;
  protected sauce: string;
  protected toppings: Array<string>;

  constructor(
    name: string,
    dough: string,
    sauce: string,
    toppings: Array<string>
  ) {
    this.name = name;
    this.dough = dough;
    this.sauce = sauce;
    this.toppings = toppings;
  }

  Preparing(): void {
    console.log(`- Selected dish : ${this.name}`);
    console.log(`- Preparing ...`);
  }
  Bake(): void {
    console.log(`- Baking in 30 minutes...`);
  }
  Cut(): void {
    console.log(`- Cutting ...`);
  }
  Box(): void {
    console.log(`- Putting in the box ...`);
    console.log(`- End order !`);
    console.log();
  }
}
