export const waffles = {
  name: 'Waffles',
  param: 'waffles',
  recipeImage: '../assets/images/waffles.jpg',
  star: false,
  introText: 'These light and crispy waffles are perfect for a cozy breakfast or brunch.',
  description:
    'Golden, crispy, and fluffy, these waffles are made with simple ingredients and are easy to prepare. Whether served with syrup, jam, fresh fruits, or whipped cream, they are sure to become a family favorite.',
  category: 'breakfast',
  tags: {
    quick: true,
    easy: true,
    temperature: '',
    clean: true,
    cheap: true,
  },
  ingredients: [
    {
      name: 'Butter',
      amount: 40,
      unit: 'g',
      flex: '',
      optional: false,
      topping: false,
      done: false,
    },
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
      name: 'Flour',
      amount: 80,
      unit: 'g',
      flex: '',
      optional: false,
      topping: false,
      done: false,
    },
    {
      name: 'Sugar',
      amount: 20,
      unit: 'g',
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
      optional: false,
      topping: false,
      done: false,
    },
    {
      name: 'Baking powder',
      amount: 0.25,
      unit: 'tsp',
      flex: '',
      optional: false,
      topping: false,
      done: false,
    },
  ],
  instructions: [
    'In a medium-sized bowl, whisk together the flour, baking powder, sugar, and salt.',
    'In a small saucepan or microwave-safe bowl, melt the butter.',
    'In a separate bowl, mix the melted butter and plant-based milk until well combined.',
    'Gradually pour the wet ingredients into the dry ingredients, whisking until a smooth batter forms.',
    'Preheat your waffle iron according to instructions.',
    'Pour an appropriate amount of batter onto the waffle iron and cook until golden brown and crispy, following your waffle maker’s guidelines.',
    'Carefully remove the waffles and repeat with the remaining batter.',
    'Serve warm with your favorite toppings like maple syrup, fresh fruits, or whipped cream.',
  ],
  notes:
    'If making the batter in advance, you need to wait with adding the baking powder. Add it just before cooking the waffles to ensure they remain fluffy and rise properly. A tip is to also wait with adding the sugar so that the baking powder can be mixed with something of a larger volume when adding it to the batter. Otherwise, the baking powder may clump together and not distribute evenly.',
};
