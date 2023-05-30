// const form=document.querySelector(".form");
// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     const username=document.getElementById("username").value;
//     const number=document.getElementById("number").value;
//     const table=document.querySelector("#table");
//     const tr=document.createElement("tr");
//     tr.innerHTML=`<td>${username}</td><td>${number}</td>`;
//     table.appendChild(tr)
//     document.getElementById("username").value="";
//     document.getElementById("number").value="";
// })
class Form{
    constructor(formSelector,userNameSelector,numberSelector,tableSelector){
        this.form=document.querySelector(formSelector);
        this.usernameInput=document.getElementById(userNameSelector);
        this.numberInput=document.getElementById(numberSelector);
        this.table=document.querySelector(tableSelector);
        this.form.addEventListener("submit",this.handleSubmitEvent.bind(this))
    };
    handleSubmitEvent(event){
        event.preventDefault();
        const username=this.usernameInput.value;
        const number=this.numberInput.value;
        this.addTableRow(username,number);
        this.clearInput();
    }
    addTableRow(username,number){
        const tr=document.createElement("tr");
        tr.innerHTML=`<td>${username}</td><td>${number}</td>`;
        this.table.appendChild(tr)
    }
    clearInput(){
        this.usernameInput.value="";
        this.numberInput.value="";
    }
}
const form=new Form(".form","username","number","#table")