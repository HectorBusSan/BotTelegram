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
}
module.exports= ExplorersControllers;