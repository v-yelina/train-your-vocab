import React, {useEffect} from "react";
import { useSelector} from "react-redux";
import UnauthorizedError from "../../components/parts/UnauthorizedError/UnauthorizedError";
import '../styles/UserProfile.css'
import Button from "../../components/ui/Button/Button";
import {useNavigate} from "react-router-dom";

const UserProfile = () => {
    const isAuth = useSelector((state) => state.auth.auth.isAuth);
    const loggedInUser = useSelector((state) => state.user.current_user)
    const navigate = useNavigate()

    console.log(loggedInUser)


    if (loggedInUser) {
        return isAuth ? (
            <section className="gamesListPage">
                <h2>My Profile</h2>
                <div className='userInfo'>
                    <div className='labels'>
                        <span>User Name:</span>
                        <span>User Email:</span>
                        <span>Account Created:</span>
                    </div>
                    <div className='info'>
                        <span>{loggedInUser.username}</span>
                        <span>{loggedInUser.email}</span>
                        <span>{loggedInUser.createdAt}</span>
                    </div>
                    <div className='buttons'>
                        <Button
                            type="button"
                            title="My statistic"
                            onButtonClick={() => {
                                navigate("/userstatistic");
                            }}
                            className="btn-login"
                        />
                        <Button
                            type="button"
                            title="My dictionary"
                            onButtonClick={() => {
                                navigate("/userdictionary");
                            }}
                            className="btn-beige"
                        />
                    </div>
                </div>

            </section>
        ) : (
            <UnauthorizedError/>
        );
    } else {
        return <div className='unauthorized'>Something is wrong</div>;
    }
}

export default UserProfile;
