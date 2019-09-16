import * as React from 'react';
import { Link } from 'react-router-dom';

export const LandingPage: React.FunctionComponent = (props: any) => {
    return <div>
            <ul>
                <li><Link to='/events'>Events</Link></li>
            </ul>
        </div>;
}
