const mongoose = require('mongoose');
const Img = mongoose.model('Img');
const cloudinary = require('cloudinary');
require('../middleware/cloudinary');


module.exports = {
    add: async (req, res) => {
        try {
            if(await Img.findOne({name:req.body.name})){
                await Img.findOneAndDelete({name:req.body.name})
            }
            const fileUrl = req.body.image;
            const uploadResponse = await cloudinary.v2.uploader.upload(fileUrl , {
                upload_preset: 'ml_default',
            });
            const url = uploadResponse.secure_url;

            const insert = new Img();
            insert.name= req.body.name
            insert.Image = url
            await insert.save((err,done)=>{
                if(err) return console.log(err);
                res.json({message:"done",url})
            });
        } catch (err) {
            res.send(err)
            console.log(err);
        }
    },
    get: async (req, res) => {
        try {
            const read = await Img.find();
            obj={}
            read.map(item=>{
                let name = "image"+item.name
                obj[name] = item.Image
            })
            res.json(obj)
        } catch (err) {
            res.send(err)
        }
    },
    update: async (req, res) => {
        try {
            const fileUrl = req.body.image;
            const uploadResponse = await cloudinary.v2.uploader.upload(fileUrl, {
                upload_preset: 'ml_default',
            });
            const url = uploadResponse.secure_url;

            const update = await Img.findOneAndUpdate({name:req.body.name})
            update.Image = url

            await update.save((err,done)=>{
                if(err) return console.log(err);
                res.json({message:"done",url})
            });
            
        } catch (err) {
            res.json(err)
        }
    }
}