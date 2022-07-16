import React from "react";
import {
    faComputer,
    faBookOpenReader,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "react-bootstrap/Card";

const CurriculamCard = () => {
    return (
        <>
            <Card className="card">
                <Card.Body>
                    <h6>B.Sc.(Honours) in CSE (2014 Curriculam)</h6>
                    <span className="cardSub">
                        {
                            <FontAwesomeIcon
                                style={{ marginRight: "4px" }}
                                icon={faComputer}
                            />
                        }{" "}
                        Computer Science and Enginnering
                    </span>
                    <p className="cardSub">
                        {
                            <FontAwesomeIcon
                                style={{ marginRight: "4px" }}
                                icon={faBookOpenReader}
                            />
                        }{" "}
                        B.Sc.(Honours) in Computer Science and Enginnering
                    </p>
                    <div className="cardBottom d-flex justify-content-start">
                        <div className="courses ">
                            <p>Courses</p>
                            <p>3</p>
                        </div>
                        <div className="credit">
                            <p>Total Credit</p>
                            <p>5</p>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default CurriculamCard;
