import {Component, Inject} from "@angular/core";
import {MatSnackBarRef, MAT_SNACK_BAR_DATA} from "@angular/material";
import {XmatSnackBarData} from "../../xmat-models/index";

@Component({
    selector: "xmat-snack-bar",
    templateUrl: "../tpl/xmat-snack-bar.component.html",
    styleUrls: ["../scss/xmat-snack-bar.component.scss"]
})
export class XmatSnackBarComponent {

    constructor(private snackBarRef: MatSnackBarRef<XmatSnackBarComponent>,
                @Inject(MAT_SNACK_BAR_DATA) public data: XmatSnackBarData) {
        this.data.showAction = this.data.showAction && !!this.data.actionText;
    }

    closeSnack() {
        if (typeof this.data.actionCallback === typeof isNaN) {
            this.data.actionCallback();
        }
        this.snackBarRef.dismiss();
    }
}
