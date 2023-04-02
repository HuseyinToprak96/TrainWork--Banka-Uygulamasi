var CurrencyTypes=["TRY","EUR","USD","GBP"]

class Account{
    balance=0
    accountNumber=createNumber()
    isDelete=false
    constructor(currencyType,name,isMain){
        this.currencyType=currencyType
        this.name=name
        this.isMain=isMain
    }
}

function createNumber(){
var number=""
for (let index = 0; index <8; index++) {
    number+=Math.floor(Math.random()*9)
}
if (control(number)==false) {
    return number
}
else{
    return createNumber()
}
}

function control(number){
    var c=0
Users.forEach((user)=>{
    if(c==0){
    user.accounts.forEach((account)=>{
        if (Number(account.accountNumber)==Number(number)) {
            c=1
        }
    })}
})
if(c!=0)
return true
return false
}