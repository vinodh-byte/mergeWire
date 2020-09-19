const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
const loancontroller = require("../controllers/loan.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

 
  app.get("/api/getloans", [authJwt.verifyToken,authJwt.isAdmin], loancontroller.findLoans);
  app.post("/api/saveloans",[authJwt.verifyToken,authJwt.isBorrower],loancontroller.saveLoans);
  app.get("/api/getloansBorrower", [authJwt.verifyToken,authJwt.isBorrower], loancontroller.getLoanById);
  app.put("/api/setLoanStatus/:id",[authJwt.verifyToken,authJwt.isLender],loancontroller.updateLoan);


  app.get(
    "/api/test/mod",
    [authJwt.verifyToken],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken],
    controller.adminBoard
  );
};
