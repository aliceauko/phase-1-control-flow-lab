function scuberGreetingForFeet(distance){
  // Write your code here!
  let reply;
  if(distance<= 400){
    reply ='This one is on me!'
  } else if (distance > 2500) {
    reply = 'No can do.'
  } else {
    reply =  'I will gladly take your thirty bucks.'
  }
   return reply

  
}

function ternaryCheckCity(city){
  // Write your code here!
  let response;
  return response = (city === 'NYC') ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let response;
  switch (tip) {
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    default:
      response = 'Bye.'
  }
  return response;
}