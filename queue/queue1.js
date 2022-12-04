class Queue{
    constructor(){
        this.data =[];
        this.front =0;
        this.rear =0;

    }
  enqueue(value){
    this.data[this.rear]=value;
    this.rear++;
  }
  dequeue(){
    this.data[this.front]=null;
    this.front++;
  }
  isEmpty(){
    return this.front==this.rear;
  }
  print(){
    for(let i=0; i<this.data.length; i++){
        if(this.data[i]){
            console.log('queue element=>',this.data[i])
        }
    }
  }
  peak(){
    if(!isEmpty){
        return this.data[this.front];
    }
  }
}

let q= new Queue();
q.enqueue(4);
q.enqueue(7);
q.print();
//console.log(q);

