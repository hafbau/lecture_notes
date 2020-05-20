const cats = require('./data.json')
const gifs = require('./b.json')

const fs = require('fs')

const dat = cats.map((gf, i) => ({ ...gf, text: gifs[i % gifs.length].joke}))
// cats.forEach((cat, i) => {
//   const re = behance[i % behance.length]
//   dat.push(
//     {
//       image: re.src,
//       owner: {
//         name: re.project.owners[0].displayName,
//         avatar: re.project.owners[0].images.size_50.url,
//       }
//     },
//     {
//       image: cat.url,
//       owner: {
//         name: re.project.owners[re.project.owners.length - 1].displayName,
//         avatar: re.project.owners[re.project.owners.length - 1].images.size_50.url,
//       }
//     }
//   )

// });

fs.writeFile('./data.json', JSON.stringify(dat, null, 2), () => 'done done!')