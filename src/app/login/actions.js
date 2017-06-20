/**
 * Created by Abdallah on 4/24/2017.
 */

export const LOGIN = "LOGIN";

export function loginAction(role, id) {
    return {
        type: LOGIN,
        payload: {
            role: role,
            id: id,
            loggedIn: true,
        }
    }
}