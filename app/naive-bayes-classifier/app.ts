var bayes = require('bayes')

var classifier = bayes();
import FootballDataParser from "./footballDataParser";
import FootballResult from "./footballResult";

var footballDataParser = new FootballDataParser();




//Swansea FC results for the last 2 seasons
footballDataParser.getData().then((data) => {
    data.map((footballResult: FootballResult) => {
        classifier.learn(footballResult.team, footballResult.result);
    });

    // How accurate is the classifer based on this seasons results ?
    console.log(classifier.categorize('Bournemouth')) //Lost Twice
    console.log(classifier.categorize('Manchester City')) //Lost Three times
    console.log(classifier.categorize('Liverpool')) //Won Twice Lost Once
    console.log(classifier.categorize('Arsenal')) //Lost Twice
})



