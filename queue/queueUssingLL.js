class Qnode{
    constructor(key){
        this.key=key;
        this.next=null;
    }
}
let front=null;
let rear=null;

function enqueue(key){
    let temp= new Qnode(key);
    if(rear==null){
        front=rear=temp;
        return;
    }
    rear.next=temp;
    rear=temp;
}
function dequeue(){
    if(front==null){
        return;
    }
    let temp= front;
    temp= null;
    front= front.next;
}

enqueue(110);
document.write("Queue Front : " + front.key + "<br>");
