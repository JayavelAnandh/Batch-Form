import { useState } from "react";
import {
    Button,
    TextField
} from "@mui/material";

function StudentForm({ addStudent }) {
    const [studentName, setStudentName] = useState("");
    const [studentBatch, setStudentBatch] = useState("");
    const [studentGender, setStudentGender] = useState("");
    const [studentExperience, setStudentExperience] = useState("");

    return (
        <div className="student-form">
            <TextField
                label="Enter your Name"
                variant="outlined"
                fullWidth
                onChange={(event) => setStudentName(event.target.value)}
                value={studentName} />

            <TextField
                label="BatchName"
                variant="outlined"
                fullWidth
                onChange={(event) => setStudentBatch(event.target.value)}
                value={studentBatch} />

            <TextField
                label="Gender"
                variant="outlined"
                fullWidth
                onChange={(event) => setStudentGender(event.target.value)}
                value={studentGender} />

            <TextField
                label="Years of Experience"
                variant="outlined"
                fullWidth
                onChange={(event) => setStudentExperience(event.target.value)}
                value={studentExperience} />

            <Button variant="outlined" onClick={() => addStudent(
                {
                    id: 1,
                    name: studentName,
                    batch: studentBatch,
                    gender: studentGender,
                    yearsOfExperience: studentExperience
                }
            )}>
                + Add Data
            </Button>

        </div>
    )
}

export default StudentForm;