const Reader = require("./../utils/Reader");
const ExplorerServices = require("./../services/ExplorerService");
const Fizzbuz= require("./../services/FizzbuzzService");
class ExplorersControllers{
    static getExplorersByMission(mission){
        const reading =Reader.readJsonFile("explorers.json");
        const missions= ExplorerServices.filterByMission(reading,mission);
        return missions;
    }
    static getExplorersUsernamesByMission(mission){
        const reading =Reader.readJsonFile("explorers.json");
        const filter= reading.filter(explorers=>explorers.mission===mission);
        const usernames= filter.map(explorers=>explorers.githubUsername);
        return usernames;
    }
    static getExplorersAmonutByMission(mission){
        const reading =Reader.readJsonFile("explorers.json");
        const mapear = reading.map(explorers=>explorers.mission===mission).reduce((acc,explorer)=>acc+explorer,0);
        return mapear;
    }
    static applyValidationExplorer(explorer){
        if(explorer%5 === 0 && explorer%3 === 0){
            let trick = "FIZZBUZZ";
            return trick;
        }else if(explorer%3 === 0){
            let trick = "FIZZ";
            return trick;
        }else if(explorer.score%5 === 0){
            let trick = "BUZZ";
            return trick;
        }else{
            let trick=explorer;
            return trick;
        }
    }
}
module.exports= ExplorersControllers;