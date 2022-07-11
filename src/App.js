import { Grid } from "@mui/material";
import { useState } from "react";
import { colors } from "../src/Theme/colors";
import "./App.css";
import ButtonComp from "./components/Button/ButtonComp";
import SingleCard from "./components/RegistrationCard/SingleCard";

function App() {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [off, setOff] = useState(false);
    const onclick = () => {
        setOff(true);
    };

    const onStartDate = (e) => {
        setStartDate(e.target.value);
    };
    const onEndDate = (e) => {
        setEndDate(e.target.value);
    };

    return (
        <>
            <div
                className="App"
                style={{ backgroundColor: `${colors.lightPurple}` }}
            >
                <Grid container>
                    <Grid item xs={12}>
                        <ButtonComp onclick={onclick} />
                    </Grid>

                    <Grid container>
                        <Grid item>
                            <SingleCard
                                startDate={startDate}
                                onStartDate={onStartDate}
                                endDate={endDate}
                                onEndDate={onEndDate}
                                btnValue={off}
                                title="Faculty of BBA"
                                subTitle="Department of Business Administration"
                                degree="MBA"
                                season="Fall-2022"
                                admissonMessage="Admisson is Going On"
                            />
                        </Grid>
                        <Grid item>
                            <SingleCard
                                startDate={startDate}
                                onStartDate={onStartDate}
                                endDate={endDate}
                                onEndDate={onEndDate}
                                btnValue={off}
                                title="Faculty of BBA"
                                subTitle="Department of Business Administration"
                                degree="MBA(Excutive)"
                                season="Winter-2022"
                                admissonMessage="Admisson is Going On"
                            />
                        </Grid>
                        <Grid item>
                            <SingleCard
                                startDate={startDate}
                                onStartDate={onStartDate}
                                endDate={endDate}
                                onEndDate={onEndDate}
                                btnValue={off}
                                title="Faculty of CSE"
                                subTitle="Department of Computer Science and Enginnering"
                                degree="MSc"
                                admissonMessage="Admisson is Going On"
                                season="Summer-2022"
                            />
                        </Grid>
                        <Grid item>
                            <SingleCard
                                startDate={startDate}
                                onStartDate={onStartDate}
                                endDate={endDate}
                                onEndDate={onEndDate}
                                btnValue={off}
                                title="Faculty of CSE"
                                subTitle="Department of Computer Science and Enginnering"
                                degree="MSc"
                                admissonMessage="Admisson is Going On"
                                season="Summer-2022"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default App;
