function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
  
  expr = expr.replace(/\s+/g,'');  

  let openCounter = 0;
  let closeCounter = 0;
  let oper = ['*','/','-','+','(',')'];
  let arr = [];
  let value = '';
  for(let s of expr){
    if(!oper.includes(s)) {
      value+=s;
    }
    else 
    {
      if (value.length>0) arr.push(parseFloat(value));
      value ='';
      arr.push(s);
      if (s=='(') openCounter++;
      if (s==')') closeCounter++;
    }
  }
  arr.push(parseFloat(value)); 

  if (openCounter!=closeCounter) throw "ExpressionError: Brackets must be paired";

  let open = arr.lastIndexOf('(');
  while(open>=0){
    let close = open + arr.slice(open+1).indexOf(')') +1;
    if (close>0) {
      arr.splice(open, close-open+1, calculate(arr.slice(open+1, close)));
    }
    open = arr.lastIndexOf('(');
  }  
  return calculate(arr);
}

function calculate (arr)
{
let oper = ['/','*','-','+'];  
for (let o of oper){  
  let ind = arr.indexOf(o);
  let res = 0;
  while(ind >=0)
  {    
    switch (o)
    {
      case '*':
        res = arr[ind-1] * arr[ind+1];        
      break;
      case '/':
        if (arr[ind+1]==0) throw "TypeError: Division by zero.";
        res = arr[ind-1] / arr[ind+1];        
      break;
      case '-':
        res = arr[ind-1] - arr[ind+1];        
      break;
      case '+':
        res = arr[ind-1] + arr[ind+1];        
      break;
    }
    arr.splice(ind-1,3,res);    
    ind = arr.indexOf(o);
  }  
}
return arr[0];
}

module.exports = {
    expressionCalculator
}

