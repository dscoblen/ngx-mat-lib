/**
 * This is only for local test
 */
import {BrowserModule} from "@angular/platform-browser";
import {NgModule, ViewEncapsulation} from "@angular/core";
import {Component} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


import {
    DateAdapter,
    MAT_DATE_FORMATS,
    MAT_DATE_LOCALE,
    MAT_LABEL_GLOBAL_OPTIONS,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    MatToolbarModule,
} from "@angular/material";

import {
    XMAT_DATE_FORMATS,
    XMAT_LOCALE_IT,
    XmatActionTextModule,
    XmatAccordionModule,
    XmatTimeInputModule,
    XmatTime,
    XmatMatDateLocale
} from "ngx-mat-lib";

@NgModule({
    exports: [
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatDialogModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatSnackBarModule,
        MatTableModule,
        MatSidenavModule,
        MatStepperModule,
        MatTableModule,
        MatToolbarModule,
        XmatAccordionModule
    ]
})
export class CdkMaterialImportsModule {
}

const today = new Date();
const minDate = new Date();
minDate.setDate(minDate.getDate() - 90);

@Component({
    selector: "mat-lib-test",
    templateUrl: "./test.html",
    styleUrls: [""],
    encapsulation: ViewEncapsulation.None
})
class AppComponent {

    title = "Test";
    icons = ["", "note_add", "delete_forever"];
    pippo = false;
    isUbiTimeInputRequired = true;
    isUbiTimeInputDisabled = false;
    account: any;
    textDisabled: boolean = false;
    textValue: string = "";
    testTimeModel = new XmatTime("12", "15");
    dpModel = new Date();

    minDate: Date = minDate;
    maxDate: Date = today;

    accordionOpened: boolean = true;
}

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        XmatTimeInputModule,
        CdkMaterialImportsModule
    ],
    providers: [
        {provide: DateAdapter, useClass: XmatMatDateLocale},
        {provide: MAT_DATE_FORMATS, useValue: XMAT_DATE_FORMATS},
        {provide: MAT_DATE_LOCALE, useValue: XMAT_LOCALE_IT}
    ]
})
class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);