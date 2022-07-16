import {
    InputLabel,
    MenuItem,
    Select,
    Typography,
    Button,
    Modal,
    Box,
} from "@mui/material";
import Card from "react-bootstrap/Card";
import {
    faComputer,
    faBookOpenReader,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Form, Formik } from "formik";
import * as React from "react";
import * as Yup from "yup";
import { colors } from "../Theme/colors";
import TextInput from "../components/TextInput";
import CurriculamCard from "../components/CurriculamCard";

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

const AddCurriculam = () => {
    const validate = Yup.object({
        curriculamName: Yup.string().required("Curriculam Title is required"),
        curriculamID: Yup.number().required("Curriculam ID is required"),
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
                    curriculamName: "",
                    curriculamID: "",
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
                                    Add Curriculam
                                </Typography>
                                <TextInput
                                    name="curriculamName"
                                    label="Enter Curriculam Title"
                                    type="text"
                                />
                                <TextInput
                                    name="curriculamID"
                                    label="Enter ID"
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

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-md-12">
                        <Button
                            onClick={handleOpen}
                            variant="outlined"
                            style={{
                                backgroundColor: colors.purple,
                                color: colors.white,
                            }}
                        >
                            Add Curriculam
                        </Button>
                    </div>
                </div>

                {/* Curriculam Card start here */}

                <div className="row mt-3">
                    <div className="col-sm-12 col-md-4 mb-2">
                        <CurriculamCard />
                    </div>
                    <div className="col-sm-12 col-md-4 mb-2">
                        <CurriculamCard />
                    </div>
                    <div className="col-sm-12 col-md-4 mb-2">
                        <CurriculamCard />
                    </div>
                </div>

                {/* Curriculam Card end here */}
            </div>
        </>
    );
};

export default AddCurriculam;
