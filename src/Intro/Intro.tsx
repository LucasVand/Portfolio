import { useState } from 'react'
import './Intro.css'
import StaticBox from '../StaticBox/StaticBox'
import Toggle from '../Toggle/Toggle'

function Intro() {
    const [toggled, setToggled] = useState([true, false, true])
    const toggles = toggled.map((value: boolean, index: number) => {
        return (
            <Toggle toggled={value} onClick={() => {
                setToggled(() => {
                    const temp = []
                    toggled.forEach((bool: boolean) => {
                        temp.push(bool)
                    })
                    temp[index] = !value
                    return temp
                })
            }}></Toggle>
        )
    })

    return (

        <div className='introCont'>
            <div className='introDesCont'>
                <div className='introTitle'>Hi. I'm <span style={{ color: '#56D3AE' }}>Lucas.</span></div>
                <div className='introTitle'>Junior Developer.</div>
                <p className='underIntro'> I'm a Junior Developer who specializes in front end design, <br></br> I love to imagine things and make them a reality.</p>
            </div>
            <StaticBox height={1}>
                {toggles}
            </StaticBox>
        </div>

    )
}

export default Intro
