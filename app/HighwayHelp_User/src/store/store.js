
import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react-lite"


class Store {
    selectedServices = [];
    vehicleType = '';

    constructor() {
        makeAutoObservable(this);
    }

    setSelectedServices(val) {
        this.selectedServices = val;
    }
    setVehicleType(val) {
        this.vehicleType = val
    }
}
export default new Store();