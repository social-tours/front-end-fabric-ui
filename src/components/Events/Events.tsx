import * as React from 'react';

export class Events extends React.Component<{}, {}> {
    constructor(props:any){
        super(props)
        this.state = {
            events : []
        };
    }

    public render = () => {
        return (
            <h1>Events Page</h1>
        )
    }
}