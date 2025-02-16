import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (valorEmprestimo: number): void => {
    try {
      this.getBalance() // Se der erro, a conta é inválida
      this.balance += valorEmprestimo
      console.log(`Empréstimo de R$${valorEmprestimo} realizado com sucesso!`)
    } catch (error) {
      console.log('Empréstimo não permitido: Conta inválida.')
    }
  }
}
