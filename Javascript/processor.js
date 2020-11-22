angular.module('processorApp', [])
  .controller('ProcessorController', function() {
    var processor = this;
   
    processor.sendText = function() {
      
        let a = 6;
        processor.text = eval(processor.text) * a;
    };
  });