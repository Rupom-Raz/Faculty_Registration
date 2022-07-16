import { Grid } from "@mui/material";
import { useState } from "react";
import { colors } from "../Theme/colors";

import { LockOutlined, LockOpen } from "@mui/icons-material";
import ButtonComp from "../components/Button/ButtonComp";
import SingleCard from "../components/RegistrationCard/SingleCard";

const Semester = () => {
    const [off, setOff] = useState(false);
    const [on, setOn] = useState(false);
    const onclick = () => {
        setOff(true);
    };

    return (
        <>
            <div
                className="App"
                style={{ backgroundColor: `${colors.white}` }}
            >
                <Grid container>
                    <Grid item xs={12} margin={3}>
                        <ButtonComp
                            onclick={onclick}
                            icon={<LockOutlined />}
                            text="Turn off Admisson"
                        />
                    </Grid>

                    <Grid container>
                        <Grid item>
                            <SingleCard
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
                                btnValue={off}
                                title="Faculty of CSE"
                                subTitle="Department of Computer Science and Enginnering"
                                degree="MSc"
                                admissonMessage="Admisson is Going On"
                                season="Summer-2022"
                            />
                        </Grid>
                    </Grid>
                    <hr />

                    {/* close admisson section */}

                    <Grid item xs={12} margin={3}>
                        <ButtonComp
                            icon={<LockOpen />}
                            text="Turn on Admisson"
                        />
                    </Grid>

                    <Grid container>
                        <Grid item>
                            <SingleCard
                                btn={on}
                                title="Faculty of BBA"
                                subTitle="Department of Business Administration"
                                degree="MBA"
                                season="Fall-2022"
                                admissonMessage="Admisson is Going On"
                            />
                        </Grid>
                        <Grid item>
                            <SingleCard
                                btnValue={on}
                                title="Faculty of BBA"
                                subTitle="Department of Business Administration"
                                degree="MBA(Excutive)"
                                season="Winter-2022"
                                admissonMessage="Admisson is Going On"
                            />
                        </Grid>
                        <Grid item>
                            <SingleCard
                                btnValue={on}
                                title="Faculty of CSE"
                                subTitle="Department of Computer Science and Enginnering"
                                degree="MSc"
                                admissonMessage="Admisson is Going On"
                                season="Summer-2022"
                            />
                        </Grid>
                        <Grid item>
                            <SingleCard
                                btnValue={on}
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
};

export default Semester;
