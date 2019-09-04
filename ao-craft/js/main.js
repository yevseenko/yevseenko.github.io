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
    'T8_POTION_CLEANSE',
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
    'invisibilityT8': {
      'T8_YARROW': 72,
      'T7_MULLEIN': 36,
      'T5_TEASEL': 36,
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
    <h2>Alchemy</h2>
    <div class="grid-tmp">
      <div class="item-header">Item name</div>
      <div class="item-header">Tier</div>
      <div class="item-header">Craft cost</div>
      <div class="item-header">Current cost</div>
      <div class="item-header">Profit</div>

      <div>Major poison potion</div>
      <div>[T8]</div>
      <div>${craftPrices.poisonT8}</div>
      <div>${prices['T8_POTION_COOLDOWN']}</div>
      <div>${craftPrices.poisonT8 * 0.37 + prices['T8_POTION_COOLDOWN'] - craftPrices.poisonT8}</div>

      <div>Invisibility potion </div>
      <div>[T8]</div>
      <div>${craftPrices.invisibilityT8}</div>
      <div>${prices['T8_POTION_CLEANSE']}</div>
      <div>${craftPrices.invisibilityT8 * 0.37 + prices['T8_POTION_CLEANSE'] - craftPrices.invisibilityT8}</div>
    
      <div>Poison potion </div>
      <div>[T6]</div>
      <div>Craft: ${craftPrices.poisonT6}</div>
      <div>Current: ${prices['T6_POTION_COOLDOWN']}</div>
      <div>${craftPrices.poisonT6 * 0.37 + prices['T6_POTION_COOLDOWN'] - craftPrices.poisonT6}</div>

      <div>Minor poison potion </div>
      <div>[T4]</div>
      <div>Craft: ${craftPrices.poisonT4}</div>
      <div>Current: ${prices['T4_POTION_COOLDOWN']}</div>
      <div>${craftPrices.poisonT4 * 0.37 + prices['T4_POTION_COOLDOWN'] - craftPrices.poisonT4}</div>
    </div>
    `

    console.log(craftPrices);
    console.log(prices);
  }

  calculatePrices();
}());
