var removeDuplicates = function(s) {
    if(s.length==1){
        return s;
    }
    let stack =[];
 for(char of s){
     if(stack.length>0 && stack[stack.length-1]==char){
         stack.pop();
     }else stack.push(char);
 }
    return stack.join("");
};