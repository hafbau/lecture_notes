const fs = require('fs').promises;

// Problem: Read the data files ** in parallel **
// Sacrificing order for speed!

// A promise per file
const p1Promise = fs.readFile('data/p1.txt', 'utf8')
const p2Promise = fs.readFile('data/p2.txt', 'utf8')
const p3Promise = fs.readFile('data/p3.txt', 'utf8')
const p4Promise = fs.readFile('data/p4.txt', 'utf8')