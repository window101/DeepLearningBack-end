const { pool } = require("../../../config/database");

async function insertFileInfo(fileinfo) {
    console.log(fileinfo)
    const connection = await pool.getConnection(async (conn) => conn);
    const fileQuery = `
        INSERT INTO FileInfo(title,category,content,email,virus_file) 
            VALUES(?);             
    `
    const [result] = await connection.query(
      fileQuery,fileinfo
    );
  connection.release();
  return result;
}

module.exports = {
    insertFileInfo,
};
  