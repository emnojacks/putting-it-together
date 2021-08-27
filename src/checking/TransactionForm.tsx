import React from 'react';

type TransactionFormProps = {
    handleSubmit(amount: number): void
}
type TransactionFormState = {
    amount: number
}

export class TransactionForm extends React.Component<TransactionFormProps, TransactionFormState>{
    state={
        amount: 0
    }
    
    render() {

        const { handleSubmit } = this.props
        const {amount} = this.state
        
        return (
            <>
                Transaction Form
                
                <form onSubmit={(e) => {
                    e.preventDefault()
                    handleSubmit(amount)
                }}>
                    <input onChange={
                        (e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ amount: e.currentTarget.value }) }}
                        type="number">
                    
                    </input>
                
                    <button>
                    Submit
                    </button>
                </form>
               
        </>
        )
    }
}
 
