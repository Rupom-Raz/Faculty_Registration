import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import * as React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { colors } from "../Theme/colors";
import {
    Box,
    Button,
    InputLabel,
    MenuItem,
    Modal,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import TextInput from "./TextInput";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "20px",
    boxShadow: 24,
    p: 4,
};

const CourseLists = () => {
    const validate = Yup.object({
        courseTitle: Yup.string().required("Course title is required"),
        courseCode: Yup.string()
            .max(10, "Must be 10 characters or less")
            .required("Course code is required"),
        courseHours: Yup.number()
            .max(5, "No longer than 5 hours")
            .min(2, "Must be longer than 2 hours")
            .required("Course hours is required"),
        credit: Yup.number()
            .max(3, "No longer than 3 credits")
            .min(1, "Must be longer than 1 credit")
            .required("Course credit is required"),
        program: Yup.string().required("Program is required"),
    });
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [program, setProgram] = React.useState("");

    const handleChange = (event) => {
        setProgram(event.target.value);
    };
    return (
        <>
            {/* Modal Part start */}
            <Formik
                validationSchema={validate}
                initialValues={{
                    courseTitle: "",
                    courseCode: "",
                    courseHours: "",
                    credit: "",
                    program: "",
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {(formik) => (
                    <Form>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style} component="form">
                                <Typography
                                    id="modal-modal-title"
                                    variant="h6"
                                    component="h2"
                                >
                                    Add Courses
                                </Typography>
                                <TextInput
                                    name="courseTitle"
                                    label="Course Title"
                                    type="text"
                                />
                                <TextInput
                                    name="courseCode"
                                    label="Course Code"
                                    type="text"
                                />
                                <TextInput
                                    name="credit"
                                    label="Course Credit"
                                    type="number"
                                />
                                <TextInput
                                    name="courseHours"
                                    label="Course Hours"
                                    type="number"
                                />

                                <InputLabel id="demo-simple-select-label">
                                    Select Programs
                                </InputLabel>
                                <Select
                                    required
                                    fullWidth
                                    variant="standard"
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={program}
                                    label="Select Programs"
                                    onChange={handleChange}
                                >
                                    <MenuItem value="B.Sc">B.Sc</MenuItem>
                                    <MenuItem value="M.Sc">M.Sc</MenuItem>
                                </Select>
                                <Button
                                    type="submit"
                                    variant="outlined"
                                    style={{
                                        margin: "10px 0px",
                                        backgroundColor: colors.purple,
                                        color: colors.white,
                                    }}
                                >
                                    Save
                                </Button>
                            </Box>
                        </Modal>
                    </Form>
                )}
            </Formik>
            {/* Modal Part end */}

            <Card className="courseCard mt-5">
                <Card.Body>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4">
                                <Button
                                    onClick={handleOpen}
                                    variant="outlined"
                                    style={{
                                        backgroundColor: colors.purple,
                                        color: colors.white,
                                    }}
                                >
                                    Add Course
                                </Button>
                            </div>
                            <div className="col-md-4">
                                <h5
                                    className="text-center"
                                    style={{ color: colors.gray }}
                                >
                                    List of Courses
                                </h5>
                            </div>
                            <div className="col-md-4 searchBox">
                                <form action="">
                                    <div className="form-group ml-3">
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Search courses"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <Table striped="columns">
                            <thead style={{ color: colors.gray }}>
                                <tr>
                                    <th>No </th>
                                    <th>Course Title</th>
                                    <th>Course Code</th>
                                    <th>Credit</th>
                                    <th>Hours Per Week</th>
                                    <th>Program</th>
                                </tr>
                            </thead>
                            <tbody className="tableRow">
                                <tr>
                                    <td>1</td>
                                    <td>Introduction to Computer</td>
                                    <td>CSE-1100</td>
                                    <td>3</td>
                                    <td>5</td>
                                    <td>B.Sc</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Algorithm and Complexity</td>
                                    <td>CSE-1200</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>M.Sc</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default CourseLists;
