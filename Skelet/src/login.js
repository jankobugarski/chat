export class Login{

    constructor(){

        this.input1=document.createElement('input')
        this.input1.type='text'
        this.input2=document.createElement('input')
        this.input2.type='text'
        this.dugme=document.createElement('input')
        this.dugme.type='submit'
        this.node=document.createElement('div')
    
        this.node.appendChild(this.input1)
        this.node.appendChild(this.input2)
        this.node.appendChild(this.dugme)
        
    }
    addBtn(click_btn){
      return  this.dugme.addEventListener('click',click_btn)
    }
    getNode(){
        return this.node
    }
    
    
}