class FizzBuzz{
    static applyValidationInExplorer(explorer){
        const name = explorer.name;
        const score= explorer.score;
        if(explorer.score%5 === 0 && explorer.score%3 === 0){
            explorer.trick = "FIZZBUZZ";
            return explorer;
        }else if(explorer.score%3 === 0){
            explorer.trick = "FIZZ";
            return explorer;
        }else if(explorer.score%5 === 0){
            explorer.trick = "BUZZ";
            return explorer;
        }else{
            explorer.trick = explorer.score;
            return explorer;
        }
    }
}
module.exports= FizzBuzz;