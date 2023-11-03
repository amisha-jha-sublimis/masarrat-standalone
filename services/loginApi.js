import Api from '.';
import { endpoints } from './endpoints';


export default class loginApi extends Api {
    ContactUs(data) {
        let url = this.buildUrl(endpoints.Contactus.contactus)
        return this.fetch(url, "POST", JSON.stringify(data)).then(response => response)
    }

}