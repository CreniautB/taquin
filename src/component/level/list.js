let list1 =[
    ['100-18',82],
    ['50+58',108],
    [  '23*5'  ,115],
    ['80+40',120],
    [   '3*7',21, 3],
    [    '8*4'	,32, 4],
    [    '2*2',4, 1],
    [    '3*3',9, 2],
    [   '30*2',60],
    [    '8*8',64],
    [    '5*9'	,45, 5],
    [    '100/2',50],
    [    '46*2',92],
    [    '80+25'	,105],
    [    '9*8',72],
    ['','']
  ]

  let list2 = 
[
  ["8+3", 11],
  ["11*5", 55],
  ["10*6", 60],
  ["8*9", 72],
  ["3*5", 15],
  ["6*6", 35],
  ["8*5", 40],
  ["9*5", 45],
  ["4*7", 28],
  ["9*2", 18],
  ["7*3", 21],
  ["6*4", 24],
  ["8*6", 48],
  ["25/5", 5],
  ["4*2", 8],
  ['','']
]
  
let list3 = [
  ["5*5", 25],
  ["10*11", 110],
  ["8*8", 64],
  ["15/3",5],
  ["50+30",80],
  ["80*2",160],
  ["90+85",175],
  ["75+45",120],
  ["10*10",100],
  ["270/2",135],
  ["70*2",140],
  ["10*15",150],
  ["50+25",75],
  ["9*10",90],
  ["20*10",200],
  ['','']
]

let list4 = 
[
  ["30*10", 300],
  ["50*7", 350],
  ["23*5",115],
  ["9*8",75],
  ["43+43",86],
  ["8*50",400],
  ["25*5",125],
  ["70*2",140],
  ["90+90",180],
  ["6*6",36],
  ["9*5",45],
  ["50*5",250],
  ["180+95",275],
  ["30*7",210],
  ["45*5",225],
  ['','']
]

let list5= [
  ["9*7", 36],
  ["34*2",68],
  ["9*8",72],
  ["36/2",18],
  ["5*5",25],
  ["3*5",15],
  ["6*4",24],
  ["8*4",32],
  ["7*6",42],
  ["9*3",27],
  ["7*5",35],
  ["25*2",50],
  ["28*2",56],
  ["92/2",46],
  ["9*6",54],
  ['','']
]

let list6 = [
  ["7*5", 35],
  ["9*5", 45],
  ["8*6",48],
  ["26*2",52],
  ["4*3",12],
  ["3+3",6],
  ["7*2",14],
  ["21/3",7],
  ["15+7",22],
  ["8+8",16],
  ["6*4",24],
  ["38/2",19],
  ["13*3",38],
  ["14*2",28],
  ["19+22",41],
  ['','']
]

let list7 = 
[
  ["45*2", 90],
  ["100-1", 99],
  ["15+22", 37],
  ["23*2", 46],
  ["34/2", 17],
  ["58/2", 29],
  ["30+29", 59],
  ["100-37", 63],
  ["11+40", 51],
  ["9*6", 54],
  ["43*2", 86],
  ["44*2", 88],
  ["25*3", 75],
  ["100-18", 82],
  ["100/10", 10],
  ['','']
]

let list8 = 
[
  ["40-7", 33],
  ["6*6", 36],
  ["13*3", 39],
  ["50-7", 43],
  ["17+30", 47],
  ["60-7" ,53],
  ["30+31", 61],
  ["23*3", 69],
  ["34/2", 17],
  ["10*2", 20],
  ["15+14", 29],
  ["16+15", 31],
  ["100-15", 85],
  ["100-27", 73],
  ["9*9", 81],
  ['','']
]

let list9 = 
[
  ["13+16", 29],
  ["24*2", 48],
  ["9*2",18],
  ["100-5",95],
  ["38*2",76],
  ["55+34",89],
  ["34*2",68],
  ["70+65",135],
  ["59*2",118],
  ["90+38",128],
  ["21*5",105],
  ["39+20",59],
  ["3*50",150],
  ["90*2",180],
  ["200-55",145],
  ['','']
]

let list10 = 
[
  ["8*8", 64],
  ["37*2", 74],
  ["50+35", 85],
  ["100-3",97],
  ["4*3",12],
  ["34/2",17],
  ["11*2",22],
  ["5*5",25],
  ["9*3",27],
  ["17*2",34],
  ["88/2",44],
  ["100-47",53],
  ["121-4",117],
  ["90+31",121],
  ["56*2",112],
  ['','']
]

function sendList(level) {
    if (level ===1) {return list1}
    if (level ===2) {return list2}
    if (level ===3) {return list3}
    if (level ===4) {return list4}
    if (level ===5) {return list5}
    if (level ===6) {return list6}
    if (level ===7) {return list7}
    if (level ===8) {return list8}
    if (level ===9) {return list9}
    if (level ===10) {return list10}

}

export default sendList