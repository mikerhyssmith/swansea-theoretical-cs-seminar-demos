var synaptic = require('synaptic');
var Architect = synaptic.Architect;
var Trainer = synaptic.Trainer;


// Setup a perceptron with 2 inputs a single hidden layer of 3 nodes and an output of 1
var xOrPerceptron = new Architect.Perceptron(2,3,1);



//Train the neural network
var trainingSet = [
  {
    input: [0,0],
    output: [0]
  },
  {
    input:  [0,1],
    output: [1]
  },
  {
    input:  [1,0],
    output: [1]
  },
  {
      input: [1,1],
      output: [0]
  }
]


var trainingOptions = {
  rate: .1,
  iterations: 200000,
  error: .005,
  log:true
}

// Show the result of the training
console.log(xOrPerceptron.trainer.train(trainingSet, trainingOptions));


//Test the neural Network
console.log(xOrPerceptron.activate([0,0]));
console.log(xOrPerceptron.activate([1,0]));
console.log(xOrPerceptron.activate([0,1]));
console.log(xOrPerceptron.activate([1,1]));