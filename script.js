let firstName =document.getElementById("validationServer01")
let lastName =document.getElementById("validationServer02")
let Username =document.getElementById("validationServerUsername")
let City =document.getElementById("validationServer03")
let State =document.getElementById("validationServer04")
let Zip =document.getElementById("validationServer05")
let checkBox =document.getElementById("invalidCheck3")
let logIN =document.getElementById("LOGIN")





localData=[]
function save(){
    let dataUser ={
        firstName:firstName.value,
        lastName:lastName.value,
        Username:Username.value,
        City:City.value,
        State:State.value,
        Zip:Zip.value,
        checkBox:checkBox.value
    }
    
    localData.push(dataUser)
    localStorage.setItem("data user",JSON.stringify(localData))

}
