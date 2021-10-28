const express = require('express')
const multer = require('multer')
const path =require ('path')
const uploadRouter = express.Router()
//multiple image
//callback:cb
const storage = multer.diskStorage({
    destination(req, file, cb) {
      cb(null, './uploads/')},
    filename(req, file, cb) {
      cb(null,`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
      )
    },
  })
  
  //check the type
  function checkFileTypes(file, cb) {
    const filetypes = /jpeg|jpg|png/
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype = filetypes.test(file.mimetype)
  
    if (extname && mimetype) {
      return cb(null, true)
    } else {
      cb('Images only!')
    }
  }
  
  const upload = multer({
    storage,
    fileFilter: function (req, file, cb) {
      checkFileTypes(file, cb)
    },
  })
  
  uploadRouter.post('/', upload.single('image'), (req, res) => {
    res.send(`/${req.file.path}`)
  })
  
  module.exports=uploadRouter
