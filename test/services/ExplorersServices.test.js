const ExplorerService= require("./../../lib/services/ExplorerService");
const Reader= require("./../../lib/utils/Reader");
const Fizzbuz= require("./../../lib/services/FizzbuzzService");
const ExplorersControllers= require("./../../lib/controllers/ExplorersControllers");
describe("Test para ExplorerServices",()=>{
    test("Requerimientos 1: Calcular todos los explorers en una misión",()=>{
        const explorers= [{mission:"node"}];
        const explorerInNode= ExplorerService.filterByMission(explorers,"node");
        expect(explorerInNode.length).toBe(1);
    });
    test("Requerimiento 2: Cantidad de Explorers",()=>{
        const explorers= [{mission:"node"}];
        const number= ExplorerService.getAmountOfExplorersByMission(explorers,"node");
        expect(number).toBe(1);
    });
    test("Requerimiento 3: Cantidad de Explorers",()=>{
        const explorers=[{githubUsername:"Héctor", mission:"node"}];
        const cantidad= ExplorerService.getExplorersUsernamesByMission(explorers,"node");
        expect(cantidad.length).toBe(1);
    });
    test("Requerimeinto 4: FizzBuzz",()=>{
        const explorers= [{score:1}];
        const fizz= Fizzbuz.applyValidationInExplorer(explorers);
        expect(fizz.length).toBe(1);
    });
    test("Requerimiento 5: Lectura",()=>{
        const lectura= Reader.readJsonFile();
        expect(lectura.length).toBe(15);
    });
    test("Requerimeinto 6: ExplorersControllers 1",()=>{
        const getMission= ExplorersControllers.getExplorersByMission("node");
        expect(getMission.length).toBe(10);
    });
    test("Requerimeinto 7: ExplorersControllers 1",()=>{
        const getMission= ExplorersControllers.getExplorersUsernamesByMission("node");
        expect(getMission.length).toBe(10);
    });
    test("Requerimeinto 8: ExplorersControllers 1",()=>{
        const getMission= ExplorersControllers.getExplorersAmonutByMission("node");
        expect(getMission).toBe(10);
    });
});