const express = require('express')
const Product = require('../models/product')
const multer = require('multer')

filename = "";
const myStorage = multer.diskStorage({
    destination: "./uploads",
    filename: (req, file, redirect) => {
      const date = Date.now();
      const extension = file.mimetype.split('/')[1];
      const name = "image" + date.toString() + "." + extension;
      filename = name;
      redirect(null, name);
    }
  });

const upload = multer({storage:myStorage})

const router = express.Router()

router.get('/', async(req,res)=>{
    try{
        const products = await Product.find()
        res.send(products)
    }
    catch{
        (err)=>{
            res.send(err)
        }
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
       geted = await Product.findOne({ _id: id });
      res.send(geted);
    } catch (err) {
      res.send(err);
    }
  });
  
  router.post("/", upload.any('image'), async(req,res)=>{
    try{
        data = req.body;
        product = new Product(data)
        product.image = filename ;
        savedProduct = await product.save()
        filename = ""
        res.send(savedProduct)
    }catch(err){
        res.send(err)
    }
})

router.delete("/:id",async(req,res)=>{
    const id = req.params.id;
    try {
        deleted = await Product.deleteOne({ _id: id });
       res.send(deleted);
     } catch (err) {
       res.send(err);
     }
})

router.put("/:id",async(req,res)=>{
    const id = req.params.id;
    try {
        data = req.body;
        updated = await  Product.findByIdAndUpdate({ _id: id },data,{new: true})
        res.send(updated);
     } catch (err) {
       res.send(err);
     }
})

module.exports= router