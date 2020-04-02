// A clean up idea for the `carol_survey.js` file
// We said while we might make this work, it's a race condition and we can't be guaranteed when the answers are going to be ready.
// Also, it will be tedious to use the previous answer in the next question for example.

questions = {
 q1: {
   que: 'Whats up?',
   ans: ''
 },
 q2: {
   que: 'Whats up?',
   ans: ''
 },
 q3: {
   que: 'Whats up?',
   ans: ''
 }
}

for (const key in questions) {
  const queObj = questions[key]
  rl.question(queObj.que, (ans) => {
    questions[key][ans] = ans;

  })

  rl.close()
}