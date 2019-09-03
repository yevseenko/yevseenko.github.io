(function () {
  const rootNode = document.querySelector('#rootNode');
  const items = [
    'T8_YARROW',
    'T8_ALCOHOL',
    'T8_MILK',
    'T7_MULLEIN',
    'T5_TEASEL',
    'T6_FOXGLOVE',
    'T3_COMFREY',
    'T6_MILK',
    'T4_BURDOCK',
    'T8_POTION_COOLDOWN',
    'T6_POTION_COOLDOWN',
    'T4_POTION_COOLDOWN'
  ];

  const recipes = {
    'poisonT8': {
      'T8_YARROW': 72,
      'T7_MULLEIN': 24,
      'T5_TEASEL': 24,
      'T8_MILK': 18,
      'T8_ALCOHOL': 18
    },
    'poisonT6': {
      'T6_FOXGLOVE': 24,
      'T5_TEASEL': 12,
      'T3_COMFREY': 12,
      'T6_MILK': 6
    },
    'poisonT4': {
      'T4_BURDOCK': 8,
      'T3_COMFREY': 4
    }
  }

  const CRAFT_COUNT = 5;

  async function getPrices(items) {
    let obj = {};

    const price = await fetch(`https://www.albion-online-data.com/api/v2/stats/prices/${items.join(',')}?locations=Caerleon&qualities=0`);
    const json = await price.json();

    json.map(item => obj[item.item_id] = item.sell_price_min);

    return obj;
  }

  async function calculatePrices() {
    const prices = await getPrices(items);

    const craftPrices = {};

    for (let prop in recipes) {
      craftPrices[prop] = calculateRecipe(recipes[prop]) / CRAFT_COUNT;
    }

    function calculateRecipe(recipe) {
      let result = 0;
      for (let prop in recipe) {
        result += recipe[prop] * prices[prop];
      }
      return result;
    }

    rootNode.innerHTML = `
    <div>Major poison potion [T8] || craft: ${craftPrices.poisonT8}, current: ${prices['T8_POTION_COOLDOWN']}</div>
    <div>Poison potion [T6] || craft: ${craftPrices.poisonT6}, current: ${prices['T6_POTION_COOLDOWN']}</div>
    <div>Minor poison potion [T4] || craft: ${craftPrices.poisonT4}, current: ${prices['T4_POTION_COOLDOWN']}</div>
    `

    console.log(craftPrices);
    console.log(prices);
  }

  calculatePrices();
}());
