function validParenthesis(s){
   let obj= ["{}","[]","()"];
   let stack=[];
   
   if(s=='[' || s=='{' || s=='('){
    stack.push(s);
   } 
   else if(s==']'|| s=='}' || s==')'){
    stack.pop(s);
   }
}
if(stack.length===0){
   return true;
}
else{
    return false;
}
console.log(validParenthesis("{}"));