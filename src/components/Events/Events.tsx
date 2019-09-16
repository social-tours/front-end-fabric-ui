import * as React from 'react';

import { Stack } from 'office-ui-fabric-react';

export interface IEventsProps {
    user? : {}
}

export interface IEventsState {
    events : []
}

export class Events extends React.Component< IEventsProps, IEventsState> {
    constructor(props:any){
        super(props)
        this.state = {
            events : []
        };
    }

    public componentDidMount = () => {
        
    }

    public render = () => {
        return (
            <Stack >
                {this.state.events ? this.state.events.map((event : any) => <div>{event.title}</div>) : <h2>Loading Events</h2>}
            </Stack>>
        )
    }
}