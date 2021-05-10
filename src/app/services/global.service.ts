import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class GlobalService {
  requestListSub = new BehaviorSubject([]);
  constructor() {}

  public messages = {
    status: "Status",
    name: "Name",
    type: "Type",
    brand: "Brand",
    submission: " Submission",
    required: " Le champ est obligatoire",
    campaignName: "Campaign name",
    media: "Media",
    deadline: "Deadline for decision",
  };
  public brands = [
    {
      brandId: 1,
      name: "Brand 1",
    },
    {
      brandId: 2,
      name: "Brand 2",
    },
    {
      brandId: 3,
      name: "Brand 3",
    },
    {
      brandId: 4,
      name: "Brand 4",
    },
    {
      brandId: 5,
      name: "Brand 5",
    },
    {
      brandId: 6,
      name: "Brand 6",
    },
    {
      brandId: 7,
      name: "Brand 7",
    },
    {
      brandId: 8,
      name: "Brand 8",
    },
    {
      brandId: 9,
      name: "Brand 9",
    },
    {
      brandId: 10,
      name: "Brand 10",
    },
    {
      brandId: 11,
      name: "Brand 11",
    },
    {
      brandId: 12,
      name: "Brand 12",
    },
    {
      brandId: 13,
      name: "Brand 13",
    },
    {
      brandId: 14,
      name: "Brand 14",
    },
    {
      brandId: 15,
      name: "Brand 15",
    },
    {
      brandId: 16,
      name: "Brand 16",
    },
    {
      brandId: 17,
      name: "Brand 17",
    },
    {
      brandId: 18,
      name: "Brand 18",
    },
    {
      brandId: 19,
      name: "Brand 19",
    },
    {
      brandId: 20,
      name: "Brand 20",
    },
    {
      brandId: 21,
      name: "Brand 21",
    },
    {
      brandId: 22,
      name: "Brand 22",
    },
  ];

  public mediaTypes: Array<any> = [
    {
      mediaId: 1,
      name: "LABELING_PACKAGING",
      value: "Labeling/Packaging",
    },
    {
      mediaId: 2,
      name: "NEW_PRODUCT_INNOVATION",
      value: "New Product/innovation",
    },
    {
      mediaId: 3,
      name: "OOH",
      value: "OOH",
    },
    {
      mediaId: 6,
      name: "PROMOTIONS",
      value: "Promotions",
    },
    {
      mediaId: 7,
      name: "RADIO",
      value: "Radio",
    },
    {
      mediaId: 12,
      name: "COLLABORATION",
      value: "Collaboration",
    },
  ];
}
