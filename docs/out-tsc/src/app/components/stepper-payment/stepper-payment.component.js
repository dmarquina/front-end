import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
var StepperPaymentComponent = /** @class */ (function () {
    function StepperPaymentComponent(_formBuilder, userService) {
        this._formBuilder = _formBuilder;
        this.userService = userService;
        this.isLinear = true;
        this.editingUser = true;
        this.editingPaymentMethod = true;
        this.users = [];
        this.paymentMethods = [];
    }
    StepperPaymentComponent.prototype.ngOnInit = function () {
        var user1 = {};
        user1.id = 1;
        user1.name = "Alejandro Rojas";
        user1.email = "arojas@s";
        user1.docType = "DNI";
        user1.docNumber = "2124124";
        var user2 = {};
        user2.id = 2;
        user2.name = "Diego Marquina";
        user2.email = "dmarquina@gmail.com";
        user2.docType = "PAS";
        user2.docNumber = "248654874";
        this.users.push(user1);
        this.users.push(user2);
        var pMethod1 = {};
        pMethod1.id = 1;
        pMethod1.country = "USA";
        pMethod1.currency = "USD (Dólar americano)";
        var payMethod2 = {};
        payMethod2.id = 2;
        payMethod2.country = "MEXICO";
        payMethod2.currency = "MXN (Pesos méxicanos)";
        this.paymentMethods.push(pMethod1);
        this.paymentMethods.push(payMethod2);
        this.firstFormGroup = this._formBuilder.group({
            nameCtrl: ['', Validators.required],
            emailCtrl: ['', Validators.email],
            docTypeCtrl: ['', Validators.required],
            docNumberCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            countryCtrl: ['', Validators.required],
            currencyCtrl: ['', Validators.required]
        });
    };
    StepperPaymentComponent.prototype.selectUser = function (id) {
        this.editingUser = false;
        this.firstFormGroup.disable();
        this.userSelected = this.users.find(function (u) { return u.id == id; });
        this.firstFormGroup.get('nameCtrl').setValue(this.userSelected.name);
        this.firstFormGroup.get('emailCtrl').setValue(this.userSelected.email);
        this.firstFormGroup.get('docTypeCtrl').setValue(this.userSelected.docType);
        this.firstFormGroup.get('docNumberCtrl').setValue(this.userSelected.docNumber);
    };
    StepperPaymentComponent.prototype.selectPaymentMethod = function (id) {
        this.editingPaymentMethod = false;
        this.secondFormGroup.disable();
        this.paymentMethodSelected = this.paymentMethods.find(function (p) { return p.id == id; });
        this.secondFormGroup.get('countryCtrl').setValue(this.paymentMethodSelected.country);
        this.secondFormGroup.get('currencyCtrl').setValue(this.paymentMethodSelected.currency);
    };
    StepperPaymentComponent.prototype.enableEditingUser = function () {
        this.firstFormGroup.enable();
    };
    StepperPaymentComponent.prototype.enableEditingPaymentMethod = function () {
        this.secondFormGroup.enable();
    };
    StepperPaymentComponent.prototype.saveUser = function () {
        if (this.editingUser)
            this.userService.createUser({
                "name": this.firstFormGroup.get('nameCtrl'),
                "email": this.firstFormGroup.get('emailCtrl'),
                "docType": this.firstFormGroup.get('docTypeCtrl'),
                "docNumber": this.firstFormGroup.get('docNumberCtrl')
            });
        this.enableEditingUser();
    };
    StepperPaymentComponent.prototype.refresh = function () {
        window.location.reload();
    };
    StepperPaymentComponent = tslib_1.__decorate([
        Component({
            selector: 'app-stepper-payment',
            templateUrl: './stepper-payment.component.html',
            styleUrls: ['./stepper-payment.component.scss'],
            providers: [UserService]
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, UserService])
    ], StepperPaymentComponent);
    return StepperPaymentComponent;
}());
export { StepperPaymentComponent };
//# sourceMappingURL=stepper-payment.component.js.map