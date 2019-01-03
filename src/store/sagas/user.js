
import { call } from "redux-saga/effects";
import api from "../../services/api";

export function* userRequest(action) {
    
    const response = yield call(api.get, '/api')

    console.tron.log(response);
}