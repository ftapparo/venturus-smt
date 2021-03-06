// import { faSortDown } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom';
import '../styles/CreateTeam.css';

export default function CreateTeam() {

    const [formation, setFormation] = useState(451);

    const Formation = () => (
        <img src={`/img/${formation}.png`} alt="" />
    );

    const options = [
        { value: '451', label: '4-5-1' },
        { value: '442', label: '4-4-2' },
        { value: '442D', label: '4-4-2D' },
        { value: '433', label: '4-3-3' },
        { value: '4411', label: '4-4-1-1' },
        { value: '4231', label: '4-2-3-1' },
        { value: '352', label: '3-5-2' },
        { value: '343', label: '3-4-3' },
        { value: '3313', label: '3-3-1-3' }
    ];


    useEffect(() => {
        console.log(formation);
    }, [formation]);

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
                                        <input type='radio' name='radio' value='real' onChange={() => { }} />
                                        <span className='checkmark' />
                                        <label htmlFor="choice1">Real</label>
                                    </div>

                                    <div className='radio-button'>
                                        <input type='radio' name='radio' value='fantasy' checked onChange={() => { }} />
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
                        {/* -------------- LEFT SECTION --------------- */}
                        <div>
                            <div className='formation-container'>
                                <label htmlFor="formations">Formation</label>
                                {/* <select name="formations" id="formations">
                                    <option value="choice1">4-2-3-1</option>
                                    <option value="choice2">3-4-3</option>
                                    <option value="choice3">4-5-1</option>
                                    <option value="choice4">4-4-2</option>
                                    <option value="choice5">4-3-3</option>
                                    <option value="choice6">4-4-1-1</option>
                                    <option value="choice7">3-3-1-3</option>
                                    <option value="choice8">4-4-2</option>
                                    <option value="choice9">3-5-2</option>
                                </select> */}

                                <Select
                                    classNamePrefix='formation-select'
                                    options={options}
                                    defaultValue={options[0]}
                                    onChange={(e: any) => { setFormation(e.value) }}
                                />


                                {/* <div>
                                    <span />
                                    <FontAwesomeIcon icon={faSortDown} />
                                </div> */}
                            </div>

                            <Formation />

                            {/* <div className='tactical-schema'>
                                <span></span>
                            </div> */}
                            <div className='button-save'>
                                <Link to='/' >Save</Link>
                            </div>
                        </div>

                        {/* -------------- RIGHT SECTION --------------- */}
                        <div>
                            <div className='search-players'>
                                <span>Search Players</span>
                                <input type='text' placeholder='Ronaldo' />
                            </div>

                            <div className='player-card'>
                                <div>
                                    <div>
                                        <div>
                                            <span>Name:</span>
                                            <span>Cristiano Ronaldo</span>
                                        </div>
                                        <div>
                                            <span>Age:</span>
                                            <span>32</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <span>Nacionality:</span>
                                            <span>Portugal</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='player-card'>
                                <div>
                                    <div>
                                        <div>
                                            <span>Name:</span>
                                            <span>Ronaldo Luiz de Alves</span>
                                        </div>
                                        <div>
                                            <span>Age:</span>
                                            <span>28</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <span>Nacionality:</span>
                                            <span>Brazil</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='player-card'>
                                <div>
                                    <div>
                                        <div>
                                            <span>Name:</span>
                                            <span>Ronaldo da Silva de Souza</span>
                                        </div>
                                        <div>
                                            <span>Age:</span>
                                            <span>18</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <span>Nacionality:</span>
                                            <span>Brazil</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

