import StaticBox from '../StaticBox/StaticBox'
import './Projects.css'

function Projects() {
    return (
        <>
            <div className='projectsCont'>
                <h1 className='projectsTitle'>Projects</h1>


                <div className='projectsCont'>
                    <StaticBox>
                        <div className='projectName'>Shifter</div>
                        <div className='projectDesc'>Shifter is a game developed for IOS where the goal of the game is to have one shape remaining. You can swipe on tiles in any direction and if in the direction that you swipec there is a tile of a different shape then the original tile goes blank and the second shape is replaced with the first one. There are a bunch of unique twists as the game progesses such as increasing board size, missing tiles and wild card tiles. This game also has achevements and different UIs can be unlocked by playing.</div>

                    </StaticBox>
                </div>
            </div>
        </>
    )
}

export default Projects