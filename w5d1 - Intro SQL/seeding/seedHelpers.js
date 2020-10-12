
const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL;

exports.pool = new Pool({
  connectionString: connectionString,
});

exports.insertOneData = (tableName, dataObj) => `
  INSERT INTO "${tableName}" (${Object.keys(dataObj)})
  VALUES('${Object.values(dataObj).join("','")}');
`

exports.insertBulkData = (tableName, bulkArr) => {
  return `
    INSERT INTO "${tableName}" (${Object.keys(bulkArr[0])}) VALUES
    ${bulkArr
      .map(dataObj => `('${Object.values(dataObj).join("','")}')`)
    };
  `
}