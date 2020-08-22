let functions = require("firebase-functions");
let cors = require("cors");
let admin = require("firebase-admin");
let express = require("express");
let serviceAccount = require("./applandproyects-firebase-adminsdk-k6yt4-87e319260b.json");
let bodyParser = require("body-parser");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://applandproyects.firebaseio.com"
});
let db = admin.firestore();
let app = express();
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
  try {
    let data = [];
    let collectionRef = db.collection(collections);
    let docSnap = await collectionRef.get();
    let collection = docSnap.docs.forEach((doc) => {
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
app.get("/categories", (req, res) => {
  getAll("categories", req, res);
});
///////////////////////////////////////////////////////////////////////////////////////////////////
app.get("/types", (req, res) => {
  getAll("types", req, res);
});
///////////////////////////////////////////////////////////////////////////////////////////////////
app.post("/category", async (req, res) => {
  try {
    let { id } = req.body;
    let docRef = await db.collection("categories").doc(id).get();
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
    });
    console.log(error.message);
  }
});
///////////////////////////////////////////////////////////////////////////////////////////////////
app.post("/type", async (req, res) => {
  try {
    let { id } = req.body;
    let docRef = await db.collection("types").doc(id).get();
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
    });
    console.log(error.message);
  }
});
///////////////////////////////////////////////////////////////////////////////////////////////////
app.post("/projectByID", async (req, res) => {
  try {
    let { id } = req.body;
    let docRef = await db.collection("projects").doc(id).get();
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
    });
    console.log(error.message);
  }
});
///////////////////////////////////////////////////////////////////////////////////////////////////
app.post("/user", async (req, res) => {
  try {
    let { id } = req.body;
    let docRef = await db.collection("users").doc(id).get();
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
    });
    console.log(error.message);
  }
});
///////////////////////////////////////////////////////////////////////////////////////////////////
/* app.post("/Delete", async(req, res) =>{
  try {
    let { id } = req.body;
    let docRef = db.collection("projects").doc(id).delete().then(function() {})
      res.status(201).json({
        success: true,
        message: "datos borrados correctamente",})
  } catch (error) {
    res.status(500).json({
      success: false,
      data: [],
      error,
    });
    console.log(error.message);
  }; */
//////////////////////////////////////////////////////////////////////////////////
app.post("/comments", async (req, res) => {
  let data = [];
  let { project } = req.body;
  try {
    let docRef = db.collection("comments");
    let docSnap = await docRef.where('project', '==', project).get();
    let comments = docSnap.docs.forEach((doc) => {
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
    console.log(error.message);
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////
app.post("/projects", async (req, res) => {
  let {
    img,
    title,
    author,
    category,
    date,
    type,
    description,
    qualification,
    authorDescription,
    longDescription,
    keyWords
  } = req.body;

  try {
    let docRef = await db.collection("projects").add({
      img,
      title,
      author,
      category,
      date,
      type,
      description,
      qualification,
      authorDescription,
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
    let docSnap = await projectsRef
      .where("author", "==", req.params.idAuthor)
      .get();
    let projects = docSnap.docs.forEach((doc) => {
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
app.get("/projectsById/:idProject", async (req, res) => {
  //console.log(req.params.idProject)
  try {
    let data = [];
    let projectsRef = db.collection("projects");
    let docSnap = await projectsRef.get();
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

app.post("/users", async (req, res) => {
  let { firstName, lastName } = req.body;

  try {
    let docRef = await db.collection("users").add({
      firstName,
      lastName,
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

////////////////////////////////////////////////////////////////////////////////////////////////////
exports.api = functions.https.onRequest(app);
