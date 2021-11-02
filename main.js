let str = `
010-3863-4967
iujjang12@gmail.com
https://www.naver.com
the quick brown fox jumps over the lazy dog.
abbcccdddd
`
console.log(
  str.match(/(?<=@).{1,}/g)
)