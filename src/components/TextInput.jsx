import { TextField } from "@mui/material";
import React from "react";
import { useField, ErrorMessage } from "formik";

const TextInput = ({ label, type, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            <div className="mb-2">
                <TextField
                    {...field}
                    {...props}
                    autoComplete="off"
                    type={type}
                    style={{ marginBottom: "5px" }}
                    fullWidth
                    id="standard-basic"
                    label={label}
                    variant="standard"
                />
                <ErrorMessage
                    component="div"
                    name={field.name}
                    className="error"
                />
            </div>
        </>
    );
};

export default TextInput;
