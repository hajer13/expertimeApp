import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subject } from "rxjs";
import * as data from "../payload.json";
import { GlobalService } from "../services/global.service";

@Component({
  selector: "app-campaigns",
  templateUrl: "./campaigns.component.html",
  styleUrls: ["./campaigns.component.scss"],
})
export class CampaignsComponent implements OnInit, OnDestroy {
  private _destroyed$ = new Subject();
  public requestList = [];
  brands: any;
  public messages: any;
  public headers = [];
  public searchForm: FormGroup;
  public brandsForm: FormGroup;
  requests = [];
  constructor(
    private globalService: GlobalService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.searchForm = this.formBuilder.group({
      search: [""],
    });
    this.brandsForm = this.formBuilder.group({
      brands: [""],
    });
    this.messages = this.globalService.messages;
    this.headers = [
      this.messages.status,
      this.messages.name,
      this.messages.type,
      this.messages.brand,
      this.messages.submission,
    ];
  }

  ngOnInit(): void {
    this.requests = data.requests.map((item) => this.parseRequest(item));
    this.requestList = this.requests;
    this.globalService.requestListSub.next(this.requests);
    this.brands = this.globalService.brands;
  }
  parseRequest(request): any {
    let parsedRequest = {
      requestId: request.requestId,
      requestStatus: request.requestStatus.value,
      campaignName: request.campaignName,
      type: request.advice ? "Advice" : "Request",
      brand: request.brand.name,
      brandId: request.brand.brandId,
      submission: request.submittedDate
        ? request.submittedDate
        : request.createdDate
        ? request.createdDate
        : request.updatedDate,
      decisionDeadline: request.decisionDeadline,
      media: request.media,
    };
    return parsedRequest;
  }
  searchActionClicked() {
    const filterBy = (<HTMLInputElement>document.getElementById("searchPanel"))
      .value;
    this.requestList =
      filterBy !== "" ? this.performSearchFilter(filterBy) : this.requests;
  }

  performSearchFilter(filterBy) {
    filterBy = filterBy.toLocaleLowerCase();
    return this.requestList.filter(
      (request) =>
        request.campaignName.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
        request.type.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
        request.requestStatus.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
        request.brand.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  listFilter() {
    let value = this.brandsForm.value.brands;
    this.requestList =
      value != null ? this.performFilter(value) : this.requests;
  }

  performFilter(filterBy: string) {
    return this.requests.filter((item) => item.brandId == filterBy);
  }

  goToDetails(id) {
    this.router.navigate([`${id}`], { relativeTo: this.route });
  }
  ngOnDestroy(): void {
    this._destroyed$.next(true);
    this._destroyed$.unsubscribe();
  }
}
