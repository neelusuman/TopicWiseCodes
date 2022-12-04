
class Stack{
    constructor(){
        this.data =[];
        this.top =-1;

    }
    push(value){
     this.top++;
     this.data[this.top]=value;

    }
    pop(){
     if(this.isEmpty()){
       throw new Error('Underflow stack')
     }
     this.data.pop();
     this.top--;
    }
    peak(){
        if(this.isEmpty()){
        return null;
}
return this.data[this.top];

    }
    
    print(){
   let top = this.top;
   while(top>-1){
    console.log(this.data[top]);
    top =top-1;
   }
    }
    isEmpty(){
 return  this.top === -1;
    }
    insertAtBottom(value){
        if(this.isEmpty()){
            this.push(value);
            return;
        }
        else{
            let temp= this.peak();
            this.pop();
            this.insertAtBottom(value);
            this.push(temp);
        }
        }
}
let stack =new Stack()
stack.push(4)
stack.push(5);
stack.push(3);
//stack.pop();

stack.print();
stack.insertAtBottom(0);
stack.print();


function sortStack(s){
    if(!isEmpty()){
        let temp = s.peak();
        s.pop();
        sortStack(s);
        sortInsert(s,x);

    }
    return;
}
function sortInsert(s,x){
    if(s.isEmpty() || s.peak()<temp){
        s.push(x);
        return;
    }
    else{
        let temp= s.peak();
        s.pop();
        sortInsert(s,x);
        s.push(temp);
        return;
    }
}
 