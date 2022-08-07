module.exports = function check(str, bracketsConfig) {
    let openBrakets = [];
    let pairsBracets = {};

    for (let i = 0; i < bracketsConfig.length; i++){
      let key  = bracketsConfig[i][1];
      let value = bracketsConfig[i][0];
      openBrakets.push(value);
      pairsBracets[key] = value; 
    }

    console.log(pairsBracets);

    let stack = [];

 for (let i = 0; i < str.length; i++){

   let currentSymbol = str[i];
   let top = stack[stack.length - 1];

   if (pairsBracets[currentSymbol] === top && stack.length > 0) {
    stack.pop();
   } else {
    if (openBrakets.includes(currentSymbol)) {
      stack.push(currentSymbol);
    }

    if (stack.length === 0){
      return false;
    }
   }
 }

  return stack.length === 0;
};