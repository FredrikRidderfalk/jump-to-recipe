import { tapenade } from './tapenade';
import { pesto } from './pesto';
import { chiliOilNoodles } from './chili-oil-noodles';
import { stickyBananaSpongePudding } from './sticky-banana-sponge-pudding';
import { lentilStew } from './lentil-stew';
import { coffeeTresLeches } from './coffee-tres-leches';
import { pestoDressing } from './pesto-dressing';
import { southwestDressing } from './southwest-dressing';
import { lemonTahiniDressing } from './lemon-tahini-dressing';
import { chiliLimeDressing } from './chili-lime-dressing';
import { sesameGingerDressing } from './sesame-ginger-dressing';
import { tomatoPasta } from './tomato-pasta';
import { thaiBasilSauce } from './thai-basil-sauce';
import { rootVegetableStew } from './root-vegetable-stew';
import { quinoaSalad } from './quinoa-salad';
import { crispyChiliOil } from './crispy-chili-oil';
import { kladdkaka } from './kladdkaka';
import { balsamicDressing } from './balsamic-vinaigrette';
import { thaiGreenCurry } from './thai-green-curry';
import { overnightOats } from './overnightOats';
import { arancini } from './arancini';
import { burger } from './burger';
import { garlicNoodles } from './garlic-noodles';
import { taquitos } from './taquitos';
import { bulgurSalad } from './bulgur-salad';
import { padKraPao } from './pad-kra-pao';
import { hummus } from './hummus';
import { salsa } from './salsa';
import { gamjaJorim } from './gamja-jorim';
import { pancakes } from './pancakes';
import { dryCaramel } from './dry-caramel';
import { iceCream } from './ice-cream';
import { cremeBrulee } from './creme-brulee';
import { waffles } from './waffles';
import { kakiage } from './kakiage';
import { peanutButterCornflakeBars } from './peanut-butter-cornflake-bars';
import { mushroomPolenta } from './mushroom-polenta';
import { mutabbal } from './mutabbal';
import { cinnamonRolls } from './cinnamon-rolls';
import { breakBread } from './break-bread';
import { saffronMarzipanSwirls } from './saffron-marzipan-swirls';
import { okonomiyaki } from './okonomiyaki';
import { tteokbokki } from './tteokbokki';

export const Recipes = [
  chiliOilNoodles,
  stickyBananaSpongePudding,
  pesto,
  tapenade,
  taquitos,
  lentilStew,
  coffeeTresLeches,
  pestoDressing,
  southwestDressing,
  lemonTahiniDressing,
  chiliLimeDressing,
  dryCaramel,
  sesameGingerDressing,
  quinoaSalad,
  crispyChiliOil,
  kladdkaka,
  balsamicDressing,
  thaiGreenCurry,
  rootVegetableStew,
  overnightOats,
  arancini,
  burger,
  garlicNoodles,
  bulgurSalad,
  padKraPao,
  hummus,
  salsa,
  gamjaJorim,
  pancakes,
  cremeBrulee,
  waffles,
  kakiage,
  peanutButterCornflakeBars,
  iceCream,
  mushroomPolenta,
  mutabbal,
  cinnamonRolls,
  breakBread,
  saffronMarzipanSwirls,
  okonomiyaki,
  tteokbokki,
  //   Mirza Ghasemi
  {
    name: 'Mirza Ghasemi',
    param: 'mirza-ghasemi',
    recipeImage: 'assets/images/mirza-ghasemi.jpg',
    star: false,
    introText: 'A delicious Persian eggplant dish that is perfect for breakfast, lunch, or dinner.',
    description:
      "Mirza Ghasemi is a traditional Persian dish made with eggplant, tomatoes, garlic, and eggs. It's a simple and flavorful dish that is perfect for breakfast, lunch, or dinner. The smoky flavor of the eggplant combined with the sweetness of the tomatoes and the richness of the eggs makes this dish a real treat. Serve it with some warm bread or rice for a satisfying meal that will leave you feeling full and happy.",
    tags: {
      quick: true,
      easy: true,
      temperature: null,
      clean: true,
      cheap: true,
    },
    ingredients: [
      {
        name: 'Eggplant',
        amount: 2,
        unit: '',
        flex: '',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Tomato',
        amount: 1,
        unit: 'cup',
        flex: 'Either crushed tomatoes, puréed tomatoes, whole canned tomatoes, or oven-roasted fresh tomatoes.',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Garlic',
        amount: 1,
        unit: '',
        flex: 'Fresh garlic.',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Salt',
        amount: 1,
        unit: 'tsp',
        flex: 'Black salt is preferable.',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Pepper',
        amount: 1,
        unit: 'tsp',
        flex: "It don't matter if you're black or white🕺🏽.",
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Tomato paste',
        amount: 1,
        unit: 'tbsp',
        flex: '',
        optional: true,
        topping: false,
        done: false,
      },
      {
        name: 'Turmeric',
        amount: 1,
        unit: 'tsp',
        flex: '',
        optional: true,
        topping: false,
        done: false,
      },
    ],
    instructions: [
      'Add all ingredients to a pot and bring to a simmer on medium heat while stirring.',
      'When simmering, pour into ramekins or any other container like glasses and let cool for 30 min before storing in the fridge.',
      'Serve with any topping of your liking, like berries, coulis, nuts, or chocolate sauce.',
    ],
    notes: 'Serve with any bread. Rice, couscous, or quinoa are also great options.',
  },
  //   Poké
  {
    name: 'Poké',
    param: 'poke',
    recipeImage: 'assets/images/poke.jpg',
    star: true,
    introText:
      'A hearty and flavorful soup that originated in Mexico. A one-pot dish ready in just 15 minutes and we can add just about anything in it.',
    description:
      "This might just be our favorite soup of all time. A one-pot dish, super quick to make, no frying, just a bit of boiling, and the flexibility of the dish is on par with fried rice! You could put pretty much anything into the soup, and you can also choose any BBQ sauce of your liking or make one yourself with just 4 ingredients. Also, it's freakishly delicious and addictive.",
    tags: {
      quick: false,
      easy: true,
      temperature: null,
      clean: false,
      cheap: false,
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
      {
        name: 'Butter',
        amount: 200,
        unit: 'g',
        flex: 'Neutral vegetable oil.',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Garlic',
        amount: 8,
        unit: 'large cloves',
        flex: '',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Light soy sauce',
        amount: 1,
        unit: 'cup',
        flex: '',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'MSG',
        amount: 1,
        unit: 'tbsp',
        flex: '',
        optional: true,
        topping: false,
        done: false,
      },
      {
        name: 'Sugar',
        amount: 1,
        unit: 'cup',
        flex: 'White sugar, brown sugar, syrup, mirin.',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Chili flakes',
        amount: 2,
        unit: 'tbsp',
        flex: '',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Rice vinegar',
        amount: 2,
        unit: 'tbsp',
        flex: 'Any vinegar will do just fine.',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Spring onion',
        amount: 3,
        unit: '',
        flex: 'Other crispy greens',
        optional: false,
        topping: false,
        done: false,
      },
    ],
    instructions: [
      'Bring a pot or pan of water to a boil, then salt the water to your liking and add the noodles.',
      'Slice the cloves of garlic.',
      'Add butter to a wok or pan on medium high heat and fry for 1 minute.',
      'Add soy, sugar, chili flakes, chopped spring onion, MSG, and vinegar. Set the heat to low until the noodles are done.',
      'Add noodles to the sauce, set the heat to high and mix for 1 minute. Serve.',
    ],
    notes: 'MSG is amazing in this dish.',
  },
  //   Orange Tofu
  {
    name: 'Orange Tofu',
    param: 'orange-tofu',
    recipeImage: 'assets/images/orange-tofu.jpg',
    star: true,
    introText:
      'A hearty and flavorful soup that originated in Mexico. A one-pot dish ready in just 15 minutes and we can add just about anything in it.',
    description:
      "This might just be our favorite soup of all time. A one-pot dish, super quick to make, no frying, just a bit of boiling, and the flexibility of the dish is on par with fried rice! You could put pretty much anything into the soup, and you can also choose any BBQ sauce of your liking or make one yourself with just 4 ingredients. Also, it's freakishly delicious and addictive.",
    tags: {
      quick: false,
      easy: false,
      temperature: null,
      clean: false,
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
      {
        name: 'Butter',
        amount: 200,
        unit: 'g',
        flex: 'Neutral vegetable oil.',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Garlic',
        amount: 8,
        unit: 'large cloves',
        flex: '',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Light soy sauce',
        amount: 1,
        unit: 'cup',
        flex: '',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'MSG',
        amount: 1,
        unit: 'tbsp',
        flex: '',
        optional: true,
        topping: false,
        done: false,
      },
      {
        name: 'Sugar',
        amount: 1,
        unit: 'cup',
        flex: 'White sugar, brown sugar, syrup, mirin.',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Chili flakes',
        amount: 2,
        unit: 'tbsp',
        flex: '',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Rice vinegar',
        amount: 2,
        unit: 'tbsp',
        flex: 'Any vinegar will do just fine.',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Spring onion',
        amount: 3,
        unit: '',
        flex: 'Other crispy greens',
        optional: false,
        topping: false,
        done: false,
      },
    ],
    instructions: [
      'Bring a pot or pan of water to a boil, then salt the water to your liking and add the noodles.',
      'Slice the cloves of garlic.',
      'Add butter to a wok or pan on medium high heat and fry for 1 minute.',
      'Add soy, sugar, chili flakes, chopped spring onion, MSG, and vinegar. Set the heat to low until the noodles are done.',
      'Add noodles to the sauce, set the heat to high and mix for 1 minute. Serve.',
    ],
    notes: 'MSG is amazing in this dish.',
  },
  //   Panna Cotta
  {
    name: 'Panna Cotta',
    param: 'panna-cotta',
    recipeImage: 'assets/images/panna-cotta.jpg',
    star: false,
    introText:
      'A hearty and flavorful soup that originated in Mexico. A one-pot dish ready in just 15 minutes and we can add just about anything in it.',
    description:
      "This might just be our favorite soup of all time. A one-pot dish, super quick to make, no frying, just a bit of boiling, and the flexibility of the dish is on par with fried rice! You could put pretty much anything into the soup, and you can also choose any BBQ sauce of your liking or make one yourself with just 4 ingredients. Also, it's freakishly delicious and addictive.",
    tags: {
      quick: true,
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
        flex: 'Any plant-based milk will do just fine.',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Coconut milk',
        amount: 0.25,
        unit: 'cup',
        flex: "Cream works too, and is preferable if you don't desire any coconut flavor.",
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Sugar',
        amount: 2,
        unit: 'tbsp',
        flex: 'Any sugar will do just fine, or even a liquid sweetener like maple syrup.',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Vanilla extract',
        amount: 0.5,
        unit: 'tsp',
        flex: '',
        optional: true,
        topping: false,
        done: false,
      },
      {
        name: 'Agar agar',
        amount: 0.25,
        unit: 'tsp',
        flex: 'There are other gelling agents, but the amount you will need to add will differ.',
        optional: false,
        topping: false,
        done: false,
      },
    ],
    instructions: [
      'Add all ingredients to a pot and bring to a simmer on medium heat while stirring.',
      'When simmering, pour into ramekins or any other container like glasses and let cool for 30 min before storing in the fridge.',
      'Serve with any topping of your liking, like berries, coulis, nuts, or chocolate sauce.',
    ],
    notes: 'Angle the glasses while the Panna Cotta is cooling for a nice presentation.',
  },
  //   Ramen
  {
    name: 'Ramen',
    param: 'ramen',
    recipeImage: 'assets/images/ramen.png',
    star: true,
    introText:
      'A hearty and flavorful soup that originated in Mexico. A one-pot dish ready in just 15 minutes and we can add just about anything in it.',
    description:
      "This might just be our favorite soup of all time. A one-pot dish, super quick to make, no frying, just a bit of boiling, and the flexibility of the dish is on par with fried rice! You could put pretty much anything into the soup, and you can also choose any BBQ sauce of your liking or make one yourself with just 4 ingredients. Also, it's freakishly delicious and addictive.",
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
      {
        name: 'Butter',
        amount: 200,
        unit: 'g',
        flex: 'Neutral vegetable oil.',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Garlic',
        amount: 8,
        unit: 'large cloves',
        flex: '',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Light soy sauce',
        amount: 1,
        unit: 'cup',
        flex: '',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'MSG',
        amount: 1,
        unit: 'tbsp',
        flex: '',
        optional: true,
        topping: false,
        done: false,
      },
      {
        name: 'Sugar',
        amount: 1,
        unit: 'cup',
        flex: 'White sugar, brown sugar, syrup, mirin.',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Chili flakes',
        amount: 2,
        unit: 'tbsp',
        flex: '',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Rice vinegar',
        amount: 2,
        unit: 'tbsp',
        flex: 'Any vinegar will do just fine.',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Spring onion',
        amount: 3,
        unit: '',
        flex: 'Other crispy greens',
        optional: false,
        topping: false,
        done: false,
      },
    ],
    instructions: [
      'Bring a pot or pan of water to a boil, then salt the water to your liking and add the noodles.',
      'Slice the cloves of garlic.',
      'Add butter to a wok or pan on medium high heat and fry for 1 minute.',
      'Add soy, sugar, chili flakes, chopped spring onion, MSG, and vinegar. Set the heat to low until the noodles are done.',
      'Add noodles to the sauce, set the heat to high and mix for 1 minute. Serve.',
    ],
    notes: 'MSG is amazing in this dish.',
  },
  //   Swedish Balls
  {
    name: 'Swedish Balls',
    param: 'swedish-balls',
    recipeImage: 'assets/images/swedish-balls.jpg',
    star: true,
    introText:
      'A hearty and flavorful soup that originated in Mexico. A one-pot dish ready in just 15 minutes and we can add just about anything in it.',
    description:
      "This might just be our favorite soup of all time. A one-pot dish, super quick to make, no frying, just a bit of boiling, and the flexibility of the dish is on par with fried rice! You could put pretty much anything into the soup, and you can also choose any BBQ sauce of your liking or make one yourself with just 4 ingredients. Also, it's freakishly delicious and addictive.",
    tags: {
      quick: false,
      easy: false,
      temperature: null,
      clean: false,
      cheap: false,
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
      {
        name: 'Butter',
        amount: 200,
        unit: 'g',
        flex: 'Neutral vegetable oil.',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Garlic',
        amount: 8,
        unit: 'large cloves',
        flex: '',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Light soy sauce',
        amount: 1,
        unit: 'cup',
        flex: '',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'MSG',
        amount: 1,
        unit: 'tbsp',
        flex: '',
        optional: true,
        topping: false,
        done: false,
      },
      {
        name: 'Sugar',
        amount: 1,
        unit: 'cup',
        flex: 'White sugar, brown sugar, syrup, mirin.',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Chili flakes',
        amount: 2,
        unit: 'tbsp',
        flex: '',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Rice vinegar',
        amount: 2,
        unit: 'tbsp',
        flex: 'Any vinegar will do just fine.',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Spring onion',
        amount: 3,
        unit: '',
        flex: 'Other crispy greens',
        optional: false,
        topping: false,
        done: false,
      },
    ],
    instructions: [
      'Bring a pot or pan of water to a boil, then salt the water to your liking and add the noodles.',
      'Slice the cloves of garlic.',
      'Add butter to a wok or pan on medium high heat and fry for 1 minute.',
      'Add soy, sugar, chili flakes, chopped spring onion, MSG, and vinegar. Set the heat to low until the noodles are done.',
      'Add noodles to the sauce, set the heat to high and mix for 1 minute. Serve.',
    ],
    notes: 'MSG is amazing in this dish.',
  },
  //   Tagine
  {
    name: 'Tagine',
    param: 'tagine',
    recipeImage: 'assets/images/tagine.png',
    star: false,
    introText:
      'A hearty and flavorful soup that originated in Mexico. A one-pot dish ready in just 15 minutes and we can add just about anything in it.',
    description:
      'A hearty and flavorful soup that originated in Mexico. A one-pot dish ready in just 15 minutes and we can add just about anything in it. The soup is usually made with pieces of fried corn tortillas, which add a crunchy texture to the soup. It also features canned beans, and we add all the aquafaba that comes with it. The soup is often garnished with toppings such as diced avocado, cilantro, red onion, and sour cream. It is a satisfying and filling meal that is perfect for a cold day.',
    tags: {
      quick: true,
      easy: true,
      temperature: null,
      clean: true,
      cheap: true,
    },
    ingredients: [
      {
        name: 'Water',
        amount: 600,
        unit: 'ml',
        flex: '',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Puréed tomatoes',
        amount: 200,
        unit: 'ml',
        flex: 'We can use canned crushed tomatoes instead, or even chop up fresh tomatoes ourselves.',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Vegetable bouillon',
        amount: 2,
        unit: 'cubes',
        flex: '',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Beans in aquafaba',
        amount: 400,
        unit: 'ml',
        flex: 'Kidney beans, great white beans, black beans, anything goes!',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Bell pepper',
        amount: 1,
        unit: '',
        flex: 'The bell pepper, corn, jackfruit, cilantro, and toppings can be substituted with anything. You can add more vegetables, but also add fewer vegetables than what we listed.',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'BBQ sauce',
        amount: 50,
        unit: 'ml',
        flex: '',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'MSG',
        amount: 1,
        unit: 'tbsp',
        flex: '',
        optional: true,
        topping: false,
        done: false,
      },
      {
        name: 'Sugar',
        amount: 1,
        unit: 'tbsp',
        flex: '',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Chili flakes',
        amount: 1,
        unit: 'tbsp',
        flex: 'Or fresh chopped up chili if we have it. We often add a hot sauce instead, or a chili paste like Tobanjjan or tabasco.',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Avocado',
        amount: 1,
        unit: '',
        flex: '',
        optional: false,
        topping: true,
        done: false,
      },
      {
        name: 'Red onion',
        amount: 0.5,
        unit: '',
        flex: '',
        optional: false,
        topping: true,
        done: false,
      },
      {
        name: 'Cilantro',
        amount: 50,
        unit: 'ml',
        flex: '',
        optional: true,
        topping: true,
        done: false,
      },
      {
        name: 'Ketchup',
        amount: 50,
        unit: 'ml',
        flex: '',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Light soy sauce',
        amount: 50,
        unit: 'ml',
        flex: '',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Tortilla chips',
        amount: null,
        unit: '',
        flex: "This is added for crunch, so any chips fit. For example, we also love adding salt & vinegar chips, onion chips, BBQ chips, or if we don't have chips we may even go with roasted onion.",
        optional: false,
        topping: true,
        done: false,
      },
      {
        name: 'Oregano',
        amount: 1,
        unit: 'tbsp',
        flex: '',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Corn',
        amount: 100,
        unit: 'g',
        flex: '',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Jackfruit',
        amount: 100,
        unit: 'g',
        flex: '',
        optional: true,
        topping: false,
        done: false,
      },
      {
        name: 'Liquid smoke',
        amount: 2,
        unit: 'tsp',
        flex: '',
        optional: true,
        topping: false,
        done: false,
      },
      {
        name: 'Lime',
        amount: 1,
        unit: '',
        flex: "Use lime, lemon, or yuzu, or we can use any vinegar in half the amount if we don't have citrus.",
        optional: false,
        topping: false,
        done: true,
      },
    ],
    instructions: [
      'We add all the ingredients except the toppings and lime to a pot and bring to a boil. The toppings are the avocado, red onion, and tortilla chips. Remember to add the aquafaba with the beans into the pot.',
      'While bringing the pot to a boil, we chop up the toppings.',
      'We boil on medium-high heat for about 5 min. We taste the soup during this time, and add more of any ingredient we wish.',
      'When it has finished boiling we add the lime, and we also bring some extra lime to the table for us to squeeze in as we desire.',
      'We serve the toppings in bowls on the table for each person to freely take.',
    ],
    notes:
      'This soup is slightly different each time we make it thanks to its versitility. Sometimes we also add plant-based melty cheese to it or plant-based sour cream with garlic.',
  },
  thaiBasilSauce,
  tomatoPasta,
  //   Tortilla Soup
  {
    name: 'Tortilla Soup',
    param: 'tortilla-soup',
    recipeImage: 'assets/images/tortilla-soup.jpg',
    star: true,
    introText:
      'A hearty and flavorful soup that originated in Mexico. A one-pot dish ready in just 15 minutes and we can add just about anything in it.',
    description:
      'A hearty and flavorful soup that originated in Mexico. A one-pot dish ready in just 15 minutes and we can add just about anything in it. The soup is usually made with pieces of fried corn tortillas, which add a crunchy texture to the soup. It also features canned beans, and we add all the aquafaba that comes with it. The soup is often garnished with toppings such as diced avocado, cilantro, red onion, and sour cream. It is a satisfying and filling meal that is perfect for a cold day.',
    tags: {
      quick: true,
      easy: true,
      temperature: null,
      clean: true,
      cheap: true,
    },
    ingredients: [
      {
        name: 'Water',
        amount: 600,
        unit: 'ml',
        flex: '',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Puréed tomatoes',
        amount: 200,
        unit: 'ml',
        flex: 'We can use canned crushed tomatoes instead, or even chop up fresh tomatoes ourselves.',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Vegetable bouillon',
        amount: 2,
        unit: 'cubes',
        flex: '',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Beans in aquafaba',
        amount: 400,
        unit: 'ml',
        flex: 'Kidney beans, great white beans, black beans, anything goes!',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Bell pepper',
        amount: 1,
        unit: '',
        flex: 'The bell pepper, corn, jackfruit, cilantro, and toppings can be substituted with anything. You can add more vegetables, but also add fewer vegetables than what we listed.',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'BBQ sauce',
        amount: 50,
        unit: 'ml',
        flex: '',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'MSG',
        amount: 1,
        unit: 'tbsp',
        flex: '',
        optional: true,
        topping: false,
        done: false,
      },
      {
        name: 'Sugar',
        amount: 1,
        unit: 'tbsp',
        flex: '',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Chili flakes',
        amount: 1,
        unit: 'tbsp',
        flex: 'Or fresh chopped up chili if we have it. We often add a hot sauce instead, or a chili paste like Tobanjjan or tabasco.',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Avocado',
        amount: 1,
        unit: '',
        flex: '',
        optional: false,
        topping: true,
        done: false,
      },
      {
        name: 'Red onion',
        amount: 0.5,
        unit: '',
        flex: '',
        optional: false,
        topping: true,
        done: false,
      },
      {
        name: 'Cilantro',
        amount: 50,
        unit: 'ml',
        flex: '',
        optional: true,
        topping: true,
        done: false,
      },
      {
        name: 'Ketchup',
        amount: 50,
        unit: 'ml',
        flex: '',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Light soy sauce',
        amount: 50,
        unit: 'ml',
        flex: '',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Tortilla chips',
        amount: null,
        unit: '',
        flex: "This is added for crunch, so any chips fit. For example, we also love adding salt & vinegar chips, onion chips, BBQ chips, or if we don't have chips we may even go with roasted onion.",
        optional: false,
        topping: true,
        done: false,
      },
      {
        name: 'Oregano',
        amount: 1,
        unit: 'tbsp',
        flex: '',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Corn',
        amount: 100,
        unit: 'g',
        flex: '',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Jackfruit',
        amount: 100,
        unit: 'g',
        flex: '',
        optional: true,
        topping: false,
        done: false,
      },
      {
        name: 'Liquid smoke',
        amount: 2,
        unit: 'tsp',
        flex: '',
        optional: true,
        topping: false,
        done: false,
      },
      {
        name: 'Lime',
        amount: 1,
        unit: '',
        flex: "Use lime, lemon, or yuzu, or we can use any vinegar in half the amount if we don't have citrus.",
        optional: false,
        topping: false,
        done: true,
      },
    ],
    instructions: [
      'We add all the ingredients except the toppings and lime to a pot and bring to a boil. The toppings are the avocado, red onion, and tortilla chips. Remember to add the aquafaba with the beans into the pot.',
      'While bringing the pot to a boil, we chop up the toppings.',
      'We boil on medium-high heat for about 5 min. We taste the soup during this time, and add more of any ingredient we wish.',
      'When it has finished boiling we add the lime, and we also bring some extra lime to the table for us to squeeze in as we desire.',
      'We serve the toppings in bowls on the table for each person to freely take.',
    ],
    notes:
      'This soup is slightly different each time we make it thanks to its versitility. Sometimes we also add plant-based melty cheese to it or plant-based sour cream with garlic.',
  },
];
