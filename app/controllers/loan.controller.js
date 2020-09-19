const config = require("../config/auth.config");
const db = require("../models");
const Loan = db.loan;
exports.findLoans = (req, res) => {
    Loan.find()
        .populate("users")
        .exec((err, result) => {
            if (err) {
                res.status(200).send(err);
            }
            res.status(200).send(result);
        });
       // res.status(200).send("Hello");
  };

  exports.saveLoans = (req, res) => {
    const loan = new Loan({
        price: req.body.price,
        name:  req.body.price,
        status:  req.body.status,
        users:req.userId
      });
      loan.save((err, loan) => {
            if (err) {
            res.status(500).send({ message: err });
            return;
            }
            res.status(200).send(loan);
        });
       // res.status(200).send("Hello");
  };
  exports.getLoanById = (req, res) => {
    Loan
       .find({users:req.userId})
       .exec(function(err, result) {      
            if (err) {
            res.status(500).send({ message: err });
            return;
            }
            res.status(200).send(result);
        });
  };

 
  exports.updateLoan = (req, res) => {
    Loan.findById(req.params.id, function(err, p) {
        if (!p)
          return res.status(404).send("Failed");
        else {
          // do your updates here
          p.status =req.body.status;      
          p.save(function(err) {
            if (err)
              console.log('error')
            else
              
              res.status(200).send("Success");
          });
        }
      });
  };

  




