const Reader = require("./lib/utils/Reader");
const ExplorerServices = require("./lib/services/ExplorerService");
const Fizzbuz= require("./lib/services/FizzbuzzService");
const ExplorersControllers= require("./lib/controllers/ExplorersControllers");

console.log("----------Reader-------------");
const explorers= Reader.readJsonFile("explorer.json");
// console.log(explorers);

// aplicación  del Explorer Services sobre la lista del explorer
console.log("----------ExplorerServices-------------");
console.log(ExplorerServices.filterByMission(explorers,"node"));
// console.log(ExplorerServices.getAmountOfExplorersByMission(explorers,"node"));
// console.log(ExplorerServices.getExplorersUsernamesByMission(explorers,"node"));
console.log("----------FizzBuzz-------------");
console.log(Fizzbuz.applyValidationInExplorer({name: "Explorer1",score:1}));
console.log(Fizzbuz.applyValidationInExplorer({name: "Explorer3",score:3}));
console.log(Fizzbuz.applyValidationInExplorer({name: "Explorer5",score:5}));
console.log(Fizzbuz.applyValidationInExplorer({name: "Explorer15",score:15}));
console.log("----------Controls------------");
console.log(ExplorersControllers.getExplorersByMission("node"));
console.log("");
console.log(ExplorersControllers.getExplorersUsernamesByMission("node"));
console.log("");
console.log(ExplorersControllers.getExplorersAmonutByMission("node"));