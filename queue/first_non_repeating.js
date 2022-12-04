function find(string){
    
    let freq= {'a':0};
    let str= string.split("");
    if(str.length==0){
        return null;
    }
    for(let elem of str ){
        if(!freq[elem]){
          freq[elem]= 0;
        }
        freq[elem]++;
        
    }
    for(let elem of str){
        if(freq[elem]===1){
            return elem;
        }
    }
    return -1;

}
console.log(find("abacacbd"));