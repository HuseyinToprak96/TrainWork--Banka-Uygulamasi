
function successLogin(){
var title=document.getElementsByTagName("title")[0]
title.innerText=languageContents.find(x=>x.page=="account"&&x.name=="AccountMoneyTransferHead" &&x.languageId==languageId).value
var body=document.getElementsByTagName("body")[0]
body.innerHTML=""
body.appendChild(homePage())
var acc=onlineUser.accounts.find((account)=>account.isMain==true)
articleContainer(acc)
}

function homePage(){
    var main=document.createElement("main")
    var nav=document.createElement("nav")
    nav.appendChild(navLogo())
    nav.appendChild(navComponent())
    var header=document.createElement("header")
    header.appendChild(headerSlider())
    var section=document.createElement("section")
    var asideLeft=document.createElement("aside")
    asideLeft.appendChild(leftMenu())
    var article=document.createElement("article")
    var asideRight=document.createElement("aside")
    asideRight.className="aside-right"
    asideRight.appendChild(rightSlider())
    var footer=document.createElement("footer")
    var newSection=appendObjects(section,asideLeft,article,asideRight)
    var newMain= appendObjects(main,nav,header,newSection,footer)
    return newMain
}
function navLogo(){
    var divNavLogo=createObject("div","nav-logo","","")
    var img=document.createElement("img")
    img.src="assets/Images/kuveyt-turk.png"
    divNavLogo.appendChild(img)
    return divNavLogo
}
function navComponent(){
var divNavContent=createObject("div","nav-links","","")
navProperties.forEach((navItem)=>{
var btn=createObject("button","nav-link","",languageContents.find(x=>x.page=="nav-component"&&x.name==navItem.name &&x.languageId==languageId).value)
btn.addEventListener("click",function(){
window.open(navItem.link,"_blank")
})

divNavContent.appendChild(btn)
})
return divNavContent
}

function headerSlider(){
    var img=document.createElement("img")
    img.src="assets/Images/sl1.jpg"
    return img
}

function leftMenu(){
    var leftDiv=document.createElement("div")
    leftDiv.className="left-container"
    var menu
    if (onlineUser.administrator)
        menu=leftMenuLink
    else
    menu=leftMenuLink.filter(x=>x.isAdmin==false)
    menu.forEach((link)=>{
        var button=document.createElement("button")
        button.innerText=languageContents.find(x=>x.page=="leftMenu"&&x.name==link.name &&x.languageId==languageId).value
        button.className="left-link"
        if(link.name=="link3")
        button.style.backgroundColor="red"
        button.addEventListener("click",function(){
            var btns=document.getElementsByClassName("left-link")
            for (let index = 0; index <btns.length; index++) {
                btns[index].style.backgroundColor="#b5a978"
            }
            button.style.backgroundColor="red"
            getLeftMenuFunction(link.function)
        })
        leftDiv.appendChild(button)
    })
    return leftDiv
}

var selectedAccountNumber=0

function articleContainer(acc){
selectedAccountNumber=acc.accountNumber
var article=document.getElementsByTagName("article")[0]
article.innerHTML=""
var container=createObject("div","container mt-5 pb-3","cont","")
container.appendChild(document.createElement("br"))

var h=document.createElement("h2")
h.innerText=languageContents.find(x=>x.page=="account"&&x.name=="AccountMoneyTransferHead" &&x.languageId==languageId).value
var row=createObject("div","row justify-content-center","","")
var col=createObject("div","col-10 offset-1","","")
var r=createObject("div","row","","")
var newAccDiv=createObject("div","col-1","","")
var btnNewAcc=createObject("button","","","")
btnNewAcc.style.backgroundColor="transparent"
btnNewAcc.style.border="0"
btnNewAcc.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16"><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/></svg>'
btnNewAcc.addEventListener("click",function(){
newAccountForm()
})
newAccDiv.appendChild(btnNewAcc)
r.appendChild(newAccDiv)
var deleteDiv=createObject("div","col-1 offset-10","","")
var btnDelete=createObject("button","","","")
btnDelete.style.backgroundColor="transparent"
btnDelete.style.border="0"
btnDelete.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" style="color:red" class="bi bi-trash3" viewBox="0 0 16 16"><path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/></svg>'
btnDelete.addEventListener("click",function(){
   if(confirm(languageContents.find(x=>x.page=="general"&&x.name=="areYouSureDelete" &&x.languageId==languageId).value)){
   var u= Users.find(x=>x.citizenshipNumber==onlineUser.citizenshipNumber)
   var ac=u.accounts.find(x=>x.accountNumber==selectedAccountNumber)
   if (u.accounts.filter(f=>f.isDelete==false).length>1) {
   if (Number(ac.balance)==0) {
    var c=u.accounts.find(x=>x.accountNumber==selectedAccountNumber)
    c.isDelete=true
   onlineUser=u
   var newMain
   if (c.isMain) {
   newMain= u.accounts.filter(x=>x.isDelete==false)[0]
   }
   else
   newMain=u.accounts.find(x=>x.isMain==true)
   articleContainer(newMain)
   }
   else{
    alert(languageContents.find(x=>x.page=="general"&&x.name=="errorMessageBalanceZero" &&x.languageId==languageId).value)
   }
}
else{
    alert(languageContents.find(x=>x.page=="general"&&x.name=="errorMessageFirstNewAccount" &&x.languageId==languageId).value)
}
}
})
deleteDiv.appendChild(btnDelete)
r.appendChild(deleteDiv)
var field=document.createElement("fieldset")
var legend=document.createElement("legend")
legend.innerText=languageContents.find(x=>x.page=="account"&&x.name=="AccountNo" &&x.languageId==languageId).value+":"+acc.accountNumber
field.appendChild(legend)
var form=document.createElement("form")
var select=createObject("select","form-control","accountSelect","")
onlineUser.accounts.filter(a=>a.isDelete==false).forEach((account)=>{
var opt=document.createElement("option")
opt.innerText=account.name
opt.value=account.accountNumber
if (account.accountNumber==acc.accountNumber) {
opt.selected=true
}
select.appendChild(opt)
})
select.addEventListener("change",function(){
   var acc= onlineUser.accounts.find(x=>x.accountNumber==select.value)
   articleContainer(acc)
})
form.appendChild(select)
field.appendChild(form)
var row2=createObject("div","row mt-3 h-200px","","")
var col2=createObject("div","col-6 fs-3","","")
var strong=document.createElement("strong")
strong.style.float="right"
strong.innerText=languageContents.find(x=>x.page=="account"&&x.name=="Balance" &&x.languageId==languageId).value+":"
col2.appendChild(strong)
row2.appendChild(col2)
var col3=createObject("div","col-4 fs-3","",acc.balance+" TRY")
row2.appendChild(col3)
var row3=createObject("div","row mt-3","","")
var col4=createObject("div","col-6","","")
col4.style.textAlign="left"
var btnTransfer=createObject("button","btn btn-dark w-100","",languageContents.find(x=>x.page=="account"&&x.name=="btnTransfer" &&x.languageId==languageId).value)
btnTransfer.addEventListener("click",function(){
getTransfers(acc.accountNumber)
})
col4.appendChild(btnTransfer)
row3.appendChild(col4)
//
var col5=createObject("div","col-6","","")
col5.style.textAlign="left"
var btnAcc=createObject("button","btn btn-dark w-100","",languageContents.find(x=>x.page=="account"&&x.name=="btnTransactions" &&x.languageId==languageId).value)
btnAcc.addEventListener("click",function(){
getAccountTransactions(acc.accountNumber)
})
col5.appendChild(btnAcc)
row3.appendChild(col5)
var newCol=appendObjects(r,col,field,row2,row3)
row.appendChild(newCol)
container.appendChild(h)
container.appendChild(row)
var container2=createObject("div","container mt-5 pb-3","cont2","")
article.appendChild(container)
article.appendChild(container2)
}

var rInterval
function rightSlider(){
var img=document.createElement("img")
img.id="rSlide"
img.src="assets/Images/rightSlider2.jpg"
rInterval= setInterval(sliderRightInterval,5000)
return img
}

var slideImages=["assets/Images/rightSlider1.jpg","assets/Images/rightSlider2.jpg"]
var step=0
function sliderRightInterval() {
    var img=document.getElementById("rSlide")
    if (img!=null) {
    if (step==slideImages.length) {
        step=0
    }
    img.src=slideImages[step]
    step++}
}

function getAccountTransactions(accountNumber){
    console.log(AccountTransactions)
var container=document.getElementById("cont2")
container.innerHTML=""
container.style.display="block"
container.appendChild(document.createElement("br"))
var h2=document.createElement("h2")
h2.style.textAlign="center"
h2.style.fontWeight="bold"
h2.innerText=languageContents.find(x=>x.page=="account"&&x.name=="btnTransactions" &&x.languageId==languageId).value
container.appendChild(h2)
var table=document.createElement("table")
table.className="table table-bordered"
var Transactions=AccountTransactions.filter((acc)=>acc.senderAccountNumber==accountNumber || acc.buyerAccountNumber==accountNumber)
var thead=document.createElement("thead")
table.appendChild(thead)
if (Transactions.length>0) {
var trHead=document.createElement("tr")
var thUsername=document.createElement("th")
thUsername.innerText=languageContents.find(x=>x.page=="account"&&x.name=="NameSurname" &&x.languageId==languageId).value
var thAmount=document.createElement("th")
thAmount.innerText=languageContents.find(x=>x.page=="home"&&x.name=="Amount" &&x.languageId==languageId).value
var thStatus=document.createElement("th")
thStatus.innerText=languageContents.find(x=>x.page=="home"&&x.name=="Status" &&x.languageId==languageId).value
var thDate=document.createElement("th")
thDate.innerText=languageContents.find(x=>x.page=="home"&&x.name=="TrDate" &&x.languageId==languageId).value
var thType=document.createElement("th")
thType.innerText="Type"
var newTheadTr=appendObjects(trHead,thUsername,thAmount,thStatus,thDate,thType)
thead.appendChild(newTheadTr)

var tbody=document.createElement("tbody")
Transactions.forEach((accountTransaction)=>{
    var tr=document.createElement("tr")
    tr.style.backgroundColor=accountTransaction.senderAccountNumber==accountNumber?"red":"green"
    tr.style.color="white"
    var tdUserName=document.createElement("td")
    tdUserName.innerText=accountTransaction.senderAccountNumber==accountNumber?getUserNamewithAccountNumber(accountTransaction.buyerAccountNumber):getUserNamewithAccountNumber(accountTransaction.senderAccountNumber)
    var tdAmount=document.createElement("td")
    tdAmount.innerText=accountTransaction.amount+" TRY"
    var tdStatus=document.createElement("td")
    tdStatus.innerText=accountTransaction.senderAccountNumber==accountNumber?languageContents.find(x=>x.page=="home"&&x.name=="Status1" &&x.languageId==languageId).value:languageContents.find(x=>x.page=="home"&&x.name=="Status2" &&x.languageId==languageId).value
    var tdDate=document.createElement("td")
    tdDate.innerText=accountTransaction.date
    var tdType=document.createElement("td")
    //debugger
    tdType.innerText=languageContents.find(x=>x.page=="account"&&x.name=="TransactionType"+accountTransaction.transactionType && x.languageId==languageId).value 
    var newTr=appendObjects(tr,tdUserName,tdAmount,tdStatus,tdDate,tdType)
    tbody.appendChild(newTr)
   
})
table.appendChild(tbody)}
else{
    var trError=document.createElement("tr")
    var tdErr=document.createElement("td")
    tdErr.colSpan=4
    tdErr.innerText=languageContents.find(x=>x.page=="home"&&x.name=="errDataNotFound" &&x.languageId==languageId).value
    trError.appendChild(tdErr)
    thead.appendChild(trError)
}

container.appendChild(table)
}

function getTransfers(accountNumber){
var container=document.getElementById("cont2")
container.innerHTML=""
container.style.display="block"
container.appendChild(document.createElement("br"))
var h2=createObject("h2","","",languageContents.find(x=>x.page=="account"&&x.name=="btnTransfer" &&x.languageId==languageId).value)
h2.style.textAlign="center"
h2.style.fontWeight="bold"
container.appendChild(h2)
var form=document.createElement("form")
form.setAttribute("onsubmit","return false")
var labelAccountNo=createObject("label","","",languageContents.find(x=>x.page=="account"&&x.name=="AccountNo" &&x.languageId==languageId).value)
labelAccountNo.for="accountNumber"
var inputAccountNo=createInput("text","form-control","accountNumber",languageContents.find(x=>x.page=="home"&&x.name=="EnterAccountNo" &&x.languageId==languageId).value)
form.appendChild(labelAccountNo)
form.appendChild(inputAccountNo)
form.appendChild(document.createElement("br"))
var labelAmount=createObject("label","","",languageContents.find(x=>x.page=="home"&&x.name=="Amount" &&x.languageId==languageId).value)
labelAmount.for="amount"
var inputAmount=createInput("number","form-control","amount",languageContents.find(x=>x.page=="home"&&x.name=="EnterAmount" &&x.languageId==languageId).value)
var button=createObject("button","btn btn-dark w-25","",languageContents.find(x=>x.page=="general"&&x.name=="BtnSend" &&x.languageId==languageId).value)
button.addEventListener("click",function(){
var accountBalance=onlineUser.accounts.find(x=>x.accountNumber==accountNumber).balance
if (Number(accountBalance)>=Number(inputAmount.value)) {
var statu=control(inputAccountNo.value)
if(statu){
sendMoney(accountNumber,inputAccountNo.value,inputAmount.value)
}
else{
alert(languageContents.find(x=>x.page=="account"&&x.name=="AccountNumberNotFound" &&x.languageId==languageId).value)
}
}
else{
    alert(languageContents.find(x=>x.page=="account"&&x.name=="ErrAccountBalance" &&x.languageId==languageId).value)
}
})
form.appendChild(labelAmount)
form.appendChild(inputAmount)
form.appendChild(document.createElement("br"))
form.appendChild(button)
container.appendChild(form)
}

function newAccountForm(){
    var container=document.getElementById("cont2")
    container.innerHTML=""
    container.style.display="block"
    var form=document.createElement("form")
    form.setAttribute("onsubmit","return false")
    form.appendChild(document.createElement("br"))
    var labelAccountName=createObject("label","","",languageContents.find(x=>x.page=="account"&&x.name=="AccountName" &&x.languageId==languageId).value)
    labelAccountName.for="accountName"
    var inputAccountName=createInput("text","form-control","accountNumber",languageContents.find(x=>x.page=="account"&&x.name=="EnterAccountName" &&x.languageId==languageId).value)
    form.appendChild(labelAccountName)
    form.appendChild(inputAccountName)
    form.appendChild(document.createElement("br"))
    var labelAccountNo=createObject("label","","",languageContents.find(x=>x.page=="account"&&x.name=="AccountType" &&x.languageId==languageId).value)
    labelAccountNo.for="accountType"
    var selectTypes=createObject("select","form-control","accountType","")
    var opt=document.createElement("option")
    opt.innerText="TRY"
    opt.value="TRY"
    selectTypes.appendChild(opt)
    form.appendChild(labelAccountNo)
    form.appendChild(selectTypes)
    form.appendChild(document.createElement("br"))
    var btnSave=createObject("button","btn btn-dark w-25","",languageContents.find(x=>x.page=="general"&&x.name=="btnSave" &&x.languageId==languageId).value)
    btnSave.addEventListener("click",function(){
        if (inputAccountName.value.trim()!="") {
        var newA=new Account(selectTypes.value,inputAccountName.value,false)
        var user=Users.find(x=>x.citizenshipNumber==onlineUser.citizenshipNumber)
        user.accounts.push(newA)
        onlineUser=user
        articleContainer(user.accounts.find(x=>x.isMain==true))
        }
        else{
            alert(languageContents.find(x=>x.page=="account"&&x.name=="AccountNameRequired" &&x.languageId==languageId).value)
        }
    })
    form.appendChild(btnSave)
    container.appendChild(form)
}

function getUserNamewithAccountNumber(accountNumber){
    var c=""
Users.forEach(x=>{
    x.accounts.forEach(y=>{
        if (y.accountNumber==accountNumber) {
            c=x.name+" "+x.surname
        }
    })
})
return c
}

function sendMoney(sender,buyer,amount){
    var d=new Date().toLocaleString()
var tr=new AccountTransaction(sender,buyer,amount,d,1)
var user=Users.find((us)=>us.citizenshipNumber==onlineUser.citizenshipNumber)
var account=user.accounts.find((acc)=>acc.accountNumber==sender)
Users.forEach(x=>{
    x.accounts.forEach(y=>{
        if (y.accountNumber==buyer) {
            y.balance=Number(y.balance)+Number(amount)
        }
    })
})
account.balance=Number(account.balance)-Number(amount)
AccountTransactions.push(tr)
onlineUser=user
articleContainer(account)
console.log(Users)
}


function getLeftMenuFunction(method){
switch (method) {
    case 1:
        withDraw()
        break;
    case 2:
        getDeposit()
        break
    case 3:
        transfer()
        break
    case 4:
        settings()
        break
    case 5:
        createNewUserForm()
        break
    case 6:
        transactionRecords()
        break
    case 7:
        document.getElementById("style").href="assets/CSS/login.css"
        clearInterval(rInterval)
        onlineUser=""
        getLogin()
    default:
        break;
}
}

function clearCont1(){
var container=document.getElementById("cont")
container.innerHTML=""
var cont2=document.getElementById("cont2")
if (cont2!=null) {
    cont2.remove()
}
return container
}

function withDraw(){
var title=document.getElementsByTagName("title")[0]
title.innerText=languageContents.find(x=>x.page=="account"&&x.name=="WithDrawHead" &&x.languageId==languageId).value
    
var cont=clearCont1()
cont.appendChild(document.createElement("br"))
var h=document.createElement("h2")
h.innerText=languageContents.find(x=>x.page=="account"&&x.name=="WithDrawHead" &&x.languageId==languageId).value
cont.appendChild(h)
cont.appendChild(moneyForm(1))
}


function moneyForm(transaction){
    var form=document.createElement("form")
    form.appendChild(document.createElement("br"))
    form.setAttribute("onsubmit","return false")
    var labelAccounts=createObject("label","","",languageContents.find(x=>x.page=="account"&&x.name=="AccountName" &&x.languageId==languageId).value)
    labelAccounts.for="account"
    var accountsSelect=createObject("select","form-control","account","")
    var user=Users.find(x=>x.citizenshipNumber==onlineUser.citizenshipNumber)
    user.accounts.filter(a=>a.isDelete==false).forEach(x=>{
        var opt=document.createElement("option")
        opt.value=x.accountNumber
        opt.innerText=`${x.name} (${x.balance} TRY)`
        accountsSelect.appendChild(opt)
    })
    var newForm=appendObjects(form,labelAccounts,accountsSelect)
    newForm.appendChild(document.createElement("br"))
    var labelAmount=createObject("label","","",languageContents.find(x=>x.page=="home"&&x.name=="Amount" &&x.languageId==languageId).value)
    labelAmount.for="amount"
    var inputAmount=createInput("number","form-control","amount",languageContents.find(x=>x.page=="home"&&x.name=="EnterAmount" &&x.languageId==languageId).value)
    var nForm=appendObjects(newForm,labelAmount,inputAmount)
    nForm.appendChild(document.createElement("br"))
    var btnText=transaction==1?languageContents.find(x=>x.page=="leftMenu"&&x.name=="link1" &&x.languageId==languageId).value:languageContents.find(x=>x.page=="leftMenu"&&x.name=="link2" &&x.languageId==languageId).value
    var btn2=createObject("button","btn btn-dark w-25","",btnText)
    btn2.addEventListener("click",function(){
        if (Number(inputAmount.value)>0) {
        switch (transaction) {
            case 1://Para Çekme
                var acc=user.accounts.find(x=>x.accountNumber==accountsSelect.value)
                if (Number(acc.balance)>=Number(inputAmount.value)) {
                acc.balance=Number(acc.balance)-Number(inputAmount.value)
                var d=new Date().toLocaleString()
                var t=new AccountTransaction(accountsSelect.value,"",inputAmount.value,d,2)
                AccountTransactions.push(t)
                withDraw()
                }else{
                    alert(languageContents.find(x=>x.page=="money"&&x.name=="err1" &&x.languageId==languageId).value.replace("{0}",acc.balance))
                }
                break;
            case 2://Para Yükle
                var acc=user.accounts.find(x=>x.accountNumber==accountsSelect.value)
                acc.balance=Number(acc.balance)+Number(inputAmount.value)
                var d=new Date().toLocaleString()
                var t=new AccountTransaction("",accountsSelect.value,inputAmount.value,d,3)
                AccountTransactions.push(t)
                getDeposit()
                break
            default:
                break;
        }
        onlineUser=user
    }
    else{
        alert(languageContents.find(x=>x.page=="money"&&x.name=="err2" &&x.languageId==languageId).value.replace("{0}","0"))
    }
    })
    nForm.appendChild(btn2)
    return nForm
}

function getDeposit(){
    var cont=clearCont1()
    var title=document.getElementsByTagName("title")[0]
    title.innerText=languageContents.find(x=>x.page=="account"&&x.name=="DepositHead" &&x.languageId==languageId).value
    cont.appendChild(document.createElement("br"))
    var h=document.createElement("h2")
    h.innerText=languageContents.find(x=>x.page=="account"&&x.name=="DepositHead" &&x.languageId==languageId).value
    cont.appendChild(h)
    cont.appendChild(moneyForm(2))
}

function transfer(){
    successLogin()
}

function settings(){
    var cont=clearCont1()
    var title=document.getElementsByTagName("title")[0]
    title.innerText=languageContents.find(x=>x.page=="general"&&x.name=="SettingTitle" &&x.languageId==languageId).value
    cont.appendChild(document.createElement("br"))
    var h=document.createElement("h2")
    h.innerText=languageContents.find(x=>x.page=="general"&&x.name=="SettingTitle" &&x.languageId==languageId).value
    cont.appendChild(h)
    var u=Users.find(x=>x.citizenshipNumber==onlineUser.citizenshipNumber)
    cont.appendChild(document.createElement("hr"))
    var hUserTitle=createObject("button","btn btn-light w-100 fs-3","",languageContents.find(x=>x.page=="settings"&&x.name=="UserInfoTitle" &&x.languageId==languageId).value)
    hUserTitle.addEventListener("click",function(){
    var frm=document.getElementById("userInfoForm")
    if (frm.style.display=="block") {
        frm.style.display="none"
    }
    else{
        frm.style.display="block"
    }
    })
    cont.appendChild(hUserTitle)
    cont.appendChild(userInformationForm(u))
    cont.appendChild(document.createElement("hr"))
    var hAccountTitle=createObject("button","btn btn-light w-100 fs-3","",languageContents.find(x=>x.page=="settings"&&x.name=="AccountsInfoTitle" &&x.languageId==languageId).value)
    hAccountTitle.addEventListener("click",function(){
        var frm=document.getElementById("accountsInfoForm")
        if (frm.style.display=="block") {
            frm.style.display="none"
        }
        else{
            frm.style.display="block"
        }
        })
    cont.appendChild(hAccountTitle)
    cont.appendChild(accountsInformations(u.accounts))
    cont.appendChild(document.createElement("hr"))

}

function userInformationForm(userInfo){
var form=document.createElement("form")
form.style.display="none"
form.id="userInfoForm"
form.setAttribute("onsubmit","return false")
var nameLabel=createObject("label","","",languageContents.find(x=>x.page=="user"&&x.name=="name" &&x.languageId==languageId).value)
nameLabel.for="nameUser"
var nameInput=createInput("text","form-control","nameUser",languageContents.find(x=>x.page=="user"&&x.name=="enterName" &&x.languageId==languageId).value)
nameInput.value=userInfo.name
var surnameLabel=createObject("label","","",languageContents.find(x=>x.page=="user"&&x.name=="surname" &&x.languageId==languageId).value)
surnameLabel.for="surnameUser"
var surnameInput=createInput("text","form-control","surnameUser",languageContents.find(x=>x.page=="user"&&x.name=="entersurname" &&x.languageId==languageId).value)
surnameInput.value=userInfo.surname
var nationalityLabel=createObject("label","","",languageContents.find(x=>x.page=="user"&&x.name=="nationality" &&x.languageId==languageId).value)
nationalityLabel.for="nationalitiy"
var nationalityInput=createInput("text","form-control","nationality",languageContents.find(x=>x.page=="user"&&x.name=="enterNationality" &&x.languageId==languageId).value)
nationalityInput.value=userInfo.nationality
var btnSave=createObject("button","btn btn-dark","",languageContents.find(x=>x.page=="general"&&x.name=="btnSave" &&x.languageId==languageId).value)
btnSave.addEventListener("click",function(){
userInfo.name=nameInput.value
userInfo.surname=surnameInput.value
userInfo.nationality=nationalityInput.value
alert(languageContents.find(x=>x.page=="general"&&x.name=="errSuccessSave" &&x.languageId==languageId).value)
onlineUser=userInfo
settings()
})
var newForm=appendObjects(form,document.createElement("br"),nameLabel,nameInput,document.createElement("br"),surnameLabel,surnameInput,document.createElement("br"),nationalityLabel,nationalityInput,document.createElement("br"),btnSave)
return newForm
}

function accountsInformations(accs){
var form=document.createElement("form")
form.style.display="none"
form.id="accountsInfoForm"
form.setAttribute("onsubmit","return false")
form.appendChild(document.createElement("br"))

accs.forEach(x=>{
var d=createObject("div","row","","")
var dAccName=createObject("div","col-2","",languageContents.find(x=>x.page=="account"&&x.name=="AccountName" &&x.languageId==languageId).value+":")
dAccName.style.textAlign="right"
dAccName.style.fontWeight="bold"
var dAccNameInput=createObject("div","col-4","","")
var AccNameInput=createInput("text","form-control accInput","","")
AccNameInput.value=x.name
dAccNameInput.appendChild(AccNameInput)
var dAccNoInput=createObject("div","col-4","","")

var AccountNo=createInput("text","form-control","","")
AccountNo.value=languageContents.find(x=>x.page=="account"&&x.name=="AccountNo" &&x.languageId==languageId).value+":"+x.accountNumber
AccountNo.disabled=true
dAccNoInput.appendChild(AccountNo)
d.append(dAccName,dAccNameInput,dAccNoInput)
form.appendChild(d)
form.appendChild(document.createElement("hr"))

})
var d2=createObject("div","row","","")
var btnSave=createObject("button","btn btn-dark w-25 m-3","",languageContents.find(x=>x.page=="general"&&x.name=="btnSave" &&x.languageId==languageId).value)
d2.appendChild(btnSave)
form.appendChild(d2)
btnSave.addEventListener("click",function(){
var inputs=document.getElementsByClassName("accInput")
var u=Users.find(x=>x.citizenshipNumber==onlineUser.citizenshipNumber)
for (let index = 0; index < inputs.length; index++) {

    u.accounts[index].name=inputs[index].value
}
alert(languageContents.find(x=>x.page=="general"&&x.name=="completed" &&x.languageId==languageId).value)
settings()
})
return form
}

function transactionRecords(){
    var title=document.getElementsByTagName("title")[0]
    title.innerText=languageContents.find(x=>x.page=="accountTransaction"&&x.name=="headerText" &&x.languageId==languageId).value
    var cont=clearCont1()
    cont.appendChild(document.createElement("br"))
    var h=document.createElement("h2")
    h.innerText=languageContents.find(x=>x.page=="accountTransaction"&&x.name=="headerText" &&x.languageId==languageId).value
    cont.appendChild(h)
    cont.appendChild(document.createElement("br"))
    cont.appendChild(getTransactions())
    return cont
}


function getTransactions(){
    var table=createObject("table","table table-bordered","","")
    var tr=document.createElement("tr")
    var thSender=createObject("th","","",languageContents.find(x=>x.page=="accountTransaction"&&x.name=="TableTh1" &&x.languageId==languageId).value)
    var thBuyer=createObject("th","","",languageContents.find(x=>x.page=="accountTransaction"&&x.name=="TableTh2" &&x.languageId==languageId).value)
    var thAmount=createObject("th","","",languageContents.find(x=>x.page=="accountTransaction"&&x.name=="TableTh3" &&x.languageId==languageId).value)
    var thDate=createObject("th","","",languageContents.find(x=>x.page=="accountTransaction"&&x.name=="TableTh4" &&x.languageId==languageId).value)
    var thType=createObject("th","","",languageContents.find(x=>x.page=="accountTransaction"&&x.name=="TableTh5" &&x.languageId==languageId).value)
    var newTr=appendObjects(tr,thSender,thBuyer,thAmount,thDate,thType)
    table.appendChild(newTr)
    if (AccountTransactions.length>0) {
    AccountTransactions.forEach(a=>{
        var trData=document.createElement("tr")
        trData.className=a.transactionType==1?"bg-primary":a.transactionType==2?"bg-success":"bg-warning"
        var tdSender=createObject("td","","",getUserNamewithAccountNumber(a.senderAccountNumber)==""?"ATM":getUserNamewithAccountNumber(a.senderAccountNumber))
        tdSender.title=a.senderAccountNumber
        var tdBuyer=createObject("td","","",getUserNamewithAccountNumber(a.buyerAccountNumber)==""?"ATM":getUserNamewithAccountNumber(a.buyerAccountNumber))
        tdBuyer.title=a.buyerAccountNumber
        var tdAmount=createObject("td","","",a.amount+" TRY")
        var tdDate=createObject("td","","",a.date)
        var tdType=createObject("td","","",languageContents.find(x=>x.page=="account"&&x.name=="TransactionType"+a.transactionType &&x.languageId==languageId).value)
        var newTrData=appendObjects(trData,tdSender,tdBuyer,tdAmount,tdDate,tdType)
        table.appendChild(newTrData)
    })}
    else{
        var trNotFound=document.createElement("tr")
        var tdNotFound=document.createElement("td")
        tdNotFound.colSpan=5
        tdNotFound.innerText=languageContents.find(x=>x.page=="home"&&x.name=="errDataNotFound" &&x.languageId==languageId).value
        trNotFound.appendChild(tdNotFound)
        table.appendChild(trNotFound)
    }
    return table
}

function createNewUserForm(){
    var title=document.getElementsByTagName("title")[0]
    title.innerText=languageContents.find(x=>x.page=="customer"&&x.name=="headerText" &&x.languageId==languageId).value
    var cont=clearCont1()
    cont.appendChild(document.createElement("br"))
    var h=document.createElement("h2")
    h.innerText=languageContents.find(x=>x.page=="customer"&&x.name=="headerText" &&x.languageId==languageId).value
    cont.appendChild(document.createElement("br"))
    cont.appendChild(h)

    var form=document.createElement("form")
    form.setAttribute("onsubmit","return false")
    var labelName=createObject("label","","",languageContents.find(x=>x.page=="customer"&&x.name=="Label1" &&x.languageId==languageId).value)
    labelName.for="name"
    var inputName=createInput("text","form-control","name",languageContents.find(x=>x.page=="customer"&&x.name=="Input1PlaceHolder" &&x.languageId==languageId).value)
    inputName.required=true
    var labelSurname=createObject("label","","",languageContents.find(x=>x.page=="customer"&&x.name=="Label2" &&x.languageId==languageId).value)
    labelSurname.for="surname"
    var inputSurname=createInput("text","form-control","surname",languageContents.find(x=>x.page=="customer"&&x.name=="Input2PlaceHolder" &&x.languageId==languageId).value)
    inputSurname.required=true
    var labelCitizenShip=createObject("label","","",languageContents.find(x=>x.page=="customer"&&x.name=="Label3" &&x.languageId==languageId).value)
    labelCitizenShip.for="citizenShip"
    var inputCitizen=createInput("text","form-control","citizenShip",languageContents.find(x=>x.page=="customer"&&x.name=="Input3PlaceHolder" &&x.languageId==languageId).value)
    inputCitizen.required=true
    var labelPassword=createObject("label","","",languageContents.find(x=>x.page=="customer"&&x.name=="Label4" &&x.languageId==languageId).value)
    labelPassword.for="password"
    var inputPassword=createInput("password","form-control","password",languageContents.find(x=>x.page=="customer"&&x.name=="Input4PlaceHolder" &&x.languageId==languageId).value)
    inputPassword.required=true
    var labelRePassword=createObject("label","","",languageContents.find(x=>x.page=="customer"&&x.name=="Label5" &&x.languageId==languageId).value)
    labelRePassword.for="repassword"
    var inputRePassword=createInput("password","form-control","repassword",languageContents.find(x=>x.page=="customer"&&x.name=="Input5PlaceHolder" &&x.languageId==languageId).value)
    inputRePassword.required=true
    var labelNationality=createObject("label","","",languageContents.find(x=>x.page=="customer"&&x.name=="Label6" &&x.languageId==languageId).value)
    labelNationality.for="nationality"
    var inputNationality=createInput("text","form-control","nationality",languageContents.find(x=>x.page=="customer"&&x.name=="Input6PlaceHolder" &&x.languageId==languageId).value)
    inputNationality.required=true
    var labelMomSurname=createObject("label","","",languageContents.find(x=>x.page=="customer"&&x.name=="Label7" &&x.languageId==languageId).value)
    labelMomSurname.for="momsurname"
    var inputMomSurname=createInput("text","form-control","momsurname",languageContents.find(x=>x.page=="customer"&&x.name=="Input7PlaceHolder" &&x.languageId==languageId).value)
    inputMomSurname.required=true
    var labelAccountName=createObject("label","","",languageContents.find(x=>x.page=="customer"&&x.name=="Label8" &&x.languageId==languageId).value)
    labelAccountName.for="accountName"
    var inputAccountName=createInput("text","form-control","accountName",languageContents.find(x=>x.page=="customer"&&x.name=="Input8PlaceHolder" &&x.languageId==languageId).value)
    inputAccountName.required=true
    var btnSave=createObject("button","btn btn-dark","",languageContents.find(x=>x.page=="general"&&x.name=="btnSave" &&x.languageId==languageId).value)
    btnSave.addEventListener("click",function(){
        if (inputCitizen.value.trim()!="" && inputName.value.trim()!="" && inputSurname.value.trim() && inputPassword.value.trim()!="" && inputNationality.value.trim()!="" && inputMomSurname.value.trim()!="") {
        if (inputPassword.value==inputRePassword.value) {
        if (!Users.some(x=>x.citizenshipNumber==inputCitizen.value)) {
        var user=new User(inputCitizen.value,inputName.value,inputSurname.value,inputPassword.value,inputNationality.value,false,inputMomSurname.value)
        var account=new Account("TRY",inputAccountName.value,true)
        user.accounts.push(account)
        Users.push(user)
        createNewUserForm()
        }
        else{
            alert(languageContents.find(x=>x.page=="customer"&&x.name=="errCitizen" &&x.languageId==languageId).value)
        }
        }
        else{
            alert(languageContents.find(x=>x.page=="customer"&&x.name=="errPassword" &&x.languageId==languageId).value)
        }
    }
    })
    var newForm=appendObjects(form,document.createElement("br"),labelName,inputName,document.createElement("br"),labelSurname,inputSurname,document.createElement("br"),labelCitizenShip,inputCitizen,document.createElement("br"),labelPassword,inputPassword,document.createElement("br"),labelRePassword,inputRePassword,document.createElement("br"),labelNationality,inputNationality,document.createElement("br"),labelMomSurname,inputMomSurname,document.createElement("br"),labelAccountName,inputAccountName,document.createElement("br"),btnSave)
    cont.appendChild(newForm)
    cont.appendChild(document.createElement("hr"))
    cont.appendChild(getCustomersTable())
}

function getCustomersTable(){
    var table=createObject("table","table table-bordered","","")
    var tr=document.createElement("tr")
    var tdName=createObject("th","","",languageContents.find(x=>x.page=="customer"&&x.name=="Label1" &&x.languageId==languageId).value)
    var tdsur=createObject("th","","",languageContents.find(x=>x.page=="customer"&&x.name=="Label2" &&x.languageId==languageId).value)
    var tdCit=createObject("th","","",languageContents.find(x=>x.page=="customer"&&x.name=="Label3" &&x.languageId==languageId).value)
    var tdNat=createObject("th","","",languageContents.find(x=>x.page=="customer"&&x.name=="Label6" &&x.languageId==languageId).value)
    var tdAdm=createObject("th","","",languageContents.find(x=>x.page=="customer"&&x.name=="admin" &&x.languageId==languageId).value)
    var tdAccounts=createObject("th","","",languageContents.find(x=>x.page=="customer"&&x.name=="accounts" &&x.languageId==languageId).value)
    var newTr=appendObjects(tr,tdName,tdsur,tdCit,tdNat,tdAdm,tdAccounts)
    table.appendChild(newTr)
    Users.forEach(x=>{
        var tr=`<tr><td>${x.name}</td><td>${x.surname}</td><td>${x.citizenshipNumber}</td><td>${x.nationality}</td><td>${x.administrator?"Admin":"Customer"}</td><td>${x.accounts.map(x=>x.accountNumber)}</td></tr>`
        table.innerHTML+=tr
    })
    return table
}