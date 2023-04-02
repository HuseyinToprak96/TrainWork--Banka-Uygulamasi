var AccountTransactions=[]
class AccountTransaction{
    constructor(senderAccountNumber,buyerAccountNumber,amount,date,transactionType){
        this.senderAccountNumber=senderAccountNumber
        this.buyerAccountNumber=buyerAccountNumber
        this.amount=amount
        this.date=date
        this.transactionType=transactionType
    }
    add(newAccountTransaction){
        AccountTransactions.push(newAccountTransaction)
    }
}