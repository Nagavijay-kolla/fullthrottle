import React, { Fragment, useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Row, Col, Container } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { convertTime } from "../../helper/utils";

export function UserActivityModal({ data }) {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [activityTime, setActivityTime] = useState([]);
    const getTodaysActivity = () => {
        if (activityTime.length) {
            return activityTime.map(time => {
                return (
                    <div>{time}</div>
                )
            })
        }
        return false;
    };
    const handleChange = date => {
        setSelectedDate(date);
    };
    useEffect(() => {
        const date = selectedDate.toLocaleDateString();
        const { activity_periods } = data;
        const selected = activity_periods && activity_periods.filter((activity) => {
            return new Date(activity.start_time).toLocaleDateString() === date
        });
        const activityTimes = [];
        selected && selected.forEach((obj) => {
            const activity = `From ${convertTime(new Date(obj.start_time).toLocaleTimeString())} To ${convertTime(new Date(obj.end_time).toLocaleTimeString())}`
            activityTimes.push(activity);
        });
        setActivityTime(activityTimes);
    }, [selectedDate])
    return (
        <Fragment>
            <Container>
                <Row className="border-bottom pb-2">
                    <Col lg="4">ID: <b>{data.id}</b></Col>
                    <Col lg="4">Real Name: <b>{data.real_name}</b></Col>
                    <Col lg="4">TZ: <b>{data.tz}</b></Col>
                </Row>
                <Row className="py-4">
                    <Col lg="5">Select Date to see the activity: </Col>
                    <Col lg="7">
                        <DatePicker
                            selected={selectedDate}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row className="py-4">
                    <Col lg="5">{`Activity on ${selectedDate.toDateString()} is`}</Col>
                    <Col lg="7">{getTodaysActivity() || "No activity found."}</Col>
                </Row>
            </Container>
        </Fragment>
    )
}