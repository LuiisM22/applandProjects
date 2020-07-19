const functions = require('firebase-functions');
const cors = require("cors");
const admin = require("firebase-admin");
const express = require("express");
const serviceAccount = require("./applandproyects-firebase-adminsdk-k6yt4-87e319260b.json");
const bodyParser = require('body-parser');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://applandproyects.firebaseio.com"
});
const db = admin.firestore();
const app = express();
app.use( cors ({origin:true}));
app.use(bodyParser.urlencoded({extended: false})); app.use(bodyParser.json());
////////////////////////////////////////////////////////////////////////////////////////////////////
async function getAll( collections, req, res){
  try {
    let data=[]
    const collectionRef = db.collection(collections);
    const docSnap = await collectionRef.get();
    const collection = docSnap.docs.forEach(  doc=> {
      data.push({
          id: doc.id ,
          ...doc.data(),
        })
  });
  res.status(201).json({
    success: true,
    data, 
    message:'correctamente'
});
} catch (error) {
  res.status(500).json({
    success: false,
    data:[] ,
    error
  });
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////
app.get('/projects',(req, res)=>{
    getAll('projects',req ,res);
  }); 
////////////////////////////////////////////////////////////////////////////////////////////////////
app.get('/categories',(req, res)=>{
  getAll('categories', req, res)
});
////////////////////////////////////////////////////////////////////////////////////////////////////
app.get('/types',(req, res)=>{
  getAll('types', req, res)
});
////////////////////////////////////////////////////////////////////////////////////////////////////
app.post('/projects',async(req, res) =>{
  const { name, author, category, date, type, description, longDescription, keyWords} = req.body;
  try {
    const docRef = await db.collection('projects').add({
      name, 
      author,
      category,
      date,
      type,
      description,
      longDescription,
      keyWords
    })
    if (docRef) {
      res.status(201).json({
        success: true,
        message:'se ha guardado correctamente'
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message:'no se ha guardado correctamente'
    }); 
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////
app.get('/projects/:idProject',async(req, res)=>{
  try {
    let data=[]
    const projectsRef = db.collection('projects');
    const docSnap = await projectsRef.where('category',"==" , req.params.idAuthor).get();
    const projects = docSnap.docs.forEach(  doc=> {
      data.push({
        id: doc.id ,
          ...doc.data()
      })
  });
  res.status(201).json({
    success: true,
    data:Data ,
    message:'datos obtenidos correctamente'
});
} catch (error) {
  res.status(500).json({
    success: false,
    data:[] ,
    message:'Error al obtener datos '
  });
}
});
////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////
exports.api =functions.https.onRequest( app );