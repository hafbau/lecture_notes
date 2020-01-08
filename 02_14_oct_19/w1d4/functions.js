const items = [1, 2, 3];
for (const item of items) {
  console.log(item);
};

// can be rewritten as:

const logEach = function (items) {
  for (const item of items) {
    console.log(item);
  }
};

// but if we want something more abstract and single-purpose

const forEach = function (items, action) {
  for (const item of items) {
    action(item);
  }
};

declaredFunk = 'not a funk'