/**
 * Created by Abdallah on 3/19/2017.
 */

import {save, remove, load} from "react-cookie";
//save cookies
export function setCookie(name, value, path = "/", expires = 0) {
    if (expires !== 0) {
        save(name, value, {path: path, expires: expires});
    }
    else {
        save(name, value, {path: path});
    }

}

//remove cookies
export function removeCookie(name) {
    remove(name);
}

//load cookie
export function loadCookie(key) {
    return load(key);
}