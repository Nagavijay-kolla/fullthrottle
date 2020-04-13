import React, { useEffect, useState, Fragment } from "react";
import { } from "./user-activity.scss";
import { getUsersActivity } from "../../api/user-activity";
import { Popup } from "../../common/modal/modal";
import { Table, Container } from "react-bootstrap";
export function UserActivity() {
    const [members, setMembers] = useState();
    const [selectedmember, setSelectedMember] = useState();
    const [show, setShow] = useState();
    const fetchUsersActivity = async () => {
        const response = await getUsersActivity();
        console.log(response)
        setMembers(response);
    }
    const viewUserActivity = member => {
        setShow(true);
        setSelectedMember(member);
    }
    const handleClose = () => {
        setShow(false);
    }
    useEffect(() => {
        fetchUsersActivity();
    }, []);
    return (
        <Container className="pt-3">
            <h4>User Activity</h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>REAL NAME</th>
                        <th>TZ</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        members && members.map((member, index) => {
                            return (
                                <tr key={index} onClick={() => viewUserActivity(member)}>
                                    <td>{member.id}</td>
                                    <td>{member.real_name}</td>
                                    <td>{member.tz}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <Popup
                show={show}
                handleClose={handleClose}
                modalName="user-activity"
                modalTitle="User Activity"
                data={selectedmember}
            />  
        </Container>
    );
};