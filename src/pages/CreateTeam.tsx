import React from 'react';
import '../styles/CreateTeam.css';

export default function CreateTeam() {
    return (
        <div className='create-team-container'>
            <div className='create-team-content'>
                <div className='create-team-title-bar'>
                    <span>Create your team</span>
                </div>
                <div className='team-information'>
                    <span>TEAM INFORMATION</span>
                    <div>
                        <div>A</div>
                        <div>B</div>
                    </div>
                </div>
                <div className='configure-squad'>
                    <span>CONFIGURE SQUAD</span>
                    <div>
                        <div>C</div>
                        <div>D</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
