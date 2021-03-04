import '../styles/TopFive.css';

export function TopFive() {

    return (
        <div className='top-five-container'>
            <div className='top-five-title-bar'>
                <span>Top 5</span>
            </div>
            <div className='top-five-list'>
                <div>
                    <span>Highest avg age</span>
                    <div>
                        <div className='top-five-selected-item'>
                            <p>Inter Milan</p>
                            <p>31.9</p>
                        </div>
                        <div>
                            <p>APOEL Nicosia</p>
                            <p>31.7</p>
                        </div>
                        <div>
                            <p>AC Milan</p>
                            <p>31.6</p>
                        </div>
                        <div>
                            <p>Besiktas JK</p>
                            <p>31.4</p>
                        </div>
                        <div>
                            <p>Olympiacos Piraeus</p>
                            <p>31.3</p>
                        </div>

                    </div>
                </div>
                <div>
                    <span>Lowest avg age</span>
                    <div>
                        <div>
                            <p>Zalgiris Vilnius </p>
                            <p>21.1</p>

                        </div>
                        <div className='top-five-selected-item'>
                            <p>Arsenal FC</p>
                            <p>21.6</p>

                        </div>
                        <div>
                            <p>Ajax Amsterdam</p>
                            <p>22.0</p>

                        </div>
                        <div>
                            <p>FC Nantes</p>
                            <p>22.1</p>

                        </div>
                        <div>
                            <p>CSKA Moscow</p>
                            <p>22.5</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}