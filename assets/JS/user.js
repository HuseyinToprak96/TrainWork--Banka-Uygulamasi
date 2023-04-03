var Nationalities=["Türk","İngiliz","Arap"]
var Users=[]

class User{
    active=true
    constructor(citizenshipNumber,name,surname,password,nationality,administrator,momSurname){
    this.name=name
    this.surname=surname
    this.citizenshipNumber=citizenshipNumber
    this.password=password
    this.nationality=nationality
    this.administrator=administrator,
    this.momSurname=momSurname
    this.accounts=[]
    }
    add(user){
        Users.push(user)
    }
    delete(index){
        Users.splice(index,1)
    }
    find(citizenshipNumber){
        var result=Users.find((u)=>u.citizenshipNumber==citizenshipNumber)
        return result
    }
    update(user){
        var result=this.find(user.citizenshipNumber)
        result.name=user.name
        result.surname=user.surname
        result.password=user.password
        result.nationality=user.nationality
        result.administrator=user.administrator
    }
    newAccount(account){
        var result=this.find(onlineUser.citizenshipNumber)
        result.accounts.push(account)
    }
}

var u=new User(1234,"Hüseyin","Toprak","1234",Nationalities[0],true,"A")
var accTRY=new Account("TRY","Hesap 1",true)
accTRY.balance=1000
u.accounts.push(accTRY)
var accEUR=new Account("TRY","Hesap 2",false)
u.accounts.push(accEUR)
u.add(u)

var u2=new User(4321,"Kaan","Toprak","4321",Nationalities[0],false,"A")
var accTRY2=new Account("TRY","Hesap 1",true)
accTRY2.balance=1000
u2.accounts.push(accTRY2)
var accEUR2=new Account("TRY","Hesap 2",false)
u2.accounts.push(accEUR2)
u2.add(u2)

console.log(Users)

var onlineUser
var failedLogin=0
var intervalSayac
var blockCount=0
function login(){
    languageId=getLanguage()
    var citizenshipNumber=document.getElementById("number").value.trim()
    var password=document.getElementById("password").value.trim()
    if (citizenshipNumber!="" && password!="") {
    var user=Users.find((user)=>user.citizenshipNumber==citizenshipNumber && user.password==password)
    if (user!=null) {
        onlineUser=user
        failedLogin=0
        var body=document.getElementsByTagName("body")[0]
        var homeScript=document.createElement("script")
        homeScript.src="assets/JS/home.js"
        homeScript.id="homeScripts"
        document.getElementById("style").href="assets/CSS/home.css"
        body.appendChild(homeScript)
        body.style.backgroundColor="black"
        body.innerHTML='<div class="spinner-border text-dark text-center" style="margin-top:300px;margin-left:45%;font-size:450px"></div>'
        setTimeout(goHome,1000)
    }
    else{
        errorLogin(languageContents.find(x=>x.page=="login"&&x.name=="RemainingEntry" &&x.languageId==languageId).value+(2-failedLogin))
        if (failedLogin>=2) {
        blockCount++
        if(blockCount<2){
        disabledLoginForm(true)
        intervalSayac=setInterval(sayac,1000)
        }
        else{
            disabledLoginForm(true)
            errorLogin(languageContents.find(x=>x.page=="login"&&x.name=="DetectedMessage" &&x.languageId==languageId).value)
        }
        }
        else{
        failedLogin+=1
        }
}
}
}
function goHome(){
    successLogin()
}
//Error Login
var minute=1
var second=0
function sayac(){
    if (minute>0 && second==0) {
        second=59
        minute--
    }
    else if(second>0){
        second--
    }
    else{
        clearInterval(intervalSayac)
        minute=1
        second=0
        failedLogin=0
        disabledLoginForm(false)
        return;
    }
    var str=second>9?second:"0"+second
    errorLogin(languageContents.find(x=>x.page=="login"&&x.name=="remainingTime" &&x.languageId==languageId).value+" :0"+minute+":"+str)
}


//General Func
function disabledLoginForm(status){
document.getElementById("number").disabled=status
document.getElementById("password").disabled=status
document.getElementById("btnLogin").disabled=status
}

function errorLogin(message){
    var error=document.getElementById("errorLogin")
    if (error!=null) {
    error.className="alert alert-warning mt-4"
    error.style.display="block"
    error.innerText=message
    }
    
}

//Pages
window.onload=function(){
    getLogin()
   
}

function getLogin(){
    step=0
    var body=document.getElementsByTagName("body")[0]
    body.innerHTML=""
    body.appendChild(loginPage())
}

function loginPage(){
    forgotErrorCount=0
    const main=document.createElement("main")
    const nav=document.createElement("nav")
    nav.appendChild(navComponentLog())
    const header=document.createElement("header")
    const section=document.createElement("section")
    section.appendChild(loginForm())
    var newMain=appendObjects(main,nav,header,section)
    return newMain
    }

function navComponentLog(){
    languageId=getLanguage()
    var select=createObject("select","form-control","language","")
    select.setAttribute("onchange","changeLanguage()")
    languages.forEach((lang)=>{
        var opt=document.createElement("option")
        opt.innerText=languageContents.find(x=>x.page=="general"&&x.name==lang.name &&x.languageId==languageId).value,
        opt.value=lang.id
        if (languageId==lang.id) {
            opt.selected=true
        }
        select.appendChild(opt)
    })
    return select

}



function loginForm(){
    var title=document.getElementsByTagName("title")[0]
    title.innerText=languageContents.find(x=>x.page=="login"&&x.name=="pageName" &&x.languageId==languageId).value
    languageId=getLanguage()
    var dContainer=createObject("div","container","","")
    var dRow1=createObject("div","row justify-content-center","","")
    var dCol6=createObject("div","col-6","","")
    var dFieldset=createObject("fieldset","","Field","")
    var dLegend=createObject("legend","","",languageContents.find(x=>x.page=="login"&&x.name=="pageName" &&x.languageId==languageId).value)
    var dForm=createObject("form","","","")
    dForm.setAttribute("onsubmit","return false")
    var dLabelCNumber=createObject("label","","",languageContents.find(x=>x.page=="login"&&x.name=="loginLabel1Text" &&x.languageId==languageId).value)
    dLabelCNumber.for="number"
    var dNumberInput=createInput("number","form-control","number",languageContents.find(x=>x.page=="login"&&x.name=="loginInput1Placeholder" &&x.languageId==languageId).value)    
    var br=document.createElement("br")
    var dLabelPassword=createObject("label","","",languageContents.find(x=>x.page=="login"&&x.name=="loginLabel2Text" &&x.languageId==languageId).value)
    dLabelPassword.for="password"
    var dPasswordInput=createInput("password","form-control","password",languageContents.find(x=>x.page=="login"&&x.name=="loginInput2Placeholder" &&x.languageId==languageId).value)
    var br2=document.createElement("br")
    var btnLogin=createInput("submit","btn btn-dark","btnLogin","")
    btnLogin.value=languageContents.find(x=>x.page=="login"&&x.name=="loginButton" &&x.languageId==languageId).value
    btnLogin.setAttribute("onclick","login()")
    var aForgot=document.createElement("a")
    aForgot.href="javascript:void(0)"
    aForgot.innerText=languageContents.find(x=>x.page=="login"&&x.name=="forgotButton" &&x.languageId==languageId).value
    aForgot.className="btn btn-light m-2"
    aForgot.setAttribute("onclick","forgotPasswordPage()")
    var alert=createObject("div","","","")
    alert.style.display="none"
    alert.id="errorLogin"
    var newForm=appendObjects(dForm,dLabelCNumber,dNumberInput,br,dLabelPassword,dPasswordInput,br2,btnLogin,aForgot)
    var newFieldSet=appendObjects(dFieldset,dLegend,newForm,alert)
    dCol6.appendChild(newFieldSet)
    dRow1.appendChild(dCol6)
    dContainer.appendChild(dRow1)
    return dContainer
}

function forgotPasswordPage(){
    if(intervalSayac!=null)
    clearInterval(intervalSayac)
    var title=document.getElementsByTagName("title")[0]
    title.innerText=languageContents.find(x=>x.page=="forgotPage"&&x.name=="pageName" &&x.languageId==languageId).value
    minute=1
    second=0
    var section=document.getElementsByTagName("section")[0]
    section.innerHTML=""
    var dContainer=createObject("div","container","","")
    var dRow1=createObject("div","row justify-content-center","","")
    var dCol6=createObject("div","col-6","","")
    var dFieldset=createObject("fieldset","","Field","")
    var dLegend=createObject("legend","","",languageContents.find(x=>x.page=="forgotPage"&&x.name=="pageName" &&x.languageId==languageId).value)
    var dForm=createObject("form","","","")
    dForm.setAttribute("onsubmit","return false")
    var dLabelCNumber=createObject("label","","",languageContents.find(x=>x.page=="forgotPage"&&x.name=="citiziedLabelText" &&x.languageId==languageId).value)
    dLabelCNumber.for="number"
    var dNumberInput=createInput("number","form-control","citizenship",languageContents.find(x=>x.page=="forgotPage"&&x.name=="citiziedPlaceholder" &&x.languageId==languageId).value)    
    var br=document.createElement("br")
    var dAsk=createObject("div","","askMomSurname","")
    var inputSubmit=createInput("submit","btn btn-dark mt-2","","")
    inputSubmit.value=languageContents.find(x=>x.page=="forgotPage"&&x.name=="continueBtn" &&x.languageId==languageId).value
    inputSubmit.setAttribute("onclick","askMomSurnameFunc()")
    var aComeBack=document.createElement("a")
    aComeBack.href="javascript:void(0)"
    aComeBack.className="btn btn-light mt-2"
    aComeBack.innerText=languageContents.find(x=>x.page=="forgotPage"&&x.name=="comeBackBtn" &&x.languageId==languageId).value
    aComeBack.setAttribute("onclick","getLogin()")
    var newForm=appendObjects(dForm,dLabelCNumber,dNumberInput,br,dAsk,inputSubmit,aComeBack)
    var errorDiv=createObject("div","","forgotError","")
    errorDiv.style.display="none"
    var newField=appendObjects(dFieldset,dLegend,newForm,errorDiv)
    dCol6.appendChild(newField)
    dRow1.appendChild(dCol6)
    dContainer.appendChild(dRow1)
    section.appendChild(dContainer)
}

var step=0
var userForgot
var forgotErrorCount=0
function askMomSurnameFunc(){
    var dDivMomSurname=document.getElementById("askMomSurname")
    var citizied=document.getElementById("citizenship")
    if (step==0) {
    userForgot=Users.find((user)=>user.citizenshipNumber==citizied.value)
    if (userForgot!=null) {
    dDivMomSurname.innerHTML=""
    var askMomSurnameLabel=createObject("label","","",languageContents.find(x=>x.page=="forgotPage"&&x.name=="labelMomSurname" &&x.languageId==languageId).value)
    askMomSurnameLabel.for="momSurname"
    var askMomSurnameInput=createInput("text","form-control","momSurname",languageContents.find(x=>x.page=="forgotPage"&&x.name=="momSurnamePlaceholder" &&x.languageId==languageId).value)    
    appendObjects(dDivMomSurname,askMomSurnameLabel,askMomSurnameInput)
    step++
    citizied.disabled=true
    forgotErrorCount=0
    }
    else{
        forgotErrorCount++
        if (forgotErrorCount>=3) {
            citizied.disabled=true
            alertForgotError(languageContents.find(x=>x.page=="forgotPage"&&x.name=="errorMaxError" &&x.languageId==languageId).value,"alert alert-warning mt-2")
        }
    }
    }
    else if (step==1) {
    const surnameM=document.getElementById("momSurname")
    if (userForgot.momSurname==surnameM.value) {
    alertForgotError(languageContents.find(x=>x.page=="forgotPage"&&x.name=="password" &&x.languageId==languageId).value+userForgot.password,"alert alert-success mt-2")
    userForgot=null
    step=0
    setTimeout(goLogin,5000)
    }
    else{
    forgotErrorCount++
    if (forgotErrorCount>=3) {
        surnameM.disabled=true
        alertForgotError(languageContents.find(x=>x.page=="forgotPage"&&x.name=="errorMaxError" &&x.languageId==languageId).value,"alert alert-warning mt-2")
    }
    }    
    }
}

function alertForgotError(message,className){
    var alert=document.getElementById("forgotError")
    alert.className=className
    alert.style.display="block"
    alert.innerText=message
}

function goLogin(){
    getLogin()
}
function fullContainer(){
    var d=loginPage()
    return d
}