const al = {
  firstName: 'Ada',
  lastName:  'Lovelace',

  fullName: function() {
    return `${firstName} ${lastName}`
  }
};

// Desired behavior: To log 'Ada Lovelace', her full name
console.log(al.fullName);

// A: What will we get instead?
// [Function: fullName]

// B: What do we need to fix?

// 1. We need to call the function by adding () so it looks like al.fullName()
// 2. Also on line 6, we need to add `this.` to both firstName and lastName like so: `${this.firstName} ${this.lastName}`