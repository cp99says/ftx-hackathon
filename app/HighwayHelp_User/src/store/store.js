
import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react-lite"


class Store {
    selectedServices = [];

    constructor() {
        makeAutoObservable(this);
    }

    setSelectedServices(val) {
        this.selectedServices = val;
    }
}
export default new Store();