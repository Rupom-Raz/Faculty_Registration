import { LockOutlined } from "@mui/icons-material";
import { Button, Grid } from "@mui/material";
import { colors } from "../../Theme/colors";

const ButtonComp = ({onclick}) => {
    return (
        <>
            <Button
                onClick={onclick}
                style={{
                    backgroundColor: colors.purple,
                    color: colors.white,
                }}
                endIcon={<LockOutlined />}
                variant="outlined"
                className="btn"
            >
                Turn off Admisson
            </Button>
        </>
    );
};

export default ButtonComp;
