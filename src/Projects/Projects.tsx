import StaticBox from '../StaticBox/StaticBox'
import './Projects.css'
import MenuDemo from '../assets/ShifterDemo.png'
import GameDemo from '../assets/ShifterDemoLevel.png'
import ClockDemo from '../assets/NeumorphicClockDemo.png'
import TetrisDemo from '../assets/TetrisDemo.png'
import GitHubLogo from '../assets/GitHubLogo.png'
import CircleButton from '../CircleButton/CircleButton'
import WeatherDemo from '../assets/WeatherAppDemo.png'

import LinkLogo from '../assets/Link.png'

function Projects() {
    return (
        <>
            <div className='projectsCont'>
                <div className='projectsTitle'>Projects</div>
                <div className='projectsCont'>
                    <StaticBox>
                        <div className='projectsCardCont'>
                            <div className='projectDesCont'>
                                <div className='projectName'>Shifter</div>
                                <div className='projectDesc'>Shifter is a game developed for IOS where the goal of the game is to have one shape remaining. You can swipe on tiles in any direction and if in the direction that you swipec there is a tile of a different shape then the original tile goes blank and the second shape is replaced with the first one. There are a bunch of unique twists as the game progesses such as increasing board size, missing tiles and wild card tiles. This game also has achevements and different UIs can be unlocked by playing.</div>
                                <div className='projectsTechUsedCont'>
                                    <TechUsedCard name='Swift' color='#f05138'></TechUsedCard>
                                    <TechUsedCard name='Swift UI' color='#f05138'></TechUsedCard>
                                    <TechUsedCard name='IOS' color='#007AFF'></TechUsedCard>
                                    <GitHub url='https://github.com/LucasVand/Shifter'></GitHub>
                                </div>
                            </div>

                            <img src={MenuDemo} className='projectsImage' style={{ maxWidth: '17%', marginRight: '1em', marginLeft: '1em' }}></img>
                            <img src={GameDemo} className='projectsImage' style={{ maxWidth: '17%', marginRight: '1em', marginLeft: '1em' }}></img>
                        </div>

                    </StaticBox>

                    <StaticBox>
                        <div className='projectsCardCont'>
                            <div className='projectDesCont'>
                                <div className='projectName'>Clock</div>
                                <div className='projectDesc'>This is a little web app that I developed for fun. It is a clock that uses the bars to display the time. It uses neumorphic design or soft UI, this is a design that has gained popularity because of its elegent and simple design where the elements look like they are coming out of the screen. </div>
                                <div className='projectsTechUsedCont'>
                                    <TechUsedCard name='React' color='#61DBFB'></TechUsedCard>
                                    <TechUsedCard name='TypeScript' color='#3178C6'></TechUsedCard>
                                    <TechUsedCard name='CSS' color='#2965f1'></TechUsedCard>
                                    <TechUsedCard name='Web' color='#000000'></TechUsedCard>
                                    <GitHub url='https://github.com/LucasVand/Neumorphic-Clock'></GitHub>
                                    <Link url='https://lucasvand.github.io/Neumorphic-Clock/'></Link>
                                </div>
                            </div>

                            <img src={ClockDemo} className='projectsImage' style={{ maxWidth: '38%', marginRight: '1em', marginLeft: '1em' }}></img>


                        </div>

                    </StaticBox>

                    <StaticBox>
                        <div className='projectsCardCont'>
                            <div className='projectDesCont'>
                                <div className='projectName'>NES Tetris</div>
                                <div className='projectDesc'>A recreation of NES tetris build in C#. This was one of my beggining projects where I tried to recreated the original NES tetris as close to the real game as possible. Astetically I got very close, some of the game play is not quite as smooth as the original game but as a beggining project it is very good. It has everything from the level selector to the offical scoring and drop rate. </div>
                                <div className='projectsTechUsedCont'>
                                    <TechUsedCard name='C#' color='#9b4993'></TechUsedCard>
                                    <TechUsedCard name='WinForm' color='#3178C6'></TechUsedCard>
                                    <GitHub url='https://github.com/LucasVand/NES-Tetris'></GitHub>
                                </div>
                            </div>

                            <img src={TetrisDemo} className='projectsImage' style={{ maxWidth: '31%', marginRight: '3.7em', marginLeft: '4.0em', boxShadow: '1em 1em 3em rgba(40,40,40, 0.7)' }}></img>


                        </div>

                    </StaticBox>
                    <StaticBox>
                        <div className='projectsCardCont'>
                            <div className='projectDesCont'>
                                <div className='projectName'>Weather App</div>
                                <div className='projectDesc'>This is a fun little weather app which introduced me to API's and working with them and promises and async functions. It is a standard weather app which uses an open source weather API. It shows all of the basic information and it even shows you your location and what region, country, and city.  </div>
                                <div className='projectsTechUsedCont'>
                                    <TechUsedCard name='React' color='#61DBFB'></TechUsedCard>
                                    <TechUsedCard name='TypeScript' color='#3178C6'></TechUsedCard>
                                    <TechUsedCard name='CSS' color='#2965f1'></TechUsedCard>
                                    <TechUsedCard name='Web' color='#000000'></TechUsedCard>
                                    <GitHub url='https://github.com/LucasVand/Weather-App'></GitHub>
                                    <Link url='https://lucasvand.github.io/Weather-App'></Link>
                                </div>
                            </div>

                            <img src={WeatherDemo} className='projectsImage' style={{ maxWidth: '38%', marginRight: '1em', marginLeft: '1em' }}></img>


                        </div>

                    </StaticBox>
                </div >
            </div >
        </>
    )
}

export default Projects

interface TechUsedProps {
    name: string
    color: string
}

function TechUsedCard(props: TechUsedProps) {

    return (
        <>
            <div className='techUsed' style={{ backgroundColor: props.color + '90', borderColor: props.color, textWrap: 'nowrap' }}>{props.name}</div>
        </>

    )
}
interface GitHubProps {
    url: string
}

function GitHub(props: GitHubProps) {

    return (
        <>
            <div style={{ marginLeft: '1em' }}>
                <CircleButton on={false}>
                    <img src={GitHubLogo} className='github' onClick={() => { window.location.href = props.url }}></img>
                </CircleButton>
            </div>
        </>
    )
}

function Link(props: GitHubProps) {

    return (
        <>
            <div>
                <CircleButton on={false}>
                    <img src={LinkLogo} className='github' onClick={() => { window.location.href = props.url }}></img>
                </CircleButton>
            </div>
        </>
    )
}