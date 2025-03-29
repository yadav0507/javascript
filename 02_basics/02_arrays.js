const marval_heros = ["thor", "irnnman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marval_heros.push(dc_heros)
// console.log(marval_heros)
// console.log(marval_heros[2][4])

const allHeros = marval_heros.concat(dc_heros)
//console.log(allHeros)

// marval_heros.concat(dc_heros)
// console.log(marval_heros);

const all_new_heros = [...marval_heros, ...dc_heros]

//console.log(all_new_heros)

const another_array = [1,2,4,[46,5,7],3,[6,8,0]]

const real_antoehr_array = another_array.flat(Infinity)
console.log(real_antoehr_array)



console.log(Array.isArray("himanshu"))
console.log(Array.from("himanshu"))
console.log(Array.from({name: "himasnhu"})) // interesting for interviews;

let score = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score, score2, score3))


