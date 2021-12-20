function pangram(letter) {
  let count = 0;
  let vowelSimple = ['a','e','i','o','u']
  let vowels = ['á','ä','é','ë','í','ï','ó','ö','ú',',ü']
  let letterArray = letter.split('')
  let finalLetter = letterArray.map(e=>{
    if(vowels.includes(e)){
      return vowelSimple[parseInt(vowels.indexOf(e)/2)].toLowerCase() 
    }
    return e.toLowerCase()
  }).sort()
  let setArray = new Set(finalLetter)
  finalLetter = Array.from(setArray)
  finalLetter.forEach(e=>{
    if ((e<='z' && e>= 'a') || e == 'ñ'){
      count +=1;
    }
  })

  return count < 27 ? false : true
}

pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho') // true
pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!') // true

pangram('Esto es una frase larga pero no tiene todas las letras del abecedario') // false
pangram('De la a a la z, nos faltan letras') // false
pangram('áéíóú') // false