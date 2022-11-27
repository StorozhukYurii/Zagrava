import { useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { setAuthorization } from "./authorizationSlice";

const dispatch = useDispatch()

export const checkAuthorizationSelector = createSelector(
    state => state.auth.isAuthorization,
    state => state.user.id,
    (isAuthorization, userId) => {
        if(userId === null){
            dispatch(setAuthorization(false))
        }
        console.log(isAuthorization)
        return isAuthorization
    }
)