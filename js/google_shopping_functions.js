var data = require('../products.json')

// 0. output item count using the getItemsCount function
function getItemsCount (itemData) {
  return itemData.items.length
}

// console.log('Item Count: ' + getItemsCount(data))

// 1. Create a function called getItems that simply returns the items array from the google product object.
// input: json object
// returns: an array of items

function getItems (dataObject) {
  var array = dataObject.items
  return array
}
// console.log(getItems(data))

// 2. Create a function getItemsByBrand(items, brand)
// input: an array of items, a string of a brand to filter with
// returns: an array of items (of a specific brand)

function getItemsByBrand (itemsArray, brand) {
  var outputArray = []

  for (var i = 0; i < itemsArray.length; i++) {
    var currentBrand = itemsArray[i].product.brand
    if (currentBrand === brand) {
      outputArray.push(itemsArray[i])
    }
  }
  return outputArray
}

var testDataArray = getItems(data)
// console.log(getItemsByBrand(testDataArray, 'Panasonic'))

// 3.) Create a function getItemsByAuthor(items, author) that takes an item array and returns a new array of all items by a specified author.
// input: an array of items, a string of an author to filter with
// returns: an array of items (of a specific author)

function getItemsByAuthor (itemsArray, author) {
  var outputArray = []

  for (var i = 0; i < itemsArray.length; i++) {
    var currentAuthor = itemsArray[i].product.author.name

    if (currentAuthor === author) {
      outputArray.push(itemsArray[i])
    }
  }
  return outputArray
}

var itemsBelongingToTarget = getItemsByAuthor(testDataArray, 'Target')
// console.log(itemsBelongingToTarget)

// 4.) Create function called getAvailableProducts(items) that takes an item array and returns an array containing all of the available products (an available product is one with at least one availability of "inStock" in the inventories array)
// input: an array of items
// returns: an array of items (that are available)
function getAvailableProducts (itemsArray) {
  var output = []
  for (var i = 0; i < itemsArray.length; i++) {
    // do some console logging to find out the availability of the item
    // console.log(itemsArray[i].product.inventories[0].availability)

    var itemAvailabilityStatus = itemsArray[i].product.inventories[0].availability

    if (itemAvailabilityStatus !== 'inStock') {
      output.push(itemsArray[i])
    }
  }
  return output
}

// var availableProducts = getAvailableProducts(testDataArray)
// console.log(availableProducts)

// 5. Putting it altogether!
// 5.1 All items made by Sony.
var allProducts = getItems(data)
var allItemsMadeBySony = getItemsByBrand(allProducts, 'Sony')
console.log(allItemsMadeBySony)

// 5.2 All items made by Sony that are available.
var availableProducts = getAvailableProducts(testDataArray)
var allAvailableSonyItems = getItemsByBrand(availableProducts, 'Sony')
console.log(allAvailableSonyItems)

// 5.3 All available items by the author "Adorama Camera"
var availableItemsByAdorama = getItemsByAuthor(availableProducts, 'Adorama Camera')
console.log(availableItemsByAdorama)

// 5.4 All items made by Nikon with the author eBay.
var allItemsMadeByNikon = getItemsByBrand(allProducts, 'Nikon')
var allItemsByNikonAndAuthoredByEBay = getItemsByAuthor(allItemsMadeByNikon, 'eBay')
console.log(allItemsByNikonAndAuthoredByEBay);
