import React, {useState} from 'react';
import {ReactComponent as UserAvatarComponent} from "../../../assets/userAvatar2.svg";
import ClipLoader from 'react-spinners/ClipLoader';
import axios from "axios";
import FloatingWindowSuccess from "../../floating-window-success/FloatingWindowSuccess";
import FloatingWindowFailed from "../../floating-window-failed/FloatingWindowFailed";

const DriverEntity = ({ driverFirstAndLastName, driverEmail, driverID, loadID }) => {

    const [isAssignSuccess, setIsAssignSuccess] = useState(false);
    const [isAssignFailed, setIsAssignFailed] = useState(false);
    const [isAssignLoading, setIsAssignLoading] = useState(false);

    const handleAssignLoad = async () => {
        setIsAssignLoading(true);

        try {
            // Assign the load to the driver
            const assignResponse = await axios.put(`http://localhost:8080/assign-load/${driverID}`, { loadID: loadID });

            // Update the loadAssignedDriverID field of the Load
            const updateResponse = await axios.put(`http://localhost:8080/update-load-assigning/${loadID}`, { loadAssignedDriverID: driverID });

            if (assignResponse.status === 200 && updateResponse.status === 200) {
                setIsAssignSuccess(true);
            } else {
                setIsAssignFailed(true);
            }
        } catch (error) {
            console.error('Error assigning load to driver:', error);
            setIsAssignFailed(true);
        }

        setIsAssignLoading(false);
    };

    return (
        <>
            {isAssignSuccess && <FloatingWindowSuccess text="You succesfully asigned load for driver"  />}
            {isAssignFailed && <FloatingWindowFailed text="Something went wrong. Try again"  />}
            <div className="driver-container-entity">
                <div className="driver-entity-info">
                    <UserAvatarComponent/>
                    <section>
                        <h2>{driverFirstAndLastName}</h2>
                        <p>{driverEmail}</p>
                        <p>{driverID}</p>
                        <p>{loadID}</p>
                    </section>
                </div>
                <button className="assign-driver-button" onClick={handleAssignLoad}>
                    {isAssignLoading ?
                        <>
                            <ClipLoader color="#fffff" loading={true} size={17} className="payment-loader"/>
                            Assigning...
                        </>
                        : 'Assign'}
                </button>
            </div>
        </>

    );
};

export default DriverEntity;