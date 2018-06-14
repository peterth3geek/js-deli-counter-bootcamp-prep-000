var katzDeliLine = [];
var katzDeli = [];
var otherDeli = [];
var ticket = 0;

function takeANumber (katzDeliLine, ticket){
  katzDeliLine.push(ticket += 1)

  return 'You are number ' + ticket + '.'
}

function nowServing(deli){
if (deli.length === 0){
  return 'There is nobody waiting to be served!'}
else {
  return 'Currently serving ' + deli.shift() + '.'
}
}

function currentLine(deli){
if (deli.length === 0){
  return 'The line is currently empty.'}
  else {
      return 'The line is currently: 1. ' + deli[0] + ', 2. ' + deli[1] + ', 3. ' + deli[2]
  }
}
