import { Cancel } from "@mui/icons-material";
import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    Grid,
    IconButton,
    styled,
    Typography,
} from "@mui/material";
import { colors } from "../../Theme/colors";
import MenuComp from "../Menu/MenuComp";
import avatar from "../../assets/Images/logo.png";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

const SingleCard = ({
    startDate,
    onStartDate,
    endDate,
    onEndDate,
    title,
    subTitle,
    degree,
    season,
    btn,
    admissonMessage,
    btnValue,
}) => {
    return (
        <>
            <Grid className="cardContainer" container justifyContent="center">
                <Grid item xs={10} style={{ textAlign: "center" }}>
                    <Card
                        sx={{ maxWidth: 350, maxHeight: 350 }}
                        style={{
                            backgroundColor: colors.fullwhite,
                            borderRadius: "13px",
                        }}
                    >
                        <CardHeader
                            action={
                                btnValue ? (
                                    <IconButton aria-label="settings">
                                        <Cancel
                                            style={{
                                                color: `${colors.purple}`,
                                            }}
                                        />
                                    </IconButton>
                                ) : (
                                    <IconButton>
                                        <MenuComp />
                                    </IconButton>
                                )
                            }
                            style={{ color: colors.purple }}
                            title={title}
                            subheader={subTitle}
                        />
                        <CardContent>
                            <Typography
                                style={{ fontWeight: 600, color: colors.dark }}
                                variant="body2"
                            >
                                {degree}
                            </Typography>
                            <Typography style={{ color: colors.purple }}>
                                {admissonMessage}
                            </Typography>
                            <Typography variant="body2">{season}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
};

export default SingleCard;
