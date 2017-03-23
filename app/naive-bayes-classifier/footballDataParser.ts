var csv = require('csv-parser')
var fs = require('fs')
import FootballResult from "./footballResult";

export default class FootballDataParser {

    getData(): Promise<Array<FootballResult>> {
        return this.readFile("app/naive-bayes-classifier/2014-15Data.csv");
    }

    private readFile(fileName: String): Promise<Array<FootballResult>> {
        let footballResults: Array<FootballResult> = [];
        return new Promise((resolve, reject) => {
            fs.createReadStream(fileName)
                .pipe(csv())
                .on('data', function (data) {
                    if (data.HOME === "Swansea" && data.RESULT !== "D") {
                        let result = data.RESULT === "H" ? "Win" : "Lose";
                        footballResults.push(new FootballResult(data.AWAY, result))
                    } else if (data.AWAY === "Swansea" && data.RESULT !== "D") {
                        let result = data.RESULT === "A" ? "Win" : "Lose";
                        footballResults.push(new FootballResult(data.HOME, result))
                    }
                });
                .on("end", () => {
                    resolve(footballResults);
                });
        });
    }
}