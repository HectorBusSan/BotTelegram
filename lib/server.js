const ExplorersControllers= require("./controllers/ExplorersControllers");
const FizzBuzz= require("./services/FizzbuzzService");
const Reader= require("./utils/Reader");
const express =require("express");
const app= express();

const port= 3000;

app.get("/",(req,res)=>{
    res.json({message: "FizzBuzz API Welcome"});
});
app.listen(port,()=>{
    console.log(`FizzBuzz API in localhost: ${port}`);
});

// endpoints
app.get("/v1/explorers/:mission",(req,res)=>{
    const mission = req.params.mission;
    const explorersInMission= ExplorersControllers.getExplorersByMission(mission);
    res.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission",(req,res)=>{
    const mission = req.params.mission;
    const numberExplorers= ExplorersControllers.getExplorersAmonutByMission(mission);
    res.json({"mission":mission,"quantity":numberExplorers});
});
app.get("/v1/explorers/usernames/:mission",(req,res)=>{
    const mission= req.params.mission;
    const usernames= ExplorersControllers.getExplorersUsernamesByMission(mission);
    res.json({"mission":mission,"explorers":usernames});
});
app.get("/v1/fizzbuzz/:score",(req,res)=>{
    const score= FizzBuzz.applyValidationInExplorer(req.params);
    res.json(score);
});
app.get("/v1/explorers/stack/:javascript",(req,res)=>{
    const reader= Reader.readJsonFile();
    const stack= reader.filter(explorers=>explorers.staks===req.params.stacks);
    res.json(stack);
});