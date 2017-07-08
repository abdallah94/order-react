/**
 * Created by Fujitsu on 7/8/2017.
 */

export const START_LOADING = "START_LOADING";
export const FINISH_LOADING = "FINISH_LOADING";

export function startLoading() {
    return {
        type: START_LOADING,
        payload: {
            isLoading: true
        }
    };
}

export function finishLoading() {
    return {
        type: START_LOADING,
        payload: {
            isLoading: false
        }
    };
}