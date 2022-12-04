class QueueUsingStack{
    constructor(){
        this.s1=[];
        this.s2=[];
    }

    enqueue(value){
        while(this.s1.length!==0){
            this.s2.push(this.s1.pop());
        }
        this.s1.push(value);
        while(this.s2.length!==0){
            this.s1.push(this.s2.pop());
        }
    }

    dequeue(value){
        return this.s1.pop();
    }
}
let q= new  QueueUsingStack();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
console.log(q.dequeue());
