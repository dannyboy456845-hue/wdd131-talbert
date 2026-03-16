nums = [12, 10, 8, 3]

console.log(nums.sort());


const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];

let simpleSort = simpleList.sort();

console.log(simpleSort)

let lowerList = simpleList.map(function(fruit) {
    return fruit.toLowerCase();
})

let lowersort = lowerList.sort();
console.log(lowersort);

let searchTerm = 'co';

let filterFruit = lowersort.filter(searchFruit);

function serachFruit(itme){
    return itme.includes(searchTerm);
}

console.log(filterFruit);

function compareFn(a,b) {
  if (a.price < b.price) {
    return -1;
  } else if (a > b) {
    return 1;
  }
 return 0;
}



const products = [
  {
    productName: "Wireless Mouse",
    price: 29.99
  },
  {
    productName: "Bluetooth Keyboard",
    price: 49.99
  },
  {
    productName: "Laptop Stand",
    price: 39.99
  }
];

let productSort = products.sort(compareFn);

console.log(productSort);



const animals = [
  {
    name: "Lion",
    traits: ["brave", "strong", "fierce", "wild"]
  },
  {
    name: "Elephant",
    traits: ["large", "gentle", "smart", "wild"]
  },
  {
    name: "Fox",
    traits: ["sly", "quick", "clever", "wild"]
  },
  {
    name: "Dog",
    traits: ["loyal", "friendly", "playful", "cuddly"]
  },
  {
    name: "Cat",
    traits: ["quiet", "independent", "curious", "cuddly"]
  }
];

let query = 'ox';
let filteredTraits = animals.filter(searchTraits);

function searchList(item){
    return item.traits.find((trait) => trait.toLowerCase().includes(queryTrait.toLowerCase()))

}

console.log(filteredList);