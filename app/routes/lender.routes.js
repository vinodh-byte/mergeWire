const { authJwt } = require("../middlewares");

const authcontroller=require("../controllers/auth.controller")
//const controller = require("../controllers/user.controller");

module.exports=function(app) {

    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
     // app.get("/api/testgetloans", [authJwt.verifyToken,authJwt.isAdmin], controller.allAccess);
    app.get("/api/getRole",[authJwt.verifyToken,authJwt.isLender], authcontroller.getRoleToken);

}