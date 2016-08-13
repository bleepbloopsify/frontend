var exports = module.exports;

exports.get = function(req, res){
  return res.send('index www');
};

exports.post = function(req, res){
  return res.json({
    'message': 'Hello there!'
  });
};
