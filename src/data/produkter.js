  const produkter = {
    BredbaandsHastigheder: [{speed:'25/5', pris:250},{speed:'50/10', pris:250},{speed:'100/20', pris:250},{speed:'300/60', pris:250},{speed:'500/60', pris:250},{speed:'1000/100', pris:250}],
    TvPakker:[{pakke :'', pris:250},{pakke :'Grunpakke', pris:250},{pakke:'Grundpakke + 10 valgfri kanaler', pris:250},{pakke :'Grundpakke + 20 valgfri kanaler', pris:250},{pakke :' Grundpakke + 36 valgfri kanaler', pris:250}],
    antal: [0,1,2,3,4],
    MobilAbo :[
    {name: '', Id: 'M1', pris: 0},
    {name: 'Fritale 5gb', Id: 'M2', pris: 149},
    {name: 'Fritale 10gb', Id: 'M3', pris: 199},
    {name: 'Fritale 25gb', Id: 'M4', pris: 299},
    ]}


const faser = ['indsamling', 'planlægning', 'gravning', 'installation', 'reetablering']
const faseBeskrivelser = [
    'klistermarker bliver sendt ud',
    'graverne kommer',
    'tilslutnminger sker hvor i skal v;re hjemme', 
    'reetablering sker mens i ikke skal v;re hjemme',
    ]