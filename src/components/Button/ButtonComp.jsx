import { Button, Grid } from "@mui/material";
import { colors } from "../../Theme/colors";

const ButtonComp = ({ onclick, icon, text, admissonOnclick }) => {

    return (
        <>
            <Button
                onClick={onclick}
                style={{
                    backgroundColor: colors.purple,
                    color: colors.white,
                }}
                endIcon={icon}
                variant="outlined"
                className="btn"
            >
                {text}
            </Button>
        </>
    );
};

export default ButtonComp;
