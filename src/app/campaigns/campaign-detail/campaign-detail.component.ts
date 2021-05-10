import { Component, Inject, LOCALE_ID, OnDestroy, OnInit } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs";
import { GlobalService } from "src/app/services/global.service";
import { BsLocaleService } from "ngx-bootstrap/datepicker";
import { defineLocale, frLocale } from "ngx-bootstrap/chronos";

@Component({
  selector: "app-campaign-detail",
  templateUrl: "./campaign-detail.component.html",
  styleUrls: ["./campaign-detail.component.scss"],
})
export class CampaignDetailComponent implements OnInit, OnDestroy {
  private _destroyed$ = new Subject();
  selectedCampaignId: number;
  public infoForm: FormGroup;
  labels: any;
  submitted = false;
  mediaList = [];
  brands: any;
  requestDetail: any;
  constructor(
    private route: ActivatedRoute,
    private globalService: GlobalService,
    private formBuilder: FormBuilder,
    private localeService: BsLocaleService,
    @Inject(LOCALE_ID) public locale: string
  ) {
    defineLocale(this.locale, frLocale);
    this.localeService.use(this.locale);
    this.labels = this.globalService.messages;
    this.mediaList = this.globalService.mediaTypes;
    this.brands = this.globalService.brands;
  }
  get ctr() {
    return this.infoForm.controls;
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.initInfoForm();
      this.selectedCampaignId = params["id"];
      this.globalService.requestListSub.subscribe((res) => {
        this.requestDetail = res.find(
          (request) => request.requestId == this.selectedCampaignId
        );
        this.fillForm();
      });
    });
  }
  initInfoForm() {
    this.infoForm = new FormGroup({
      id: new FormControl(null),
      brand: new FormControl(null, Validators.required),
      campaignName: new FormControl(null, Validators.required),
      deadline: new FormControl(null, Validators.required),
      mediaArray: this.formBuilder.array([], [Validators.required]),
    });
  }
  fillForm() {
    this.infoForm.patchValue({
      id: this.requestDetail.requestId ? this.requestDetail.requestId : null,
      brand: this.requestDetail.brandId ? this.requestDetail.brandId : null,
      campaignName: this.requestDetail.campaignName
        ? this.requestDetail.campaignName
        : null,
      deadline: this.requestDetail.decisionDeadline
        ? new Date(this.requestDetail.decisionDeadline)
        : null,
    });
    let mediaFormArray = this.infoForm.get("mediaArray") as FormArray;
    mediaFormArray.patchValue(this.requestDetail.media);
  }
  onChange(mediaId: number, isChecked: boolean) {
    const mediaFormArray = <FormArray>this.infoForm.controls.mediaArray;

    if (isChecked) {
      mediaFormArray.push(new FormControl(mediaId));
    } else {
      let index = mediaFormArray.controls.findIndex((x) => x.value == mediaId);
      mediaFormArray.removeAt(index);
    }
  }
  submit() {
    this.submitted = true;

    if (this.infoForm.invalid) {
      return;
    }
  }
  ngOnDestroy(): void {
    this._destroyed$.next(true);
    this._destroyed$.unsubscribe();
  }
}
