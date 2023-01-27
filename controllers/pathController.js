const Path = require ('../model/Path');

module.exports.path_post = async(req, res) => {
    const path = await Path.create({
        title: req.body.title, 
        description: req.body.description,
        photo:req.body.photo,
        points:req.body.points,
        collected:req.body.collected,
        longitude:req.body.longitude,
        latitude:req.body.latitude
      
      })
       res.json(path);
    }

module.exports.path_get = async(req, res) => {
    const path = await Path.find();
    res.json(path);
}
module.exports.path_delete = async(req, res) => {
    const retPath = await Path.findById(req.params._id);
    await Path.deleteOne({_id: req.params._id});
    res.json(retPath);
}
