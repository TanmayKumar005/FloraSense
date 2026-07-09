import React, { useState, useEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import logo from "./cblogo.png";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {  CardActionArea, CardMedia, Grid,  Button, CircularProgress } from "@material-ui/core";
import { FiUploadCloud } from "react-icons/fi";
import { DropzoneArea } from 'material-ui-dropzone';
import ReplayRoundedIcon from "@material-ui/icons/ReplayRounded";

const axios = require("axios").default;
const useStyles = makeStyles((theme) => ({
 
  uploadCard:{

    padding:35,

    textAlign:"center"
},

bigUploadIcon:{

    fontSize:75,

    color:"#43A047",

    marginBottom:20
},

uploadHeading:{

    fontSize:30,

    fontWeight:700,

    color:"#1B5E20",

    fontFamily:"Poppins"
},

uploadDescription:{

    marginTop:10,

    color:"#666",

    fontSize:15,

    marginBottom:30,

    lineHeight:1.7
},

dropZoneContainer:{

    marginTop:15
},

dropZone:{

    border:"2px dashed #81C784 !important",

    borderRadius:"22px !important",

    background:"#F8FFF8 !important",

    minHeight:"240px !important",

    display:"flex",

    justifyContent:"center",

    alignItems:"center",

    transition:"0.3s"
},
 resultCard:{

    animation:"fadeIn .7s ease",

    padding:30,

    textAlign:"center"
},

resultTitle:{

    fontSize:28,

    fontWeight:700,

    color:"#1B5E20",

    fontFamily:"Poppins",

    marginBottom:20
},

statusBadge:{

    display:"inline-block",

    padding:"10px 30px",

    borderRadius:30,

    color:"white",

    fontWeight:700,

    fontSize:20,

    marginBottom:25
},

healthy:{

    background:"#2E7D32"
},

early:{

    background:"#FB8C00"
},

late:{

    background:"#D32F2F"
},

confidenceLabel:{

    fontWeight:600,

    color:"#555",

    marginBottom:12,

    fontFamily:"Poppins"
},

progressBackground:{

    width:"100%",

    height:14,

    background:"#E0E0E0",

    borderRadius:20,

    overflow:"hidden"
},

progressBar:{

    height:"100%",

    background:
        "linear-gradient(90deg,#43A047,#66BB6A)",

    borderRadius:20,

    transition:"1s ease"
},

confidenceValue:{

    fontSize:24,

    fontWeight:700,

    color:"#2E7D32",

    marginTop:15,

    marginBottom:30
},

recommendTitle:{

    fontSize:20,

    fontWeight:700,

    color:"#1B5E20",

    marginBottom:12
},

recommendText:{

    color:"#555",

    lineHeight:1.8,

    fontSize:15,

    fontFamily:"Poppins"
},
 
  content:{

    padding:"35px"
},
  uploadHeader:{

    display:"flex",

    flexDirection:"column",

    alignItems:"center",

    marginBottom:20,

    marginTop:10
},

uploadIcon:{

    fontSize:70,

    color:"#43A047",

    marginBottom:15
},

uploadTitle:{

    fontSize:28,

    fontWeight:700,

    fontFamily:"Poppins",

    color:"#1B5E20"
},

uploadSubtitle:{

    fontSize:15,

    color:"#666",

    marginTop:6
},

uploadHint:{

    marginTop:8,

    color:"#999",

    fontSize:13
},
  grow: {
    flexGrow: 1,
  },
  clearButton: {
  width: "340px",
  height: "58px",
  margin: "25px auto",
  borderRadius: "16px",

  background: "linear-gradient(135deg, #2E7D32 0%, #43A047 100%)",

  color: "#fff",
  fontSize: "18px",
  fontWeight: 700,
  textTransform: "none",

  boxShadow: "0 10px 25px rgba(46,125,50,0.35)",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  transition: "all .3s ease",

  "&:hover": {
    background: "linear-gradient(135deg,#1B5E20,#388E3C)",
    transform: "translateY(-3px)",
    boxShadow: "0 18px 35px rgba(46,125,50,0.45)",
  },

  "&:active": {
    transform: "translateY(0)",
  },
},
  root: {
    maxWidth: 345,
    flexGrow: 1,
  },
  media: {
  height: 360,
  backgroundSize: "cover",
  backgroundPosition: "center",
},
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
 gridContainer: {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
},
 mainContainer: {
  
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",

  minHeight: "calc(100vh - 64px)",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  padding: "40px",
},
imageCard: {
  width: "480px",
  minHeight: "560px",
  margin: "0 auto",

  background: "#ffffffee",

  borderRadius: "22px",

  boxShadow: "0 18px 45px rgba(0,0,0,0.18)",

  overflow: "hidden",
},
  imageCardEmpty: {
    height: 'auto',
  },
  noImage: {
    margin: "auto",
    width: 400,
    height: "400 !important",
  },
  input: {
    display: 'none',
  },
  text: {
    color: 'white !important',
    textAlign: 'center',
  },
  buttonGrid: {
  display: "flex",
  justifyContent: "center",
  width: "100%",
},
 detail: {
  background: "#f8faf8",
  padding: "22px",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  borderTop: "1px solid #e0e0e0",
},
  appbar:{

    background:
        "linear-gradient(90deg,#1B5E20,#2E7D32,#43A047)",

    boxShadow:"0px 8px 30px rgba(0,0,0,.18)",

    height:90,

    display:"flex",

    justifyContent:"center"
},

toolbar:{

    display:"flex",

    justifyContent:"space-between",

    alignItems:"center",

    padding:"0px 40px"
},

leftSection:{

    display:"flex",

    alignItems:"center"
},

logo:{

    width:60,

    height:60,

    marginRight:18,

    borderRadius:"50%",

    background:"white",

    padding:5
},

brand:{

    fontSize:30,

    fontWeight:700,

    color:"white",

    fontFamily:"Poppins",

    letterSpacing:1
},

subtitle:{

    color:"#E8F5E9",

    fontFamily:"Poppins",

    fontSize:13,

    marginTop:-3
},

rightSection:{

    display:"flex",

    alignItems:"center"
},

menu:{

    color:"white",

    fontFamily:"Poppins",

    fontWeight:600,

    fontSize:15,

    background:"rgba(255,255,255,.15)",

    padding:"10px 18px",

    borderRadius:25
},
  loader: {
    color: '#be6a77 !important',
  }
}));
export const ImageUpload = () => {
  const classes = useStyles();
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [data, setData] = useState();
  const [image, setImage] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  let confidence = 0;

const sendFile = useCallback(async () => {
  if (!selectedFile) return;

  try {
    const formData = new FormData();
    formData.append("file", selectedFile);

    const res = await axios.post(
      process.env.REACT_APP_API_URL,
      formData
    );

    console.log(res.data);
    setData(res.data);
  } catch (err) {
    console.error(err);
  } finally {
    setIsloading(false);
  }
}, [selectedFile]);

  const clearData = () => {
    setData(null);
    setImage(false);
    setSelectedFile(null);
    setPreview(null);
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
  }, [selectedFile]);

useEffect(() => {
  if (!preview) {
    return;
  }
  setIsloading(true);
  sendFile();
}, [preview, sendFile]);

  const onSelectFile = (files) => {
    if (!files || files.length === 0) {
      setSelectedFile(undefined);
      setImage(false);
      setData(undefined);
      return;
    }
    setSelectedFile(files[0]);
    setData(undefined);
    setImage(true);
  };

  if (data) {
    confidence = (parseFloat(data.confidence) * 100).toFixed(2);
  }

  return (
    <React.Fragment>
      <AppBar position="static" className={classes.appbar}>

    <Toolbar className={classes.toolbar}>

        <div className={classes.leftSection}>

            <img
                src={logo}
                alt="FloraSense"
                className={classes.logo}
            />

            <div>

                <Typography className={classes.brand}>
                    FloraSense
                </Typography>

                <Typography className={classes.subtitle}>
                    AI Powered Plant Health Intelligence
                </Typography>

            </div>

        </div>

        <div className={classes.rightSection}>

            <Typography className={classes.menu}>
                Disease Detection
            </Typography>

        </div>

    </Toolbar>

</AppBar>
      <Container maxWidth={false} className={classes.mainContainer} disableGutters={true}>
        <Grid
          className={classes.gridContainer}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          
          <Grid item xs={12}>
            <Card className={`${classes.imageCard} ${!image ? classes.imageCardEmpty : ''}`}>
              {image && <CardActionArea>
                <CardMedia
                  className={classes.previewImage}
                  image={preview}
                  component="image"
                  title="Contemplative Reptile"
                />
              </CardActionArea>
              }
            
              {!image && (
<CardContent className={classes.uploadCard}>

    <FiUploadCloud className={classes.bigUploadIcon} />

    <Typography className={classes.uploadHeading}>
        Upload Plant Image
    </Typography>

    <Typography className={classes.uploadDescription}>
        Upload a clear image of any crop leaf.
        FloraSense will analyze it using AI.
    </Typography>

    <div className={classes.dropZoneContainer}>

        <DropzoneArea
            acceptedFiles={['image/*']}
            filesLimit={1}
            showAlerts={false}
            showPreviews={false}
            showPreviewsInDropzone={false}
            showFileNames={false}
            dropzoneText="Drag & Drop or Click to Browse"
            onChange={onSelectFile}
            dropzoneClass={classes.dropZone}
        />

    </div>

</CardContent>
)}
              {data && (
  <CardContent className={classes.resultCard}>

    <Typography className={classes.resultTitle}>
      Prediction Result
    </Typography>

    <div
      className={`${classes.statusBadge} ${
        data.class === "Healthy"
          ? classes.healthy
          : data.class === "Early Blight"
          ? classes.early
          : classes.late
      }`}
    >
      {data.class}
    </div>

    <Typography className={classes.confidenceLabel}>
      Confidence
    </Typography>

    <div className={classes.progressBackground}>
      <div
        className={classes.progressBar}
        style={{ width: `${confidence}%` }}
      ></div>
    </div>

    <Typography className={classes.confidenceValue}>
      {confidence}%
    </Typography>

    <Typography className={classes.recommendTitle}>
      Recommended Action
    </Typography>

    <Typography className={classes.recommendText}>
      {data.class === "Healthy" &&
        "Your plant appears healthy. Continue regular watering and monitor for any signs of disease."}

      {data.class === "Early Blight" &&
        "Remove infected leaves and apply a suitable fungicide. Avoid overhead watering."}

      {data.class === "Late Blight" &&
        "Isolate affected plants immediately. Apply copper-based fungicide and improve air circulation."}
    </Typography>

  </CardContent>
)}
              {isLoading && <CardContent className={classes.detail}>
                <CircularProgress
    size={55}
    thickness={5}
    className={classes.loader}
/>

<Typography className={classes.loadingTitle}>
    AI is analyzing your plant...
</Typography>

<Typography className={classes.loadingSubtitle}>
    This usually takes 1–2 seconds
</Typography>
              </CardContent>}
            </Card>
          </Grid>
          {data &&
            <Grid item className={classes.buttonGrid} >

             <Button
  variant="contained"
  className={classes.clearButton}
  onClick={clearData}
  startIcon={<ReplayRoundedIcon style={{ fontSize: 28 }} />}
>
  Analyze Another Plant
</Button>
            </Grid>}
        </Grid >
      </Container >
    </React.Fragment >
  );
};
