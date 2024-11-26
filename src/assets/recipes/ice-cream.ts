export const iceCream = {
  name: 'Ice Cream',
  param: 'ice-cream',
  recipeImage: 'assets/images/ice-cream.jpg',
  star: false,
  introText: 'My ice cream brings all the people to the yard.',
  description:
    'Ice cream is a frozen dessert made from a mixture of milk, cream, sugar, and flavorings. With an ice cream machine, you can easily make your own homemade ice cream and customize it to your liking. So grab a scoop and enjoy the creamy goodness of homemade ice cream.',
  tags: {
    quick: false,
    easy: true,
    temperature: null,
    clean: true,
    cheap: true,
  },
  ingredients: [
    {
      name: 'Milk',
      amount: 1,
      unit: 'cup',
      flex: '',
      optional: false,
      topping: false,
      done: false,
    },
    {
      name: 'Cream',
      amount: 1,
      unit: 'cup',
      flex: 'Can be replaced with more milk, or half the amount with milk.',
      optional: false,
      topping: false,
      done: false,
    },
    {
      name: 'Sugar',
      amount: 0.5,
      unit: 'cup',
      flex: '',
      optional: false,
      topping: false,
      done: false,
    },
    {
      name: 'Xanthan gum',
      amount: 0.25,
      unit: 'tsp',
      flex: '',
      optional: true,
      topping: false,
      done: false,
    },
    {
      name: 'Salt',
      amount: 0.25,
      unit: 'tsp',
      flex: '',
      optional: true,
      topping: false,
      done: false,
    },
    {
      name: 'Fruit',
      amount: 0.5,
      unit: 'cup',
      flex: 'Or any other flavoring.',
      optional: true,
      topping: false,
      done: false,
    },
  ],
  instructions: [
    'Add all the ingredients together in a bowl and mix.',
    'Add to your ice cream machine and let churn until done.',
  ],
  notes:
    'Add more sugar, replace the sugar with agave syrup/maple syrup/corn syrup, or even add alcohol like rum to make the ice cream more scoopable. Sugar and syrups prevent ice crystal formation and alcohol lowers the freezing point. A successful cornbread ice cream was made with 1.5 cup milk, 0.5 cup cream, 0.5 cup syrup, 0.25 tsp salt, and 0.5 cup polenta. It could have benefited from corn as well, blended with the milk in a high-speed mixer.',
};