// Implement our own forEach
const words = ['hello', 'lighthouse', 'world'];

const forEach = function(arrToLoopOver, callbackFunk) {
  for(let idx = 0; idx < arrToLoopOver.length; idx += 2) {
    const element = arrToLoopOver[idx]
    //
    callbackFunk(element)
    // callbackFunk(element, idx, arrToLoopOver, 'Hafiz is so awesome')
    
  }
}


const printWord = function(word, secondArg) {
  console.log(word, secondArg)
}

forEach(words, printWord)




// const forEach = function(arrToLoopOver, callbackFunk) {
  //   for(const element of arrToLoopOver) {
    //     // console.log('some progress starting...');
    //     callbackFunk(element, arrToLoopOver)
    //     // console.log('.... done calling your callback');
    //   }
    // }
    
    // const saveWord = function (word) {
    //   console.log('saving ... 50%');
    //   console.log('saving ... 99.9999999%');
    //   console.log('saving ... 90%');
    //   console.log('Yaaaas, saved word', word, 'to the cloud! Yes the cloud!!!!');
    // }