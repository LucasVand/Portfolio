
import style from './StaticBox.module.css'

interface props {
    height?: number
    children?: React.ReactNode
    inset?: boolean
    margin?: string
}

function StaticBox({ height = 1, children, inset, margin }: props) {
    const values = () => {
        if (height == 1) {
            if (inset) {
                return ['inset ', 3, 3]
            } else {
                return ['', 1, 3]
            }
        }
        if (height == 2) {
            if (inset) {
                return ['inset ', 2, 6]
            } else {
                return ['', 3, 8]
            }
        }
        if (height == 3) {
            if (inset) {
                return ['inset ', 4, 10]
            } else {
                return ['', 6, 17]
            }
        }
        return ['', 1, 3]
    }
    return (
        <>
            <div className={style.bg} style={{ boxShadow: `${values()[0]}${values()[1]}px ${values()[1]}px ${values()[2]}px #969696, ${values()[0]}-${Number(values()[1]) * 2}px -${Number(values()[1]) * 2}px ${values()[2]}px #E6EDF5`, margin: `${margin != undefined ? margin : (height + 'em')}` }}>
                {children}
            </div>
        </>
    )
}

export default StaticBox