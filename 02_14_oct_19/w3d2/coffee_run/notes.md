// Coffee Run
// Users see => A list of coffees shops in the area
  // e.g Tims, Stardust
  // Attributes
    // Name, distance away

// Users see => View One shop
  // Attributes
    // Name, distance away, menu

// Admin => Add a shop

// Admin => Can update shop details

// Admin => Remove shop

// Users => Make orders

// Users => Update the order
// Users => Cancel the order
// Users => Order history


Creeate Read Update Delete / 

// req handling AND routing => controller
// data access / storage => models
// sends views / pages => views

ENDPOINTS / ROUTES
a like on a comment of a post
/users/posts/comments/reactions/like
/users/posts/comments/readActions/:like
/users/:user_id/posts/:post_id/comments/:comment_id/likes/:like

Browse
  GET /shops => GET /

  Brainstorm page wireframe
  ```js
    const shop = {
      id: '9l4jb',
      name: 'Stardust',
      location: 'Yo basement',
      ratings: 0.2,
      photo: 'https://i.pinimg.com/474x/e2/a0/21/e2a0218feadb95888aee0a16f571e355--scary-creepy-art.jpg',
      description: 'Seriously don\'t come here!'
    }
    // Could have been an array
    const shops = {
      '2n4gh': {
        id: '2n4gh',
        name: 'Thiago Rosso',
        location: 'Yo basement',
        ratings: 0.8,
        photo: 'https://st.hzcdn.com/fimgs/80a21b1604c404a6_2392-w500-h649-b0-p0--.jpg',
        description: 'Hot and sweaty, coffee like no other'
      },
      '1x7mk': {
        id: '2n4gh',
        name: 'Timzzy',
        location: 'Angel lounge',
        ratings: 1.0,
        photo: 'https://1.bp.blogspot.com/-yc76a4MTu5M/VL622tTJhFI/AAAAAAABj8M/LitqsuewcYU/s640/RJEB.jpg',
        description: 'Where the coffee tastes like feet'
      }
    }
  ```
Read
  GET /shops/:shop_id
Edit (idempotency)
  Get the form [GET /shops/:shop_id/edit]
  User submits form [IDEAL => PUT /shops/:shop_id (perhaps admin to be included)]
  Redirect to show updated shop [GET /shops/:shop_id]
  
  
Add
Get form to add new [GET /shops/new]
User submits [POST /shops]
Redirect [GET /shops]
 POST /shops


 Delete / destoy
  User clicks delete button [DELETE /shops/:shop_id]

