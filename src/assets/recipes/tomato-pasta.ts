export const tomatoPasta = {
  name: 'Tomato Pasta',
  param: 'tomato-pasta',
  recipeImage: '../assets/images/tomato-pasta.jpg',
  star: false,
  introText:
    'A hearty and flavorful soup that originated in Mexico. A one-pot dish ready in just 15 minutes and we can add just about anything in it.',
  description:
    "Hummus is a delicious and nutritious spread made primarily from mashed chickpeas, tahini, olive oil, lemon juice, and garlic. It's a staple in Middle Eastern and Mediterranean cuisines and has gained global popularity due to its versatility and health benefits.",
  tags: {
    quick: true,
    easy: true,
    temperature: null,
    clean: true,
    cheap: true,
  },
  ingredients: [
    {
      name: 'Pasta',
      amount: 400,
      unit: 'g',
      flex: '',
      optional: false,
      topping: false,
      done: false,
    },
    {
      name: 'Heavy cream',
      amount: 1,
      unit: 'cup',
      flex: '',
      optional: false,
      topping: false,
      done: false,
    },
    {
      name: 'Tomato purée',
      amount: 0.25,
      unit: 'cup',
      flex: 'Can be replaced with puréed tomatoes.',
      optional: false,
      topping: false,
      done: false,
    },
    {
      name: 'Garlic',
      amount: 4,
      unit: 'cloves',
      flex: '',
      optional: false,
      topping: false,
      done: false,
    },
    {
      name: 'Olive oil',
      amount: 1,
      unit: 'tbsp',
      flex: 'Any vegetable oil works',
      optional: false,
      topping: false,
      done: false,
    },
    {
      name: 'Sugar',
      amount: 1,
      unit: 'tbsp',
      flex: 'Any sweetening agent works, like syrup, mirin, or brown sugar.',
      optional: false,
      topping: false,
      done: false,
    },
    {
      name: 'Sundried tomatoes',
      amount: 0.25,
      unit: 'cup',
      flex: 'Tapenade.',
      optional: true,
      topping: false,
      done: false,
    },
    {
      name: 'Chili flakes',
      amount: 1,
      unit: 'tbsp',
      flex: 'Hot sauce or chili paste.',
      optional: true,
      topping: false,
      done: false,
    },
    {
      name: 'Feta cheese',
      amount: null,
      unit: '',
      flex: '',
      optional: false,
      topping: true,
      done: false,
    },
    {
      name: 'Basil',
      amount: null,
      unit: '',
      flex: 'Dried herbs work just as well.',
      optional: true,
      topping: true,
      done: false,
    },
  ],
  instructions: [
    'Boil the pasta in salted water until al dente.',
    'Chop garlic and add to pan with oil on medium heat.',
    'After a minute, add tomato purée and sugar. Fry for 2 minutes.',
    'Add cream and sundried tomatoes, as well as any optional ingredients. Boil for 2 minutes.',
    'Add pasta to the sauce and mix. Serve with feta and basil.',
  ],
  notes: 'Add a liquor like Vodka to the sauce to make the classic Penne alla Vodka.',
};
