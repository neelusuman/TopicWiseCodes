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

    }
    peak(){

    }
    print(){
   let top = this.top;
   while(top>-1){
    console.log(this.data[top]);
    top =top-1;
   }
    }
    isempty(){

    }
}
let stack =new Stack()
stack.push(4)
stack.push(5);
stack.push(3);
stack.print()