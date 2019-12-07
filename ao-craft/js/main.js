<<<<<<< HEAD
(function () {
  console.log('Hello world');
=======
'use strict';
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
    'T4_POTION_COOLDOWN',
    'T5_POTION_REVIVE',
    'T5_EGG',
    'T5_POTION_SLOWFIELD',
    'T4_MILK',
    'T5_POTION_STONESKIN',
    'T6_POTION_ENERGY',
    'T6_ALCOHOL',
    'T7_ALCOHOL',
    'T6_POTION_HEAL',
    'T7_POTION_REVIVE',
    'T7_POTION_SLOWFIELD',
    'T7_POTION_STONESKIN'
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
    },
    'gigantifyT5': {
      'T5_TEASEL': 24,
      'T4_BURDOCK': 12,
      'T5_EGG': 6
    },
    'stickyT5': {
      'T5_TEASEL': 24,
      'T4_BURDOCK': 12,
      'T5_EGG': 6
    },
    'resistanceT5': {
      'T5_TEASEL': 24,
      'T4_BURDOCK': 12,
      'T4_MILK': 6
    },
    'energyT6': {
      'T6_FOXGLOVE': 72,
      'T6_MILK': 18,
      'T6_ALCOHOL': 18
    },
    'healingT6': {
      'T6_FOXGLOVE': 72,
      'T5_EGG': 18,
      'T6_ALCOHOL': 18
    },
    'gigantifyT7': {
      'T7_MULLEIN': 71,
      'T6_FOXGLOVE': 36,
      'T5_EGG': 18,
      'T7_ALCOHOL': 18
    },
    'stickyT7': {
      'T7_MULLEIN': 72,
      'T6_FOXGLOVE': 36,
      'T4_BURDOCK': 36,
      'T5_EGG': 18,
      'T7_ALCOHOL': 18
    },
    'resistanceT7': {
      'T7_MULLEIN': 72,
      'T6_FOXGLOVE': 36,
      'T4_BURDOCK': 36,
      'T6_MILK': 18,
      'T7_ALCOHOL': 18
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
      craftPrices[prop] = Math.round(calculateRecipe(recipes[prop]) / CRAFT_COUNT);
    }

    function calculateRecipe(recipe) {
      let result = 0;
      for (let prop in recipe) {
        result += recipe[prop] * prices[prop];
      }
      return result;
    }

    function calculateProfit(craft, current) {
      const foo = [0.15, 0.44];
      return foo.map(item => Math.round(craft * item + current - craft));
    }

    function drawItem(name, tier, craft, current) {
      const profit = calculateProfit(craft, current);
      let profitHtml = ``;
      let tierHtml = ``;

      profitHtml = profit.map(item => {
        if (item > 0) {
          return `<div class="profit-green">${item}</div>`;
        } else {
          return `<div class="profit-red">${item}</div>`;
        }  
      }).join('');
      
      switch (tier) {
        case '[T7]':
          tierHtml = `<div class="tier-7">[ VII ]</div>`;
          break;
        case '[T6]':
          tierHtml = `<div class="tier-6">[ VI ]</div>`;
          break;
        case '[T5]':
          tierHtml = `<div class="tier-5">[ V ]</div>`;
          break;
        case '[T4]':
          tierHtml = `<div class="tier-4">[ IV ]</div>`;
          break;
        default:
          tierHtml = `<div>[ VIII ]</div>`;
      }
      return `
        <div>${name}</div>
        ${tierHtml}
        <div>${craft}</div>
        <div>${current}</div>
        ${profitHtml}
        `;
    }

    rootNode.innerHTML = `
    <h2>Alchemy (Caerleon)</h2>
    <div class="grid-alchemy">
      <div class="item-header">Item name</div>
      <div class="item-header">Tier</div>
      <div class="item-header">Craft cost</div>
      <div class="item-header">Current cost</div>
      <div class="item-header">Wo/F RR15%</div>
      <div class="item-header">W/F RR44%</div>

      ${drawItem('Major Poison Potion', '[T8]', craftPrices.poisonT8, prices['T8_POTION_COOLDOWN'])}
      ${drawItem('Invisibility Potion', '[T8]', craftPrices.invisibilityT8, prices['T8_POTION_CLEANSE'])}

      ${drawItem('Major Gigantify Potion', '[T7]', craftPrices.gigantifyT7, prices['T7_POTION_REVIVE'])}
      ${drawItem('Major Sticky Potion', '[T7]', craftPrices.stickyT7, prices['T7_POTION_SLOWFIELD'])}
      ${drawItem('Major Resistance Potion', '[T7]', craftPrices.resistanceT7, prices['T7_POTION_STONESKIN'])}
    
      ${drawItem('Poison Potion', '[T6]', craftPrices.poisonT6, prices['T6_POTION_COOLDOWN'])}
      ${drawItem('Major Energy Potion', '[T6]', craftPrices.energyT6, prices['T6_POTION_ENERGY'])}
      ${drawItem('Major Healing Potion', '[T6]', craftPrices.healingT6, prices['T6_POTION_HEAL'])}

      ${drawItem('Gigantify Potion', '[T5]', craftPrices.gigantifyT5, prices['T5_POTION_REVIVE'])}
      ${drawItem('Sticky Potion', '[T5]', craftPrices.stickyT5, prices['T5_POTION_SLOWFIELD'])}
      ${drawItem('Resistance Potion', '[T5]', craftPrices.resistanceT5, prices['T5_POTION_STONESKIN'])}

      ${drawItem('Minor Poison Potion', '[T4]', craftPrices.poisonT4, prices['T4_POTION_COOLDOWN'])}
    </div>
    <h2>Cost</h2>
    <div class="grid-resource-prices">
      <div class="item-header">ResName</div>
      <div class="item-header">Leather</div>
      <div class="item-header">Cloth</div>
      <div class="item-header">Bar</div>
      <div class="item-header">Planks</div>
    </div>
    `;
  }

  calculatePrices();
>>>>>>> 18300d92dee2b1d94243108bdd6781ad12bd3a80
}());
