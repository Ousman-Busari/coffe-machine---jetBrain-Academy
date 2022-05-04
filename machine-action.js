// const input = require("sync-input");
let availableResources = {
  water: 400,
  milk: 540,
  coffeeBeans: 120,
  money: 550,
  cups: 9,
};

let coffeTypes = [
  0,
  (espresso = {
    type: "espresso",
    info: "Great choice! You go for espresso. It contain antioxidants that boost the immune system.\nEspresso shots can even reduce the risk of heart diseases and stroke. It can also avoid diabetes\n",
    water: 250,
    milk: 0,
    coffeeBeans: 16,
    cost: 4,
  }),
  (latte = {
    type: "latte",
    info: "Latte! Your Friend with Nutrient Benefits!\nAlmost too good to be true, a morning latte delivers one full cup of milk's \nnine essential nutrients, including 300 mg of calcium – that's 25% daily value – to\nhelp build strong bones and 8 grams of high-quality protein to help keep you fuller for longer.\n",
    water: 350,
    milk: 75,
    coffeeBeans: 20,
    cost: 7,
  }),
  (cappuccino = {
    type: "cappuccino",
    info: "It's cappuccino you want, it's cappucino you get ;)\nStudies reveal that a cup of cappuccino up to 180 ml a day can significantly prevent\nthe oxidization of bad cholesterol and prevent heart problems.\nIt also lowers the chances of a stroke by 20 per cent and\ntake it without sugar, to keep blood sugars under control. It also assists in digestion\n",
    water: 200,
    milk: 100,
    coffeeBeans: 20,
    cost: 6,
  }),
];

function buy() {
  console.log();
  let choice = 4;
  //   input(
  //     "What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, 4 - just give me a coffeebackback, back - to main menu::\n"
  //   );
  if (choice === 4) {
    choice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    console.log(
      `Would you like to try out this brewtifull ${coffeTypes[choice].type}!\n`
    );
    let decision = 1;
    // input("1 - Yeah!, 2 - Nah!") {
    if (decision === 1) {
      validBuyAction();
    } else {
      console.log(
        "Sorry! I coulnd't be of help.\nI am Taking you back to the main menu"
      );
    }
  } else if (choice < 1 || choice > 3) {
    console.log(
      "No valid option for the your input!\nHere is the list of availble number-options"
    );

    // do {

    choice = 2;
    // input(
    //   "1 - espresso, 2 - latte, 3 - cappuccino, 4 - just give me a coffeebackback - to main menu:\n"
    // );

    // } while (choice >= 1 || choice <= 2);

    validBuyAction();
  } else if (isNaN(choice)) {
    //&& choice !== "back")
    // do {
    console.log(
      "Your input is not a number!\nSee the list of available options below and choose the corresponding number"
    );
    // do {
    choice = 1;
    // input(
    //   "1 - espresso, 2 - latte, 3 - cappuccino, 4 - just give me a coffeeback - to main menu:\n"
    // );

    //  } while (!isNaN(choice) || choice <= 2);

    validBuyAction();
    //   } else if (choice === "back") {
    //     break;
  } else if (choice === "back") {
  } else {
    validBuyAction();
  }
  function validBuyAction() {
    console.log(coffeTypes[choice].info);
    if (
      availableResources.water >= coffeTypes[choice].water &&
      availableResources.milk >= coffeTypes[choice].milk &&
      availableResources.coffeeBeans >= coffeTypes[choice].coffeeBeans &&
      availableResources.cups >= 1
    ) {
      console.log(
        `I have enough resources, making you a cup of ${coffeTypes[choice].type} right away!`
      );
      availableResources.water -= coffeTypes[choice].water;
      availableResources.milk -= coffeTypes[choice].milk;
      availableResources.coffeeBeans -= coffeTypes[choice].coffeeBeans;
      availableResources.money += coffeTypes[choice].cost;
      availableResources.cups--;
    } else {
      let neededResources = Object.keys(coffeTypes[choice]);
      for (let ing of neededResources) {
        // console.log(coffeTypes[choice][ing]);
        // console.log(availableResources[ing]);
        if (coffeTypes[choice][ing] > availableResources[ing]) {
          console.log(`Sorry, not enough ${ing}`);
        }
      }
    }
  }
}

function fill() {
  console.log();
  let mlOfWater = 1000;
  // input('Write how many ml of water do you want to add:\n')
  let mlOfMilk = 0;
  // input('Write how many ml of water do you want to add:\n')
  let gmOfCoffeBeans = 0;
  // input('Write how many ml of water do you want to add:\n')
  let numberOfCups = 0;
  // input('Write how many ml of water do you want to add:\n')
  availableResources.water += mlOfWater;
  availableResources.milk += mlOfMilk;
  availableResources.coffeeBeans += gmOfCoffeBeans;
  availableResources.cups += numberOfCups;
  console.log("Succesffully filled");
}

function take() {
  console.log();
  console.log(`I gave you $${availableResources.money}`);
}

function remaining() {
  console.log();
  console.log(`The coffee machine has:
${availableResources.water} ml of water
${availableResources.milk} ml of milk
${availableResources.coffeeBeans} g of coffee beans
${availableResources.cups} disposable cups
$${availableResources.money} of money`);
}

function machine() {
  let action = "buy";
  // input("Write action (buy, fill, take, remaining, exit):\n");
  switch (action) {
    case "buy":
      buy();
      break;
    case "take":
      take();
      break;
    case "fill":
      fill();
      break;
    case "remaining":
      remaining();
      break;
    case "exit":
      break;
  }
}

machine();
