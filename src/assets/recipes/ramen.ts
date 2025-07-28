export const ramen = {
  name: 'Ramen',
  param: 'ramen',
  recipeImage: 'assets/images/ramen.png',
  star: true,
  introText:
    'A comforting and satisfying noodle soup that is perfect for any day. This ramen recipe is quick, easy, and customizable with your favorite ingredients.',
  description:
    "Ramen is a Japanese noodle soup that has taken the world by storm. With its rich broth, tender noodles, and a variety of toppings, it's no wonder that ramen is a favorite comfort food for many.",
  category: ['main', 'soup'],
  tags: {
    quick: true,
    easy: true,
    temperature: null,
    clean: true,
    cheap: true,
  },
  ingredients: [
    {
      name: 'Noodles',
      amount: 200,
      unit: 'g',
      flex: '',
      optional: false,
      topping: false,
      done: false,
    },
  ],
  instructions: ['Bring a pot or pan of water to a boil, then salt the water to your liking and add the noodles.'],
  notes: 'MSG is amazing in this dish.',
};
