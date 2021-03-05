import React from 'react';
import { MyTeams } from '../components/MyTeams';
import { PickedPlayer } from '../components/PickedPlayer';
import { TopFive } from '../components/TopFive';

import '../styles/Dashboard.css';

export default function Dashboard() {
    return (
        <div className='dashboard-container'>
            <div>
                <MyTeams />
            </div>

            <div>
                <TopFive />
                <PickedPlayer />
            </div>
        </div>
    );
}
