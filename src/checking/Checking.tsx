import React from 'react';
import { BalanceView } from './BalanceView'
import {TransactionForm} from './TransactionForm'
import { TransactionHistory } from './TransactionHistory'

type CheckingProps = {}
type CheckingState = {
    balance: number,
    transactions: number[],
}

type Transaction = {
    amount: number,
    type:
    "Deposit"
    | "Withdrawal"
}

export class Checking extends React.Component<CheckingProps, CheckingState>{
    constructor(props: CheckingProps) {
        super(props)
        this.state = {
            balance: 0,
            transactions: []
        }
        //this is the old way bc setState in the update Balance method lost the "this"
    this.updateBalance = this.updateBalance.bind(this)
    }
    
    
    updateBalance(amount: number) {
        let transaction: Transaction = {
            amount: amount,
            type: amount > 0 ? "Deposit" :  "Withdrawal"
        }
        
        this.setState({
            balance: this.state.balance + amount,
            transactions: [...this.state.transactions, amount]
        })
    }
    
    render() {
        
        const { balance, transactions } = this.state;
        
        return (
            <>
            <section>
                    <BalanceView
                        balance={balance}
                    />
                    <br></br>
                    <TransactionForm
                        handleSubmit={this.updateBalance}
                    />
            </section>
            <section>
                    <TransactionHistory
                        transactions={transactions}
                    />
            </section>
        </>
        )
    }
}
 
