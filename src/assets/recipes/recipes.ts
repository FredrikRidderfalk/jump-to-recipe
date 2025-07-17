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
import { scallionPancakes } from './scallion-pancakes';
import { chocolateChipCookies } from './chocolate-chip-cookies';
import { crispyRiceSalad } from './crispy-rice-salad';
import { mushroomBourguignon } from './mushroomBourguignon';
import { spongeCake } from './sponge-cake';
import { mushroomPasta } from './mushroom-pasta';
import { orangeTofu } from './orange-tofu';
import { bananaBread } from './banana-bread';
import { mirzaGhasemi } from './mirza-ghasemi';
import { scallionSesameWaffles } from './scallion-sesame-waffles';
import { mapoTofu } from './mapo-tofu';
import { poke } from './poke';
import { karēRaisu } from './karē-raisu';
import { americanCinnamonRolls } from './american-cinnamon-rolls';
import { shakshuka } from './shakshuka';
import { chickpeaCurry } from './chickpea-curry';
import { makhani } from './makhani';
import { gochujangPasta } from './gochujang-pasta';
import { rhubarbPie } from './rhubarb-pie';
import { gochujangNoodles } from './gochujang-noodles';
import { lemonPepperGarlicChickpeas } from './lemon-pepper-garlic-chickpeas';
import { leonChimichurri } from './leon-chimichurri';
import { tortillaSoup } from './tortilla-soup';
import { oatMuffins } from './oat-muffins';
import { bananaOatMuffins } from './banana-oat-muffins';
import { mangoSerranoMuffins } from './mango-serrano-muffins';
import { muffins } from './muffins';
import { basilStrawberryMuffins } from './basil-strawberry-muffins';
import { pestoPasta } from './pesto-pasta';
import { pestoMelt } from './pesto-melt';
import { tagine } from './tagine';
import { swedishBalls } from './swedish-balls';

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
  scallionPancakes,
  chocolateChipCookies,
  crispyRiceSalad,
  mushroomBourguignon,
  mirzaGhasemi,
  poke,
  karēRaisu,
  makhani,
  americanCinnamonRolls,
  shakshuka,
  chickpeaCurry,
  gochujangPasta,
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
  swedishBalls,
  thaiBasilSauce,
  tomatoPasta,
  spongeCake,
  mushroomPasta,
  orangeTofu,
  bananaBread,
  scallionSesameWaffles,
  mapoTofu,
  gochujangPasta,
  rhubarbPie,
  gochujangNoodles,
  lemonPepperGarlicChickpeas,
  leonChimichurri,
  tortillaSoup,
  muffins,
  pestoPasta,
  pestoMelt,
  tagine,
];

// All recipes including alternative versions or base recipes
export const AllRecipes = [...Recipes, bananaOatMuffins, mangoSerranoMuffins, oatMuffins, basilStrawberryMuffins];
