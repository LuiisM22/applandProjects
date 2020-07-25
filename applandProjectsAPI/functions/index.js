const functions = require("firebase-functions");
const cors = require("cors");
const admin = require("firebase-admin");
const express = require("express");
const serviceAccount = require("./applandproyects-firebase-adminsdk-k6yt4-87e319260b.json");
const bodyParser = require("body-parser");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://applandproyects.firebaseio.com",
});
const db = admin.firestore();
const app = express();
app.use(
  cors({
    origin: true,
  })
);
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
////////////////////////////////////////////////////////////////////////////////////////////////////
async function getAll(collections, req, res) {
  /*try {
    let data=[]
    const collectionRef = db.collection(collections);
    const docSnap = await collectionRef.get();
    const collection = docSnap.docs.forEach(  (doc)=> {

       const project  = doc.data();
       var docRef = db.collection("categories").doc(`${project.category}`)
      docRef.get().then((category)=> {
        if(category.exists){
          categoria= category.data()
          data.push({
            id: doc.id ,
            ...doc.data()
          })
          return categoria
        }else{
          categoria = 1;
          data.push({
            id: doc.id ,
            ...doc.data()
          })
          return categoria
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    }); */
  try {
    let data = [];
    const collectionRef = db.collection(collections);
    const docSnap = await collectionRef.get();
    const collection = docSnap.docs.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    res.status(201).json({
      success: true,
      data,
      message: "correctamente",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: [],
      error,
    });
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
app.get("/projects", (req, res) => {
  getAll("projects", req, res);
});
///////////////////////////////////////////////////////////////////////////////////////////////////
app.post("/category", async (req, res) =>{
    try {
      const { id } = req.body;
      const docRef = await db.collection("categories").doc(id).get();
      //console.log(docRef.data());
      res.status(201).json({
        success: true,
        data: {
          id,
          ...docRef.data(),
        },
        message: "datos obtenidos correctamente",
      });
    } catch (error) {
      res.status(500).json({
      success: false,
      data: [],
      error,
      })
      console.log(error.message)
    }}
);
///////////////////////////////////////////////////////////////////////////////////////////////////
app.post("/type", async (req, res) =>{
    try {
      const { id } = req.body;
      const docRef = await db.collection("types").doc(id).get();
      //console.log(docRef.data());
      res.status(201).json({
        success: true,
        data: {
          id,
          ...docRef.data(),
        },
        message: "datos obtenidos correctamente",
      });
    } catch (error) {
      res.status(500).json({
      success: false,
      data: [],
      error,
      })
      console.log(error.message)
    }}
);
///////////////////////////////////////////////////////////////////////////////////////////////////
app.post("/user", async (req, res) =>{
    try {
      const { id } = req.body;
      const docRef = await db.collection("users").doc(id).get();
      //console.log(docRef.data());
      res.status(201).json({
        success: true,
        data: {
          id,
          ...docRef.data(),
        },
        message: "datos obtenidos correctamente",
      });
    } catch (error) {
      res.status(500).json({
      success: false,
      data: [],
      error,
      })
      console.log(error.message)
    }}
);
////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////
app.post("/projects", async (req, res) => {
  const {
    title,
    author,
    category,
    date,
    type,
    description,
    longDescription,
    keyWords,
  } = req.body;

  try {
    const docRef = await db.collection("projects").add({
      title,
      author,
      category,
      date,
      type,
      description,
      longDescription,
      keyWords,
    });
    if (docRef) {
      res.status(201).json({
        success: true,
        message: "se ha guardado correctamente",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "no se ha guardado correctamente",
    });
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////
app.get("/projectsByAuthor/:idAuthor", async (req, res) => {
  console.log(req.params.id);
  try {
    let data = [];
    let projectsRef = db.collection("projects");
    const docSnap = await projectsRef
      .where("author", "==", req.params.idAuthor)
      .get();
    const projects = docSnap.docs.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    res.status(201).json({
      success: true,
      data: data,
      message: "datos obtenidos correctamente",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: error,
      message: "Error al obtener datos ",
    });
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////
app.get("/projectById/:idProject", async (req, res) => {
  //console.log(req.params.idProject)
  try {
    let data = [];
    let projectsRef = db.collection("projects");
    const docSnap = await projectsRef.get();
    //console.log(projectsRef);
    docSnap.docs.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    data2 = data.find((data1) => (data1.id = req.params.idProject));
    console.log(data2);
    res.status(201).json({
      success: true,
      data: data2,
      message: "datos obtenidos correctamente",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: error,
      message: "Error al obtener datos ",
    });
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////
exports.api = functions.https.onRequest(app);
