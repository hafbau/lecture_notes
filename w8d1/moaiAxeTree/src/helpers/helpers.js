export const announceResult = (playerSelection, compSelection) => {
  const lookup = {
    'Axe': 'Tree',
    'Tree': 'Moai',
    'Moai': 'Axe'
  };
  if (!(playerSelection && compSelection)) {
    return 'Waiting';
  }
  if (lookup[playerSelection] === compSelection) {
    return 'Won';
  }
  if (lookup[compSelection] === playerSelection) {
    return 'Lost';
  }
  return 'Tied';
}

const lookup = {
  'Axe': 'Moai',
  'Tree': 'Axe',
  'Moai': 'Tree'
};

const generateIndex = () => (Math.floor(Math.random() * 3))
export const computerSelects = (playerSelection, cheating) => {
  if (cheating) {
    return lookup[playerSelection];
  } else {
    return Object.keys(lookup)[generateIndex()]
  }
}