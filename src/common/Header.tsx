import React from 'react';

type HeaderProps = {
brand: string
}


export class Header extends React.Component<HeaderProps,{}>{
    render() { 
        return ( 
            <nav>
                <h1>{this.props.brand}</h1>
            </nav>

 );
    }
}
 
