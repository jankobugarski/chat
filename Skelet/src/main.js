import {Message} from './message'
import {Message_list} from './messag_list'
import {Login} from './login'
import {
    getAllToDo,
    addToDo,
    getToDo
} from "./utilitis"

 export class Main{
    constructor(){

        let login_forma = new Login()
        console.log(login_forma)
        let message_lista = new Message_list

        this.node = document.createElement('div')
        this.node.appendChild(login_forma.getNode())
        this.node.appendChild(message_lista.getNode())

        getAllToDo().then(data=>{

            let a=data.data;
            a.forEach(element => {
                let poruka1=new Message(element)
                console.log(poruka1)
                message_lista.Inner(poruka1)


                
                
            });




        })
login_forma.addBtn(()=>{
    console.log('nest')
    let username=login_forma.input1.value;
    let title=login_forma.input2.value;
    getToDo(username,title).then(data=>{
        
        console.log(data)
    
    
    
    })


    
})
        


    }
    getNode(){
       return this.node }
    
}
    

        


        