import React from 'react';

type Transaction = {
amount: number,
    type:
    "Deposit"
    | "Withdrawal"
}

type TransactionHistoryProps = {
transactions: Transaction[]
}

export class TransactionHistory extends React.Component<TransactionHistoryProps, {}>{
    render() {
        
        const { transactions } = this.props
        
        return (
            <>
     Transaction History
                <ul>
                    {transactions.map((t, index) => {
                        return(
                        <li key={index}>
                                {`Type: ${t.type} 
                                Amount: ${t.amount}`}
                        </li>
                    )
                    })}
                </ul>
        </>
        )
    }
}
 
