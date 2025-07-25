export const rhubarbPie = {
  name: 'Rhubarb Pie',
  param: 'rhubarb-pie',
  recipeImage: '../assets/images/rhubarb-pie.jpg',
  star: false,
  introText: 'A delicious and rustic rhubarb pie with a sweet oat crumble topping.',
  description:
    "This rhubarb pie combines tart rhubarb with a rich, buttery oat crumble topping. The cardamom adds a warm, aromatic touch that complements the tangy rhubarb perfectly. It's a simple yet satisfying dessert that celebrates the unique flavor of rhubarb.",
  category: 'dessert',
  tags: {
    quick: false,
    easy: true,
    temperature: '225',
    clean: false,
    cheap: true,
  },
  ingredients: [
    {
      name: 'Rhubarb',
      amount: 1,
      unit: 'liter',
      flex: '',
      optional: false,
      topping: false,
      done: false,
    },
    {
      name: 'Butter',
      amount: 200,
      unit: 'g',
      flex: '',
      optional: false,
      topping: false,
      done: false,
    },
    {
      name: 'Syrup',
      amount: 0.25,
      unit: 'cup',
      flex: 'Any syrup',
      optional: false,
      topping: false,
      done: false,
    },
    {
      name: 'Cream',
      amount: 0.25,
      unit: 'cup',
      flex: 'Any cream',
      optional: false,
      topping: false,
      done: false,
    },
    {
      name: 'Sugar',
      amount: 0.75,
      unit: 'cup',
      flex: '',
      optional: false,
      topping: false,
      done: false,
    },
    {
      name: 'Cardamom',
      amount: 0.5,
      unit: 'tsp',
      flex: '',
      optional: true,
      topping: false,
      done: false,
    },
    {
      name: 'Oats',
      amount: 0.75,
      unit: 'cup',
      flex: '',
      optional: false,
      topping: false,
      done: false,
    },
    {
      name: 'Flour',
      amount: 0.75,
      unit: 'cup',
      flex: '',
      optional: false,
      topping: false,
      done: false,
    },
  ],
  instructions: [
    'Preheat your oven to 225°C (437°F).',
    'Chop the rhubarb into bite-sized pieces and toss with a little sugar. Place in a pie dish.',
    'In a pan, melt the butter together with the syrup, cream, sugar, and cardamom over medium heat.',
    'Once melted and combined, stir in the oats.',
    'Add the flour and mix until well combined to form a crumble mixture.',
    'Pour the crumble mixture evenly over the rhubarb in the pie dish.',
    'Bake for 20 minutes or until the topping is golden brown and the rhubarb is tender.',
    'Allow to cool slightly before serving. Can be served warm or at room temperature.',
  ],
  notes:
    'This pie is best served fresh but can be stored covered for 2-3 days. The rhubarb can be quite tart, so feel free to adjust the sugar to taste. If you prefer a less tangy filling, you can mix the rhubarb with some chopped apples.',
};
