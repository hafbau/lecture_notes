/*
EXAMPLE DATA BELOW
const contacts = [
	{
		name: "Laurel",
		phone: "123 456 7890",
		email: "laurel@comics.com",
		friends: ["Hardy", "Abbott", "Costello"]
	},
	{
		name: "Hardy",
		phone: "321 654 0987",
		email: "hardy@hardyharhar.com",
		friends: ["Laurel", "Buster"]
	},
	{
		name: "Buster",
		phone: "987 654 3210",
		email: "buster@keaton.ca",
		friends: ["Hardy"]
	},
	{
		name: "Abbott",
		phone: "888 123 4567",
		email: "abbott@whosonfirst.co",
		friends: ["Costello", "Laurel"]
	},
	{
		name: "Costello",
		phone: "767 676 7676",
		email: "costello@imonfirst.co",
		friends: ["Abbott", "Laurel"]
	}
];
*/

const findFriend = function(data, name, field) {
  const contact = data.find(contact => contact.name === name);
  if (!contact) {
    return "Not found";
  }

  const friend = data.find(ctct => ctct.name === contact.friends[0]);
  if (!friend) {
    return "Not found";
  }

  if (friend[field]) {
    const results = { name: friend.name };
    results[field] = friend[field];
    return results;
  } else {
    return "Not found";
  }
};

module.exports = { findFriend };
