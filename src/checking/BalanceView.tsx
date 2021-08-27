import React from 'react';

type BalanceViewProps = {
balance: number
}

export class BalanceView extends React.Component<BalanceViewProps, {}>{
    render() { 

        const { balance } = this.props
        
        return (
            <>
            Balance View Component
               {balance}
            </>
        )
    }
}
 
