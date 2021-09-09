let colors = []
const colorLength = 6;
for(let i=0;i<colorLength;i++){
    colors = colors.concat({
        color:require('../../images/common/planets/color' + i + '.svg').default,
        id:i,
    });
}


// Color 여러개 뒀을때 Test Slide bar button??
colors = colors.concat({
    color:require('../../images/common/planets/color' + 0 + '.svg').default,
    id:6,
});
colors = colors.concat({
    color:require('../../images/common/planets/color' + 1 + '.svg').default,
    id:7,
});

export default colors;