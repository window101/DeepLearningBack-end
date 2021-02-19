const { pool } = require("../../../config/database");


async function userNicknameCheck(Nickname) {
  const connection = await pool.getConnection(async (conn) => conn);
  const selectNicknameQuery = `
                SELECT Nickname 
                FROM User        
                WHERE Nickname = ?;
                `;  
  //const selectNicknameParams = [Nickname];
  const [NicknameRows] = await connection.query(
      selectNicknameQuery,
      Nickname //selectNicknameParams
  );
  connection.release();
  return NicknameRows;
}

async function insertUserInfo(insertUserInfoParams) {
  const connection = await pool.getConnection(async (conn) => conn);
  const insertUserInfoQuery = `
        INSERT INTO User(passwd, Nickname, email)
        VALUES (?,?,?);
    `;
  const insertUserInfoRow = await connection.query(
      insertUserInfoQuery,
      insertUserInfoParams
  );
  connection.release();
  return insertUserInfoRow;
}

async function userEmailCheck(emailInfo) {
  const connection = await pool.getConnection(async (conn) => conn);
  const checkUserQuery = `
        SELECT Nickname,passwd FROM User WHERE email=?;
    `
    const res = await connection.query(
      checkUserQuery,
      emailInfo
    );
    connection.release();
    return res;
}









/*
async function getUser() {
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();
    const selectUserQuery = 'SELECT * FROM User';
    const [rows] = (await connection.query(selectUserQuery));
    await connection.commit();
    return rows;
  } catch(err) {
    await connection.rollback();
    connection.release();
    console.log('Query error');
    return false;
  }finally {
    connection.release();
  }
}


async function userNicknameCheck(UserName) { // 유저닉네임 중복체크
  const connection = await pool.getConnection(async (conn) => conn);
  const selectNicknameQuery = `
                SELECT UserName 
                FROM User        
                WHERE UserName = ?;
                `;  //Userinfo
  //const selectNicknameParams = [Nickname];
  const [NicknameRows] = await connection.query(
      selectNicknameQuery,
      Nickname //selectNicknameParams
  );
  connection.release();
  return NicknameRows;
}


async function insertUserInfo(insertUserInfoParams) { // 유저 정보 입력
  const connection = await pool.getConnection(async (conn) => conn);
  const insertUserInfoQuery = `
        INSERT INTO User(passwd, UserName, IsDeleted)
        VALUES (?,?,0);
    `;
  const insertUserInfoRow = await connection.query(
      insertUserInfoQuery,
      insertUserInfoParams
  );
  connection.release();
  return insertUserInfoRow;
}

async function selectUserInfo(UserName) {
  const connection = await pool.getConnection(async (conn) => conn);
  const selectUserInfoQuery = `
                SELECT UserName,passwd 
                FROM User 
                WHERE UserName = ?;
                `;

  let selectUserInfoParams = [Nickname];
  const [userInfoRows] = await connection.query(
      selectUserInfoQuery,
      selectUserInfoParams
  );
  return [userInfoRows];
}


*/





















/*

// Signup

async function userEmailCheck(email) {
  const connection = await pool.getConnection(async (conn) => conn);
  const selectEmailQuery = `
                SELECT email, nickname 
                FROM UserInfo 
                WHERE email = ?;
                `;
  const selectEmailParams = [email];
  const [emailRows] = await connection.query(
    selectEmailQuery,
    selectEmailParams
  );
  connection.release();

  return emailRows;
}

async function userNicknameCheck(nickname) {
  const connection = await pool.getConnection(async (conn) => conn);
  const selectNicknameQuery = `
                SELECT email, nickname 
                FROM UserInfo 
                WHERE nickname = ?;
                `;
  const selectNicknameParams = [nickname];
  const [nicknameRows] = await connection.query(
    selectNicknameQuery,
    selectNicknameParams
  );
  connection.release();
  return nicknameRows;
}

async function insertUserInfo(insertUserInfoParams) {
  const connection = await pool.getConnection(async (conn) => conn);
  const insertUserInfoQuery = `
        INSERT INTO UserInfo(email, pswd, nickname)
        VALUES (?, ?, ?);
    `;
  const insertUserInfoRow = await connection.query(
    insertUserInfoQuery,
    insertUserInfoParams
  );
  connection.release();
  return insertUserInfoRow;
}

//SignIn
async function selectUserInfo(email) {
  const connection = await pool.getConnection(async (conn) => conn);
  const selectUserInfoQuery = `
                SELECT id, email , pswd, nickname, status 
                FROM UserInfo 
                WHERE email = ?;
                `;

  let selectUserInfoParams = [email];
  const [userInfoRows] = await connection.query(
    selectUserInfoQuery,
    selectUserInfoParams
  );
  return [userInfoRows];
}

*/

module.exports = {
  userNicknameCheck,
  insertUserInfo,
  userEmailCheck,
};
