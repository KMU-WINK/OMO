import {ReactComponent as planet1} from '../../images/create/planet1.svg'
import {ReactComponent as planet2} from '../../images/create/planet2.svg'
import {ReactComponent as planet3} from '../../images/create/planet3.svg'
import {ReactComponent as planet4} from '../../images/create/planet4.svg'
import {ReactComponent as planet5} from '../../images/create/planet5.svg'

let id = 0;
const addPlanet = (planet, isclick)=>{
    return {
        Planet:planet,
        isclick:isclick,
        id:id++,
    }
}
const planets = [
    addPlanet(planet1, true),
    addPlanet(planet2, false),
    addPlanet(planet3, false),
    addPlanet(planet4, false),
    addPlanet(planet5, false),
]


export default planets;