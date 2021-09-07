let colors = []
const colorLength = 6;
for(let i=0;i<colorLength;i++){
    colors = colors.concat({
        color:require('../../images/common/planets/color' + i + '.svg').default,
        id:i,
    });
}

export default colors;