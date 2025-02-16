export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (valorDeposito: number): void => {
    if(this.validateStatus()){
      this.balance = this.balance + valorDeposito
    }
  }

  withdraw = (valorSaque: number): void => {
    if(this.validateStatus() && valorSaque <= this.balance) {
      this.balance = this.balance - valorSaque
    } else {
      console.log('Valor indisponivel ou conta invalida')
    }
  }

  getBalance = (): void => {
    if(this.validateStatus()) {
      console.log(this.balance)
    }
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
