const color0 = require('../../images/common/planets/color0.png').default;
const color1 = require('../../images/common/planets/color1.png').default;
const color2 = require('../../images/common/planets/color2.png').default;
const color3 = require('../../images/common/planets/color3.png').default;
const color4 = require('../../images/common/planets/color4.png').default;
const color5 = require('../../images/common/planets/color5.png').default;

const loadColor = (colorId) =>{
    return eval("color" + colorId);
}

let colors = []
const colorLength = 6;
for(let i=0;i<colorLength;i++){
    colors = colors.concat({
        color:loadColor(i),
        id:i,
    });
}

export default colors;