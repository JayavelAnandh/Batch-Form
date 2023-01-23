import React, { useState } from "react";
import StudentDetails from './StudentDetails';
import StudentForm from "./StudentForm";
import { ExisitingStudentList } from "./data/ExisitingStudentList";

// Student List CRUD => Create, Read, Update, Delete
function StudentManager(props) {
    const [studentList, setStudentList] = useState(ExisitingStudentList);
    
    function addStudent(newStudent) {
        setStudentList([].concat(...studentList, newStudent));
    }

    function deleteStudent(idx) {
        studentList.splice(idx, 1)
        setStudentList([].concat(...studentList))
    }

    // function editStudent(idx) {
    //     const edited = {
    //         name: studentName,
    //         batch: studentBatch,
    //         gender: studentGender,
    //         yearsofExperience: studentExperience
    //     }
    //     studentList.splice(idx, 1, edited)
    //     setStudentList([].concat(...studentList))
    // }

    return (
        <div className="main-component">
            <header>
                <h1>{props.title}</h1>
            </header>

            <main className="main-segment">
                <h2>{props.description}</h2>
                <div className="containers">
                    <div className="card-containers">
                        <StudentForm addStudent={addStudent} />
                        {studentList.map((student, idx) => {
                            return (
                                <StudentDetails
                                    index={idx}
                                    data={student}
                                    deleteStudent={deleteStudent}
                                />);
                        })}
                    </div>
                </div>
            </main>
        </div>
    )
}
export default StudentManager;