import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import UnauthorizedError from "../../components/parts/UnauthorizedError/UnauthorizedError";
import {getAllUsers} from "../../store/Users/UserActionCreator";
import './UserProfile.css'

const UserProfile = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.auth.auth.isAuth);
    const users = useSelector((state) => state.user.list);
    const userId = useSelector((state) => state.auth.auth.userId);
    const loggedInUser = users.find(item => item.id === userId)

    useEffect(() => {
        dispatch(getAllUsers());
    }, []);

    return isAuth ? (
        <section className="gamesListPage">
            <h2>User Profile</h2>
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
            </div>
        </section>
    ) : (
        <UnauthorizedError/>
    );
};

export default UserProfile;
