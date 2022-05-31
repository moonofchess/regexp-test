const str = `
010-1234-5678
theskkl@naver.com
https://www.naver.com
The qucik brown fox jumps over the lazy dog.
abbcccdddd
`

//const regexp = new RegExp('the', 'gi')
const regexp = /the/gi
// console.log(str.match(regexp))
// console.log(regexp.test(str))
// console.log(str.replace(regexp, 'AAA'))
// console.log(str)

console.log(str.match(regexp))


// const regexp1 = /^abc/;
// /표현식/

// const regexp2 = /^abc/gi;
// /표현식/플래그
