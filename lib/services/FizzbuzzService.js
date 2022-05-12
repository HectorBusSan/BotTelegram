class FizzBuzz{
    static applyValidationInExplorer(explorer){
        if(explorer.score%5 === 0 && explorer.score%3 === 0){
            explorer.trick = "FIZZBUZZ";
            return explorer.trick;
        }else if(explorer.score%3 === 0){
            explorer.trick = "FIZZ";
            return explorer.trick;
        }else if(explorer.score%5 === 0){
            explorer.trick = "BUZZ";
            return explorer.trick;
        }else{
            explorer.trick = explorer.score;
            return explorer.trick;
        }
    }
}
module.exports= FizzBuzz;