let day1TempF = 32;
let day2TempC = 25;
let day3TempF = 70;
let day4TempC = 18;
let day5TempF = 80;
let day6TempC = 15;
let day7TempF = 72;
let day8TempC = 28;
let day9TempF = 68;
let day10TempC = 20;
let day11TempF = 75;
let day12TempC = 23;
let day13TempF = 82;
let day14TempC = 30;
let day15TempF = 65;
let day16TempC = 22;
let day17TempF = 77;
let day18TempC = 26;
let day19TempF = 78;
let day20TempC = 24;
let day21TempF = 73;
let day22TempC = 21;
let day23TempF = 79;
let day24TempC = 27;
let day25TempF = 71;
let day26TempC = 19;
let day27TempF = 74;
let day28TempC = 17;
let day29TempF = 76;
let day30TempC = 29;



function CtoF(c) {
  return (c * 9) / 5 + 32;
}

function FtoC(f) {
  return ((f - 32) * 5) / 9;
}



let allTempsInF = [
  day1TempF,
  CtoF(day2TempC),
  day3TempF,
  CtoF(day4TempC),
  day5TempF,
  CtoF(day6TempC),
  day7TempF,
  CtoF(day8TempC),
  day9TempF,
  CtoF(day10TempC),
  day11TempF,
  CtoF(day12TempC),
  day13TempF,
  CtoF(day14TempC),
  day15TempF,
  CtoF(day16TempC),
  day17TempF,
  CtoF(day18TempC),
  day19TempF,
  CtoF(day20TempC),
  day21TempF,
  CtoF(day22TempC),
  day23TempF,
  CtoF(day24TempC),
  day25TempF,
  CtoF(day26TempC),
  day27TempF,
  CtoF(day28TempC),
  day29TempF,
  CtoF(day30TempC)
];

const allTempsInC = [
  FtoC(day1TempF),
  day2TempC,
  FtoC(day3TempF),
  day4TempC,
  FtoC(day5TempF),
  day6TempC,
  FtoC(day7TempF),
  day8TempC,
  FtoC(day9TempF),
  day10TempC,
  FtoC(day11TempF),
  day12TempC,
  FtoC(day13TempF),
  day14TempC,
  FtoC(day15TempF),
  day16TempC,
  FtoC(day17TempF),
  day18TempC,
  FtoC(day19TempF),
  day20TempC,
  FtoC(day21TempF),
  day22TempC,
  FtoC(day23TempF),
  day24TempC,
  FtoC(day25TempF),
  day26TempC,
  FtoC(day27TempF),
  day28TempC,
  FtoC(day29TempF),
  day30TempC
];


const tot_temperature_in_fahrenheit = allTempsInF.reduce((a, b) => a + b, 0);
const tot_temperature_in_celsius = allTempsInC.reduce((a, b) => a + b, 0);



const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / allTempsInF.length;
const avg_temperature_in_celsius = tot_temperature_in_celsius / allTempsInC.length;


module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
};