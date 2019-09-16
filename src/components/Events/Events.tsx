import * as React from 'react';
import axios from 'axios';
import { Event } from '../Event';
import { ShimmerBasic as Shimmer } from '../Shimmer';
import { Stack } from 'office-ui-fabric-react';
import './Events.scss';

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
            <Stack className='events'>
                <h2>Events</h2>
                {this.state.events.length ? this.state.events.map((event : any) => <Event {...event}/>) : <Shimmer />}
            </Stack>
        )
    };
}