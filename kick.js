var kickbox = require('kickbox').client('live_54e335706bda58033896998d68eb52fbce1be1305da5d1c0963dd8fd7ce9c5d9').kickbox();

kickbox.verify("varunXXXXXX@gmail.com", function (err, response) {
  console.log(response.body);
});

kickbox.verify("varun@gmail", function (err, response) {
  console.log(response.body);
});
