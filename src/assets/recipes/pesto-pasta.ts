export const pestoPasta = {
  name: 'Pesto Pasta',
  param: 'pesto-pasta',
  recipeImage: 'assets/images/pesto-pasta.jpg',
  star: false,
  introText: 'A quick and delicious pasta dish featuring homemade pesto, perfect for a weeknight meal.',
  description:
    'This pesto pasta recipe is a delicious and easy-to-make dish that can be prepared in under 30 minutes. It features al dente pasta tossed with a vibrant homemade pesto sauce, made from fresh basil, nuts, and nutritional yeast for a rich, cheesy flavor.',
  tags: {
    quick: true,
    easy: true,
    temperature: '',
    clean: false,
    cheap: false,
  },
  ingredients: [
    {
      name: 'Pasta',
      amount: 75,
      unit: 'g',
      flex: 'Any pasta of your choice',
      optional: false,
      topping: false,
      done: false,
    },
    {
      name: 'Pesto',
      amount: 0.25,
      unit: 'cup',
      flex: '',
      optional: false,
      topping: false,
      done: false,
      link: 'pesto',
    },
  ],
  instructions: [
    'Cook the pasta according to package instructions until al dente.',
    'While the pasta is cooking, prepare the pesto if you haven’t already.',
    'Drain the pasta and reserve a little pasta water.',
    'In a large bowl, combine the hot pasta with the pesto. If the sauce is too thick, add a splash of reserved pasta water to loosen it up.',
    'Serve immediately, garnished with extra basil or nuts if desired.',
  ],
  notes:
    'This pesto is incredibly versatile; you can experiment with different nuts, seeds, or even add a bit of vegan Parmesan for extra richness. For a nut-free option, sunflower seeds work great!',
};
