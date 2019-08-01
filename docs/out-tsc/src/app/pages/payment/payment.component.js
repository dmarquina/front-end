import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = false;
    }
    PaymentComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    };
    PaymentComponent = tslib_1.__decorate([
        Component({
            selector: 'app-payment',
            templateUrl: './payment.component.html',
            styleUrls: ['./payment.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder])
    ], PaymentComponent);
    return PaymentComponent;
}());
export { PaymentComponent };
//# sourceMappingURL=payment.component.js.map