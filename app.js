// https://calculator.swiftutors.com/acid-test-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const acidTestRatioRadio = document.getElementById('acidTestRatioRadio');
const currentAssetsRadio = document.getElementById('currentAssetsRadio');
const inventoryRadio = document.getElementById('inventoryRadio');
const currentLiabilitiesRadio = document.getElementById('currentLiabilitiesRadio');

let acidTestRatio;
let currentAssets = v1;
let inventory = v2;
let currentLiabilities = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

acidTestRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Current Assets';
  variable2.textContent = 'Inventory';
  variable3.textContent = 'Current Liabilities';
  currentAssets = v1;
  inventory = v2;
  currentLiabilities = v3;
  result.textContent = '';
});

currentAssetsRadio.addEventListener('click', function() {
  variable1.textContent = 'Acid Test Ratio';
  variable2.textContent = 'Inventory';
  variable3.textContent = 'Current Liabilities';
  acidTestRatio = v1;
  inventory = v2;
  currentLiabilities = v3;
  result.textContent = '';
});

inventoryRadio.addEventListener('click', function() {
  variable1.textContent = 'Acid Test Ratio';
  variable2.textContent = 'Current Assets';
  variable3.textContent = 'Current Liabilities';
  acidTestRatio = v1;
  currentAssets = v2;
  currentLiabilities = v3;
  result.textContent = '';
});

currentLiabilitiesRadio.addEventListener('click', function() {
  variable1.textContent = 'Acid Test Ratio';
  variable2.textContent = 'Current Assets';
  variable3.textContent = 'Inventory';
  acidTestRatio = v1;
  currentAssets = v2;
  inventory = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(acidTestRatioRadio.checked)
    result.textContent = `Acid Test Ratio = ${computeAcidTestRatio().toFixed(2)}`;

  else if(currentAssetsRadio.checked)
    result.textContent = `Current Assets = ${computeCurrentAssets().toFixed(2)}`;

  else if(inventoryRadio.checked)
    result.textContent = `Inventory = ${computeInventory().toFixed(2)}`;

  else if(currentLiabilitiesRadio.checked)
    result.textContent = `Current Liabilities = ${computeCurrentLiabilities().toFixed(2)}`;
})

// calculation

// Quick Ratio = (current assets - Inventory) / Current liabilities --- found this at google

function computeAcidTestRatio() {
  return (Number(currentAssets.value) - Number(inventory.value)) / Number(currentLiabilities.value);
}

function computeCurrentAssets() {
  return (Number(acidTestRatio.value) * Number(currentLiabilities.value)) + Number(inventory.value);
}

function computeInventory() {
  return Number(currentAssets.value) - (Number(acidTestRatio.value) * Number(currentLiabilities.value));
}

function computeCurrentLiabilities() {
  return (Number(currentAssets.value) - Number(inventory.value)) / Number(acidTestRatio.value);
}