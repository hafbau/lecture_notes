const { albums, songs } = require('./albumsSongsData');
const { pool, insertBulkData } = require('./seedHelpers');

const createAlbumSongTable = () => `
  -- First delete table if it already exists
  DROP TABLE IF EXISTS songs;
  DROP TABLE IF EXISTS albums;

  -- Create table
  CREATE TABLE albums (
    id SERIAL PRIMARY KEY NOT NULL,
    album_name TEXT NOT NULL,
    artist_name TEXT NOT NULL,
    release_date DATE NOT NULL
  );
  
  CREATE TABLE songs (
    id SERIAL PRIMARY KEY NOT NULL,
    song_name TEXT NOT NULL,
    track_number INTEGER NOT NULL,
    rating INTEGER NOT NULL,
    album_id INTEGER NOT NULL REFERENCES albums(id) ON DELETE CASCADE
  );
`;

pool.query(createAlbumSongTable())
  .then(() => {
    const query = insertBulkData('albums', albums);
    return pool.query(query);
  })
  .then((resAlbums) => {
    console.log('Albums inserted :>> ', resAlbums.rowCount);
    const query = insertBulkData('songs', songs);
    return pool.query(query);
  })
  .then((result) => {
    console.log('Songs inserted :>> ', result.rowCount);
    console.log('Insertion done');
  })
  .catch(err => console.error('ERROR', err))
  .finally(() => pool.end())