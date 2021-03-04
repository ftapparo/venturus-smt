import '../styles/PickedPlayer.css';

export function PickedPlayer() {
    return (
        <div className='picked-player-container'>
            <div className='most-picked-player'>
                <span>Most picked player</span>
                <span>75%</span>
                <img src='/img/avatar_most_player.png' alt='' />
                <span className='selected-circle'></span>
            </div>
            <span className='center-circle'></span>
            <div className='less-picked-player'>
                <span>Less picked player</span>
                <span>25%</span>
                <img src='/img/avatar_less_player.png' alt='' />
            </div>
        </div>
    );
}