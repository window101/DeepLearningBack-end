const {pool} = require('../../../config/database');
const {logger} = require('../../../config/winston');

//const jwt = require('jsonwebtoken');
const regexEmail = require('regex-email');
const crypto = require('crypto');
const secret_config = require('../../../config/secret');
const { constants } = require('buffer');


const postDao = require('../dao/postDao');
const multer = require('multer');
const path = require("path");
const express = require('express');
const router = express.Router();
const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "virus_contents");
    },
    filename: function(req, file, callback) {
        let extension = path.extname(file.originalname);
        let basename = path.basename(file.originalname, extension);
        let date_now = new Date();
        let d_Month = date_now.getMonth() +1;
        d_Month = (parseInt(d_Month / 10, 10) == 0) ? "0" + d_Month : d_Month;
        const d_Day = (parseInt(date_now.getDate() / 10, 10) == 1) ? "0" + date_now.getDate() : date_now.getDate();
        callback(null, basename + "_" + date_now.getFullYear() + d_Month + d_Day + "_" + date_now.getHours() + date_now.getMinutes() + date_now.getSeconds() + extension);
    }
})
const upload = multer({ storage })
router.post("/", upload.single("video_upload"), async (req, res) => { 
    console.log("asdfs");
    const title = req.body.title;
    console.log(title);
    const content = req.body.content;
    const category = req.body.category;
    //const nickname = req.session.nickname; 
    const email = req.session.email;
    console.log("emai from 로직");
    const virus_file = req.file.filename;
    //const userId = req.session.u_id;
    const insert_value = [title,category,content,email,virus_file];
    
    try {
        const insert_result = await postDao.insertFileInfo(insert_value);
        console.log(insert_result)
        res.json({ resultCode:true, msg:"글 등록이 완료되었습니다" });
    }catch(err) {
        console.log(err);
        res.json({ resultCode:false, msg:"글 등록이 실패했습니다 "});
    }
})
module.exports = router;

/*
exports.register = async function(req, res) {
    
    const title = req.body.title;
    console.log(title);
    const content = req.body.content;
    const category = req.body.category;
    //const nickname = req.session.nickname; 
    const email = req.session.email;
    const virus_file = req.file.filename;
    //const userId = req.session.u_id;
    const insert_value = [title,category,content,email,virus_file];
    
    try {
        const insert_result = await postDao.insertFileInfo(insert_value);
        console.log(insert_result)
        res.json({ resultCode:true, msg:"글 등록이 완료되었습니다" });
    }catch(err) {
        console.log(err);
        res.json({ resultCode:false, msg:"글 등록이 실패했습니다 "});
    }
}
*/

    
/*
router.post("/", upload.single("video_upload"), async (req, res) => {
    // 클라이언트의 formData의 key와 같아야 한다
    const title = req.body.title;
    const content = req.body.content;
    const category = req.body.category;
    // const nickname = req.session.nickname; session nickname은 되는지 모르겠다
    const email = req.session.email;
    console.log(email);
    
    const virus_file = req.file.filename;
    //const userId = req.session.u_id;
    const insert_value = [title,category,content,email,virus_file];
    
    try {
        const insert_result = await postDao.insertFileInfo(insert_value);
        console.log(insert_result)

        res.json({ resultCode:true, msg:"글 등록이 완료되었습니다" });
    }catch(err) {
        console.log(err);
        res.json({ resultCode:false, msg:"글 등록이 실패했습니다 "});
    }
});

module.exports = router;
*/

/*
router.get("/", async(req, res, next) => {
    try {
        const result = await postDao.
    }catch(err) {
        console.log(err);
        res.json({ resultCode:false, msg:"게시글을 불러오지 못했습니다"});
    }
})
*/






