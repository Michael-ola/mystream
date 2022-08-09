import React from 'react'
import {PlayButtonContainer,PlayIcon} from './style/PlayButton'
const playIcon=require('../../assets/images/icons/play.png');

interface PlayButtonType{
    onClick:()=>void,
    round?:boolean
}

const PlayButton = (props:PlayButtonType) => {
    return (
        <PlayButtonContainer {...{round:props.round}} onClick={props.onClick}>
            <PlayIcon {...{round:props.round}} src={playIcon}/>
            <span style={{display:props.round && 'none'}}>Play</span>
        </PlayButtonContainer>
    )
}

export default PlayButton
