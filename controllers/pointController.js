const Point = require ('../model/Point');


module.exports.point_post = async(req, res) => {
    const point = await Point.create({
        coordinates:[ req.body.longitude, req.body.latitude],
        value:req.body.value
        // points:req.body.points,
        // collected:req.body.collected,
        // longitude:req.body.longitude,
        // latitude:req.body.latitude
      })
       res.json(point);
    }

module.exports.point_get = async(req, res) => {
    const point = await Point.find({location:{$near : {$geometry:{type:"Point",coordinates:[req.body.longitude,req.body.latitude]},$maxDistance:500}}});
    console.log(point.length);
    const pickedDocs = [];
    const doc =  await getSomsDocs(point,req.body.value,pickedDocs);
    res.json(doc);
}
const getSomsDocs = async(doc,amount,picked) =>{
    if(amount <= 0){
        return picked
    }else{
        const randomIndex = Math.floor(Math.random() * doc.length);
        picked.push(doc[randomIndex]);
        doc.splice(randomIndex,1)
        return await getSomsDocs(doc,amount-1,picked)
    }
}

//delete a point by id
module.exports.point_delete = async(req, res) => {
    const retPoint = await Point.findById(req.params._id);
    await Point.deleteOne({_id: req.params._id});
    res.json(retPoint);
}

module.exports.createDummyData = async(req,res) =>{
    const zuidOost = { type: 'Point', coordinates: [51.49303271056819, 4.293991829181514] };
    const rabobank = { type: 'Point', coordinates: [51.49210869058752, 4.293080623376294] };
    const groffen = { type: 'Point', coordinates: [51.49225754613385, 4.292769369932292] };
    const politiebureau = { type: 'Point', coordinates: [51.493237733725415, 4.294537650367783] };
    const curio = { type: 'Point', coordinates: [51.493816287291345, 4.292498714707853] };
    const parade = { type: 'Point', coordinates: [51.49349642090475, 4.291939779756765] };
    const woonsquare = { type: 'Point', coordinates: [51.49344632230043, 4.292258962596638] };
    const hotelDeDraak = { type: 'Point', coordinates: [51.49464769597015, 4.286489938615675] };
    const ijssalonLik = { type: 'Point', coordinates: [51.494752384630424, 4.285930136414714] };
    const athene = { type: 'Point', coordinates: [51.49497507512153, 4.285638862093958] };
    const jamin = { type: 'Point', coordinates: [51.493469619521726, 4.290550905898466] };
    const point = await Point.create({
        description: "zuidOost",
        location: zuidOost,
        value:1
      });
      const point1 = await Point.create({
        description: "rabobank",
        location: rabobank,
        value:1
      });
      const point2 = await Point.create({
        description: "groffen",
        location: groffen,
        value:1
      });
      const point3 = await Point.create({
        description: "politiebureau",
        location: politiebureau,
        value:1
      });
      const point4 = await Point.create({
        description: "curio",
        location: curio,
        value:1
      });
      const point5 = await Point.create({
        description: "parade",
        location: parade,
        value:1
      });
      const point6 = await Point.create({
        description: "woonsquare",
        location: woonsquare,
        value:1
      });
      const point7 = await Point.create({
        description: "hotelDeDraak",
        location: hotelDeDraak,
        value:1
      });
      const point8 = await Point.create({
        description: "ijssalonLik",
        location: ijssalonLik,
        value:1
      });
      const point9 = await Point.create({
        description: "athene",
        location: athene,
        value:1
      });
      const point10 = await Point.create({
        description: "jamin",
        location: jamin,
        value:1
      });
       res.json(point);   
}
