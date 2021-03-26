/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
export class FormModel {
    constructor() {
        this.model = {
            phone: null,
        };
    }

    validate(formData) {
        const errors = {
            phone: this.validatePhone(formData.phone),
        };

        return errors;
    }

    validatePhone(phone) {
        if (phone.length === 0) {
            return 'Phone is empty';
        }

        // const shouldStartWithPlusRegExp = /^\+380\d{2}\d{7}$/;

        // if (!shouldStartWithPlusRegExp.test(phone)) {
        //     return 'Wrong input';
        // }

        const shouldStartWithPlusRegExp2 = /^\+/;

        if (!shouldStartWithPlusRegExp2.test(phone)) {
            return 'Phone should start with +';
        }

        const shouldStartWithPlusRegExp3 = /^\+380/;

        if (!shouldStartWithPlusRegExp3.test(phone)) {
            return 'Phone code must contain 380';
        }

        const shouldStartWithPlusRegExp4 = /^\+380\d{9}$/;

        if (!shouldStartWithPlusRegExp4.test(phone)) {
            return 'Phone must contain nine numbers';
        }

        if (phone.length > 13) {
            return 'Phone is too long';
        }

        return undefined;
    }
}
