import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import { data } from "./data";
import "./studentCss.css";

function Studentdetails() {
    const [studentsData, setStudentsData] = useState(data);
    // const [studentid,Setstudentid]= useState("")
    const [studentName, setStudentName] = useState("");
    const [studentBatch, setStudentBatch] = useState("");
    const [studentGender, setStudentGender] = useState("");
    const [studentExperience, setStudentExperience] = useState("");

    function addData(){
        const newstudentData ={
            id  : studentsData.length+1,
            name : studentName,
            batch : studentBatch,
            gender :studentGender,
            yearsofExperience : studentExperience
        }
        const newDatacard = [].concat(...studentsData,newstudentData);
        setStudentsData(newDatacard);
    }

    function deleteData(idx){
        studentsData.splice(idx,1)
        setStudentsData([].concat(...studentsData))
    }

    function editData(idx){
        const editstudentData ={
            name : studentName,
            batch : studentBatch,
            gender :studentGender,
            yearsofExperience : studentExperience
        }
        studentsData.splice(idx,1,editstudentData)
        setStudentsData([].concat(...studentsData))
    }
    return (
        <div className="containers">
            <div className="input-section">
                {/* <TextField 
                label="Id" 
                variant="outlined" 
                fullWidth 
                onChange={(event)=> Setstudentid(event.target.value)}
                
                value={studentid}
                /> */}

                <TextField 
                label="Enter your Name" 
                variant="outlined" 
                fullWidth
                onChange={(event)=> setStudentName(event.target.value)}
                value={studentName} />

                <TextField 
                label="BatchName" 
                variant="outlined" 
                fullWidth 
                onChange={(event)=> setStudentBatch(event.target.value)}
                value={studentBatch}/>

                <TextField 
                label="Gender" 
                variant="outlined" 
                fullWidth 
                onChange={(event)=> setStudentGender(event.target.value)}
                value={studentGender}/>

                <TextField 
                label="Years of Experience" 
                variant="outlined" 
                fullWidth 
                onChange={(event)=> setStudentExperience(event.target.value)}
                value={studentExperience}/>

                <Button variant="outlined" onClick={()=>addData()}>
                     + Add Data
                </Button>

            </div>

            <div className="card-containers">
                {studentsData.map((value, idx) => {
                    return (
                        <Card sx={{ maxWidth: 345 }} key={value.id} className="card">
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    ID : {value.id}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                    Name : {value.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    batch :{value.batch}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    gender :{value.gender}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Experience:{value.yearsofExperience}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button color="secondary" onClick={()=>editData(idx)}>Edit</Button>
                                <Button color="error" onClick={()=>deleteData(idx)}>Delete</Button>
                            </CardActions>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
export default Studentdetails;
