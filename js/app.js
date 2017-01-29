var varsList = ['x', 'y', 'z'];

function setAmountOfVars() {
  var amountOfVars = parseInt($('#amountOfVars').val());
  for(var i = 0; i < amountOfVars; i++) {
    var input = '<label>' + varsList[i] + '</label><input type="text" name="amount"/>'
    $(".container").append(input + '<br>');
  }
}
