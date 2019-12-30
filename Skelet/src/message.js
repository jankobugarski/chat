export class Message{

    constructor(data){
        this.data=data;
        this.username=data.username
        this.message=data.message;
        this.p1=document.createElement('p')
        this.p2=document.createElement('p')
        this.p1.innerHTML=this.username;
        this.p2.innerHTML=this.message;
        this.node=document.createElement('div')
        this.node.appendChild(this.p1)
        this.node.appendChild(this.p2)
    }
    getNode(){
        return this.node
    }
}
