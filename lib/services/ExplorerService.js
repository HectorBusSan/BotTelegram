class ExplorerServices{
    static filterByMission(explorers,mission){
        const explorerByMission= explorers.filter(explorer=>explorer.mission=== mission);
        return explorerByMission;
    }
    static getAmountOfExplorersByMission(explorers,mission){
        const explorerByMission= explorers.filter(explorer=>explorer.mission=== mission);
        return explorerByMission.length;
    }
    static getExplorersUsernamesByMission(explorers,mission){
        const explorerByMission= explorers.filter(explorer=>explorer.mission=== mission);
        const maped= explorerByMission.map(res=>res.githubUsername);
        return maped;
    }
}

module.exports=ExplorerServices;