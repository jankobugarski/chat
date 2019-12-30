export class Message_list{
    constructor(){

        this.node=document.createElement('div')
    }
    Inner(message){
        return this.node.appendChild(message.getNode())
    }
    clear_list(){
        return this.node.innerHTML=""
    }
    getNode(){
        return this.node
    }

}