import { regEx } from './constant'
import { loadState, saveState } from '../../utils/localstorage'


export function isValidMobileNo(mobileNo) {
    const panRegex =new RegExp(regEx.mobileNumber);
    return panRegex.test(mobileNo)
}

export function numberText(data) {
    let check =new RegExp(regEx.number);
    return check.test(data)
}

export function isValidEmail(data) {
    let check =new RegExp(regEx.email);
    return check.test(data)
}

export function alphabatesText(data) {
    let check =new RegExp(regEx.alphabates);
    return check.test(data)
}

export function alphabatesWithSpace(data) {
    let check =new RegExp(regEx.alphabatesWithSpace);
    return check.test(data)
}

export function alphaNumeric(data) {
    let check =new RegExp(regEx.alphaNumeric);
    return check.test(data)
}

export function emailOrMobileNumber(data) {
    let check =new RegExp(regEx.emailOrMobileNumber);
    return check.test(data)
}


export function fetchWithWait({ dispatch, action }) {
    return new Promise((resolve, reject) => {
        dispatch({ ...action, resolve, reject })
    })
}


export function generateOrderId() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    let orderId = result + Date.now()
    return orderId;
}

export function generateCartId() {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 4; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    let orderId = result + Date.now()
    return orderId;
}

export function sessionId() {
    var appuser = loadState("appuser");
    var userIdExpiry = loadState("userIdExpiry");

    if(!appuser || new Date() > new Date(userIdExpiry)){
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const expiryDate = new Date().setFullYear(new Date().getFullYear() + 1);
        const charactersLength = characters.length;
        
        for (let i = 0; i < 6; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        saveState('appuser', result);
        saveState('userIdExpiry', expiryDate);
        return result;
    }else{
        return appuser;
    }
}


export function setPath(key, value){
    localStorage.setItem(key, value);
}

export function removeLocal(key){
    localStorage.removeItem(key);
}

export function setUser(key, value){
    localStorage.setItem(key, JSON.stringify(value));
}

export function getToken(key){
    const token = localStorage.getItem(key);
    return token;
}


export const checkTokenExpiration = () => {
    let accessToken = null;

    const token = loadState("token");
    const expiration = loadState("expInToken")
    const refToken = loadState("refreshToken")

    // console.log("Check token Expiration and change", token, expiration)

    if (token && expiration && Date.now() < expiration) {
        accessToken =  token;
       return accessToken ;
    } else {
    axios.post('/api/refresh-token', { refToken })
    .then(res => {
        const { access_token, expires_in } = res.data;
        const expirationTime = Date.now() + expires_in * 1000;
        
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('access_token_expiration', expirationTime);
        
        accessToken = access_token;
    })
    .catch(err => {
        console.log(err);
    });
  }
}


export const finalSellPrice = (data) => {
    
    let finalPrice = []
    let finalDiscont = 0;

    data.forEach((element) => {
        const { purchasePrice : { sellPrice : { both, website } ,} ,} = element;
        const findPrice = both !== undefined ? both : website;
        findPrice !== undefined && findPrice.forEach((item) => {
            const { finalSellPrice, discountValue } = item;
            if(finalSellPrice !== null ){
                finalPrice.push(finalSellPrice);
                finalDiscont = discountValue;
            }
        })
    });

    let minprice = Math.min(...finalPrice)

    let price = {
        finalPrice : minprice,
        finalDiscont
    }

    return { finalPrice , finalDiscont } = price
} 