import React, { useEffect, useState } from 'react';
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

    const [visible, setVisible] = useState(false);

    function showIcons() {
        return (visible &&
            (
                <div>
                    <div>
                        <FontAwesomeIcon icon={faTrash} />
                        <FontAwesomeIcon icon={faShareAlt} />
                        <FontAwesomeIcon icon={faPen} />
                    </div>
                </div>
            )
        );
    }


    function mouseOver() {
        setVisible(true);
    }

    function mouseLeave() {
        setVisible(false);
    }

    useEffect(() => {

        showIcons();

    });

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
                <div onMouseOver={mouseOver} onMouseLeave={mouseLeave}>
                    <p>{data.teams[0].name}</p>
                    <div>
                        <p>{data.teams[0].description}</p>
                        {showIcons()}
                    </div>
                </div>

                <div>
                    <p>{data.teams[1].name}</p>
                    <p>{data.teams[1].description}</p>
                </div>

                <div>
                    <p>{data.teams[2].name}</p>
                    <p>{data.teams[2].description}</p>
                </div>

                <div>
                    <p> {data.teams[3].name}</p>
                    <p> {data.teams[3].description}</p>
                </div>

                <div>
                    <p>{data.teams[4].name}</p>
                    <p>{data.teams[4].description}</p>
                </div>

                <div>
                    <p>{data.teams[5].name}</p>
                    <p>{data.teams[5].description}</p>
                </div>
            </div>
        </>
    );
}