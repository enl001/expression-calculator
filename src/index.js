function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let operations = [];
    let values = [];
    expr = expr.replace(/' '/g,'');
    for(let e of expr){
        switch (e) {

        }
    }

}

module.exports = {
    expressionCalculator
}

function expressionCalculator(expr) {
    let operations = [];
    let values = [];
    console.log(expr);
    let exprToCalc = expr.replace(/\s+/g,'');


    console.log(exprToCalc);
    let value = '';
    for(let e of exprToCalc){
      
        switch (e) {          
          case ')':
            if (value.length>0) {
              values.push(parseFloat(value));
              value = '';
            }           
            values.push(calculate(operations, values));            
          break;
          case '(':            
            //value = '';            
          break;
          case '+':
            operations.push(e);
            if (value.length>0) {
              values.push(parseFloat(value));
              value = '';
            }
          break;
          case '-':
            operations.push(e);
            if (value.length>0) {
              values.push(parseFloat(value));
              value = '';
            }
          break;
          case '/':
            operations.push(e);
            if (value.length>0) {
              values.push(parseFloat(value));
              value = '';
            }
          break;
          case '*':
            operations.push(e);
            if (value.length>0) {
              values.push(parseFloat(value));
              value = '';
            }
          break;
          default:
            value+=e;
          break
        }       
    }
    return values.pop();
}

function calculate(operations,values){  
  let value = parseFloat(values.pop());
  switch (operations.pop()){
    case '+':
      value = parseFloat(values.pop()) + value;
    break;
    case '-':
      value = parseFloat(values.pop()) - value;
    break;
    case '/':
      value = parseFloat(values.pop()) / value;
    break;
    case '*':
      value = parseFloat(values.pop()) * value;
    break;    
  }  
  return value;
}
console.log(expressionCalculator("   100 - 60 / 38)) +   19 / 88) * 97) / 82 )/ 94  ) * 92 )) "));