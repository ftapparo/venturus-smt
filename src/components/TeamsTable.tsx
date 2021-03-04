import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faShareAlt, faSort, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../styles/TeamsTable.css';

interface propsType {
    teams: {
        name: string;
        description: string;
    }[];
}



export function TeamsTable(data: propsType) {


    function getListIcons() {
        return (
            <div className='team-list-icons'>
                <div className='tooltip'><FontAwesomeIcon icon={faTrash} />
                    <span className='tooltiptext'>Remove</span>
                </div>
                <div className='tooltip'><FontAwesomeIcon icon={faShareAlt} />
                    <span className='tooltiptext'>Share</span>
                </div>
                <div className='tooltip'><FontAwesomeIcon icon={faPen} />
                    <span className='tooltiptext'>Edit</span>
                </div>
            </div>
        );
    };



    return (
        <>
            <div className='teams-list-title'>
                <div>
                    <span>Name</span>
                    <FontAwesomeIcon icon={faSort} />
                </div>
                <div>
                    <span>Description</span>
                    <FontAwesomeIcon icon={faSort} />
                </div>
            </div>

            <div className='teams-list-data'>
                <div>
                    <p>{data.teams[0].name}</p>
                    <div>
                        <p>{data.teams[0].description}</p>
                        {getListIcons()}
                    </div>
                </div>

                <div>
                    <p>{data.teams[1].name}</p>
                    <div>
                        <p>{data.teams[1].description}</p>
                        {getListIcons()}
                    </div>
                </div>

                <div>
                    <p>{data.teams[2].name}</p>
                    <div>
                        <p>{data.teams[2].description}</p>
                        {getListIcons()}
                    </div>
                </div>

                <div>
                    <p>{data.teams[3].name}</p>
                    <div>
                        <p>{data.teams[3].description}</p>
                        {getListIcons()}
                    </div>
                </div>

                <div>
                    <p>{data.teams[4].name}</p>
                    <div>
                        <p>{data.teams[4].description}</p>
                        {getListIcons()}
                    </div>
                </div>

                <div>
                    <p>{data.teams[5].name}</p>
                    <div>
                        <p>{data.teams[5].description}</p>
                        {getListIcons()}
                    </div>
                </div>
            </div>
        </>
    );
}