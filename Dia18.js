function fixFiles(files) {
  let res = [], cont = {};
  files.forEach(element => {
    if(res.includes(element)){
      cont[element]+=1
      res.push(`${element}(${cont[element]})`)
    }else {
      res.push(element)
      cont[element] = 0;
    }
  });
  console.log(res)
  return res;  
}


const files = ['photo', 'postcard', 'photo', 'photo', 'video']
fixFiles(files) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files2 = ['file', 'file', 'file', 'game', 'game']
fixFiles(files2) //['file', 'file(1)', 'file(2)', 'game', 'game(1)']

// ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
fixFiles(files3) // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']

const files4 = ['a','a','a', 'b', 'b', 'a', 'b']
fixFiles(files4) // ['a', 'a(1)', 'a(2)', 'b', 'b(1)', 'a(3)', 'b(2)']
