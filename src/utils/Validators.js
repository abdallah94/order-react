import validator from 'validator';
/**
 * Created by Fujitsu on 7/31/2017.
 */

export function validate(type, value) {
    switch (type) {
        case 'email':
            return validateEmail(value);
        case 'name':
            return validateName(value);
        case 'phone':
            return validatePhone(value);
        case 'area':
            return validateArea(value);
        case 'street':
            return validateStreet(value);
        case 'building':
            return validateBuilding(value);
        case 'floor':
            return validateFloor(value);
        case 'apartment':
            return validateApartment(value);

    }

}


function validateEmail(value) {
    if (value) {
        return validator.isEmail(value) ? 'success' : 'error';
    }

}

function validateName(value) {
    if (value) {
        if(value.length<3)
            return 'error';
        return validator.isAlpha(value) ? 'success' : 'error';
    }
}

function validatePhone(value) {
    if (value) {
        return value.length > 8 && value.length < 11 && validator.isMobilePhone(value, 'any') ? 'success' : 'error';
    }
}

function validateArea(value) {
    if (value) {
        return 'success';
    }
}

function validateStreet(value) {
    if (value) {
        return 'success';
    }
}

function validateBuilding(value) {
    if (value) {
        return 'success';
    }
}

function validateFloor(value) {
    if (value) {
        return 'success';
    }
}

function validateApartment(value) {
    if (value) {
        return 'success';
    }
}