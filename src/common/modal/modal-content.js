import React, { Fragment } from "react";
import { UserActivityModal } from "../../components/user-activity/user-activity-modal";

export function ModalContent({ modalName, data }) {
    const getModalContent = (type) => {
        switch (type) {
            case "user-activity":
                return <UserActivityModal data={data} />;
            default:
                return;
        }
    }
    return (
        <Fragment>
            {modalName && getModalContent(modalName)}
        </Fragment>
    )
}