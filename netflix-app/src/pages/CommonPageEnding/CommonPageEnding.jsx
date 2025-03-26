import React, { useContext } from 'react'
import './CommonPageEnding.css'
import { Button } from 'react-bootstrap'
import themeContext from '../../contextAPI/contexts/themeContext'
const CommonPageEnding = () => {
    const { isDark } = useContext(themeContext);
    return (
        <>
            <div className='cmn-main-div' style={{ color: isDark ? 'white' : 'black' }}>
                <div className='cmn-head'>There’s even more to watch.</div>
                <div className='cmn-para'>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals and more. Watch as much as you want, anytime you want.</div>
                <div className='cmn-btn'>
                    <Button>Join Now</Button>
                </div>
            </div>
        </>
    )
}

export default CommonPageEnding