import {makeAutoObservable, observable} from "mobx";

class Store {
    email = "";
    regUserDetails = "";
    usernameVal = "";
    teacherIdVal = "";
    authTokenVal = 0;

    constructor() {
        makeAutoObservable(this);
    }
    setAuthTokenVal(val) {
        this.authTokenVal = val;
    }
    setRegUserDetails(val) {
        this.regUserDetails = val;
    }
    setEmail(val) {
        this.email = val;
    }
    setUsernameVal(val) {
        this.usernameVal = val;
    }
    setTeacherIdVal(val) {
        this.teacherIdVal = val;
    }
}
export default new Store();
