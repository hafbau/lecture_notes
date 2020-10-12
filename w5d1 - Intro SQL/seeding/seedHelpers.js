
const { Pool } = require('pg');
const connectionString = 'postgres://sbrj-ezir:RujFzcFaBazRkFro4bIsc_aHgKhJNN9j@ruby.db.elephantsql.com:5432/sbrjezir';
// const connectionString = 'postgres://pkdjsjxx:zJZe0UsbKUvERF7r6FTHazX_7kH2WjQ8@ruby.db.elephantsql.com:5432/pkdjsjxx';

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