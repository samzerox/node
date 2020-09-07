let verificaTocket = (req, res, next) => {
    // let token = req.get('token');
    let token = '';


    // res.json({
    //     token: token
    // });
    if (token == '') {
        res.redirect('/login');
    } else {
        next();
    }
};







module.exports = {
    verificaTocket
}