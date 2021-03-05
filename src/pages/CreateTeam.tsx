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
                        <div>
                            <div className='field-information'>
                                <span>Team name</span>
                                <input type='text' placeholder='Insert team name' />
                            </div>
                            <div className='field-information field-description'>
                                <span>Description</span>
                                <textarea maxLength={100} />
                            </div>
                        </div>
                        <div>
                            <div className='field-information'>
                                <span>Team website</span>
                                <input type='text' placeholder='http://myteam.com' />
                            </div>
                            <div className='field-information field-types'>
                                <span>Team type</span>
                                <div className='radio-list'>

                                    <div className='radio-button'>
                                        <input type='radio' name='radio' value='real' />
                                        <span className='checkmark' />
                                        <label htmlFor="choice1">Real</label>
                                    </div>

                                    <div className='radio-button'>
                                        <input type='radio' name='radio' value='fantasy' checked />
                                        <span className='checkmark' />
                                        <label htmlFor="choice2">Fantasy</label>
                                    </div>

                                </div>
                            </div>
                            <div className='field-information field-tags'>
                                <span>Tags</span>
                                <textarea maxLength={100} />
                            </div>
                        </div>
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
        </div >
    );
}

