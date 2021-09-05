const planet0_0 = require('../../images/common/planets/planet0_0.png').default;
const planet0_1 = require('../../images/common/planets/planet0_1.png').default;
const planet0_2 = require('../../images/common/planets/planet0_2.png').default;
const planet0_3 = require('../../images/common/planets/planet0_3.png').default;
const planet0_4 = require('../../images/common/planets/planet0_4.png').default;
const planet0_5 = require('../../images/common/planets/planet0_5.png').default;
const planet1_0 = require('../../images/common/planets/planet0_0.png').default;
const planet1_1 = require('../../images/common/planets/planet1_1.png').default;
const planet1_2 = require('../../images/common/planets/planet1_2.png').default;
const planet1_3 = require('../../images/common/planets/planet1_3.png').default;
const planet1_4 = require('../../images/common/planets/planet1_4.png').default;
const planet1_5 = require('../../images/common/planets/planet1_5.png').default;
const planet2_0 = require('../../images/common/planets/planet2_0.png').default;
const planet2_1 = require('../../images/common/planets/planet2_1.png').default;
const planet2_2 = require('../../images/common/planets/planet2_2.png').default;
const planet2_3 = require('../../images/common/planets/planet2_3.png').default;
const planet2_4 = require('../../images/common/planets/planet2_4.png').default;
const planet2_5 = require('../../images/common/planets/planet2_5.png').default;
const planet3_0 = require('../../images/common/planets/planet3_0.png').default;
const planet3_1 = require('../../images/common/planets/planet3_1.png').default;
const planet3_2 = require('../../images/common/planets/planet3_2.png').default;
const planet3_3 = require('../../images/common/planets/planet3_3.png').default;
const planet3_4 = require('../../images/common/planets/planet3_4.png').default;
const planet3_5 = require('../../images/common/planets/planet3_5.png').default;
const planet4_0 = require('../../images/common/planets/planet4_0.png').default;
const planet4_1 = require('../../images/common/planets/planet4_1.png').default;
const planet4_2 = require('../../images/common/planets/planet4_2.png').default;
const planet4_3 = require('../../images/common/planets/planet4_3.png').default;
const planet4_4 = require('../../images/common/planets/planet4_4.png').default;
const planet4_5 = require('../../images/common/planets/planet4_5.png').default;

const loadPlanet = (planetId, colorId) =>{
    return eval("planet" + planetId + "_" + colorId);
}

export default loadPlanet;