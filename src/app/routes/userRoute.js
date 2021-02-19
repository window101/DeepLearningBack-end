

module.exports = function(app){
    
    
    const user = require('../controllers/userController');
    const posts = require('../controllers/postController');
    



    //const jwtMiddleware = require('../../../config/jwtMiddleware');

   // app.route('/app/signUp').post(user.signUp);
   // app.route('/app/signIn').post(user.signIn);
   // app.get('/check', jwtMiddleware, user.check);


  
   
    //app.post('/user/signup', function(req, res) {
    //    user.signup
    //});
    //app.post('/user/login', function(req, res) {
    //    user.login
    //});
    //app.get('/user/logout', function(req, res) {
    //    user.logout
    //});

    app.route('/user/signup').post(user.signup);
    app.route('/user/login').post(user.login);
    app.route('/user/logout').get(user.logout);
    app.use('/register', posts);


    //app.route('/register').post(posts.register);
    //app.post('/register', function(req, res) {
    //    posts.enrolling
    //})
    

    // 원래 

    //app.route('/user/signup').post(user.signup);
    //app.route('/user/login').post(user.login);
    //app.route('/user/logout').get(user.logout);

    //app.route('/register').post(posts.register);




















    //app.route('/post/register').post(posts.register);


    // 클라이언트에서 axios("http://localhost:4000/post/register")에 맞는 app.route('/post/register...)

    //app.route('/user/getEmail').get(user.getEmail);
};