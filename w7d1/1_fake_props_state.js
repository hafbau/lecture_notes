// THIS IS NOT REACT; IT IS HOWEVER A REVIEW OF CLOSURES
// THIS FILE IS AN ATTEMPT TO EXPLAIN PROPS AND STATE WITHOUT THE REACT HYPE

const ParentFunk = () => {
  let parentStateVar = 'parent state variable'
  const changeParentStateVar = (newValue) => {
    parentStateVar = newValue;
  }

  ChildFunk({
    parentStateVar: parentStateVar,
    changeText: changeParentStateVar
  });

  console.log('parentStateVar :>> ', parentStateVar);
}

const ChildFunk = (obj) => {
  let childState = 'Im a local variable in Child funk'

  const changeMyState = () => childState = 'changed child state';

  changeMyState();
  console.log('childState :>> ', childState);

  console.log('obj.text :>> ', obj.text);
  // obj.text = childState;
  obj.changeText('changed Parent from child')
}

ParentFunk();