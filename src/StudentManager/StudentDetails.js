import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
} from "@mui/material";
import React from "react";

function StudentDetails({ index, data, editStudent, deleteStudent }) {
    const { id, name, batch, gender, yearsOfExperience } = data;
    return (
        <Card sx={{ maxWidth: 345 }} key={id} className="card">
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    ID : {id}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    Name : {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    batch :{batch}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    gender :{gender}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Experience:{yearsOfExperience}
                </Typography>
            </CardContent>
            <CardActions>
                {/* <Button color="secondary" onClick={() => editStudent(index)}>Edit</Button> */}
                <Button color="error" onClick={() => deleteStudent(index)}>Delete</Button>
            </CardActions>
        </Card>
    )
}
export default StudentDetails;
