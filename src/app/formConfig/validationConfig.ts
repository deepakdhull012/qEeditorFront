import {Validators} from '@angular/forms';

export class ValidationConfig {
    static loginConfig() : {[key : string]:any}{
        return {
            email : [null, [Validators.email, Validators.required]],
            password : [null, [Validators.required, Validators.minLength(6)]]
        }
    }

    static signUpConfig() : {[key : string]:any}{
        return {
            email : [null, [Validators.email, Validators.required]],
            password : [null, [Validators.required, Validators.minLength(6)]]
        }
    }

    static questionConfig() : {[key : string]:any}{
        return {
            question : [null, [Validators.required]],
            optionA : [null, [Validators.required]],
            optionB : [null, [Validators.required]],
            optionC : [null, [Validators.required]],
            optionD : [null, [Validators.required]],
            answer : [null, [Validators.required]],
            level : [null],
            topCategory : [null],
            category : [null],
            subCategory : [null],
            subsetId : [null]
        }
    }
}