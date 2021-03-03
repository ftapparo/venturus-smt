import React from 'react';
import { TeamsTable } from './TeamsTable';
import '../styles/MyTeams.css';

export function MyTeams() {

    const teamsData = [
        { name: 'Barcelona', description: 'Barcelona Squad' },
        { name: 'Real Madrid', description: 'Real Madrid Squad' },
        { name: 'Milan', description: 'Milan Squad' },
        { name: 'Liverpool', description: 'Liverpool Squad' },
        { name: 'Bayern Munich', description: 'Bayern Munich Squad' },
        { name: 'Lazio', description: 'Lazio Squad' }
    ];

    return (
        <div className='my-teams-container'>
            <div className='my-teams-title-bar'>
                <span>My teams</span>
                <button>+</button>
            </div>
            <div className='my-teams-list'>
                <TeamsTable teams={teamsData} />
            </div>
        </div>
    );
}