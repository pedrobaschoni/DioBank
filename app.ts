import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PoupancaAccount } from './class/PoupancaAccount'


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(200)
console.log(peopleAccount)
peopleAccount.withdraw(300)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(5000)
console.log(companyAccount)
companyAccount.withdraw(400)
console.log(companyAccount)
companyAccount.getLoan(1000)
console.log(companyAccount)

const poupancaAccount: PoupancaAccount = new PoupancaAccount('Pedro', 20)
poupancaAccount.deposit(100)
console.log(poupancaAccount)