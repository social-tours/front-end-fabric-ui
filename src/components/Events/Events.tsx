import * as React from 'react';
import axios from 'axios';

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
        axios.get('https://staging-a-socialtours.herokuapp.com/api/events')
        .then(res => {
            this.setState({
                events : res.data
            })
        })
        .catch(err => console.log(err));
    };

    public render = () => {
        return (
            <Stack >
                {this.state.events.length ? this.state.events.map((event : any) => <div>{event.title}</div>) : <h2>Loading Events</h2>}
            </Stack>
        )
    };
}