AJAX with jQuery
===

### About dem tweets
// workflow for tweeter
- fetch a list of tweets from backend on page load
- make a new tweet
  - see the new tweet added to the tweet list

### Other thoughts

- Browser history and how it remains unaffected (pros/cons)
- When does it make sense to use AJAX (perceived performance, not just SPAs)
- Should we assume JS is turned on or have fallbacks to things like AJAX? (This is mostly opinion / speculation but worth a 2m convo)
- The response data doesn't have to be JSON, in many apps it's rendered HTML
    POSSIBLE DEMO: github.com's Projects (trello-like) feature. Create a note and view the response in the Network tab.
- The demo before the break uses CORS for cross domain AJAX... which jsonplaceholder.typicode.com has enabled.
- Suggestion: Take this opp to introduce CORS. They should write it down and read about it after the lecture. Don't spend too much time on it