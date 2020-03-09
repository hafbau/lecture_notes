import {setGlobal} from 'reactn'

setGlobal({
  user: null,
  stories: null,
  contributions: null,
  currentStory: null
})

export {useGlobal, resetGlobal} from 'reactn'
