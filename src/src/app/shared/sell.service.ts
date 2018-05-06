import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Response } from "@angular/http";
import { HttpClient} from '@angular/common/http';

import "rxjs/add/operator/map";

export interface Staticdata {
  model: Array<Model>;
  provider: Array<Provider>;
  storage: Array<Storage>;
  condition: Array<Condition>;
}

export interface Model {
  name: string;
}

export interface Provider {
  carrier: string;
}

export interface Storage {
  size: number;
}

export interface Condition {
  quality: string;
}

@Injectable()
export class SellService {
  fileUrl = '../static-data/iphone.json';
  constructor(public http:HttpClient) {}

  getData(){
    return this.http.get(this.fileUrl);
  }

}
