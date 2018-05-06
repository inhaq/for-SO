import { Component, OnInit } from '@angular/core';
import { SellService, Staticdata } from "../shared/sell.service";
import * as data from "../static-data/iphone.json";

@Component({
  selector: 'app-sell-iphone',
  templateUrl: './sell-iphone.component.html',
  styleUrls: ['./sell-iphone.component.css'],
  providers: [ SellService ]
})
export class SellIphoneComponent implements OnInit {
  
  constructor(public sellService: SellService){
  }

  ngOnInit() {
    this.showData();
  }

  staticData : Staticdata;
  showData(){
    return this.sellService.getData().subscribe((data: Staticdata) => this.staticData = {
      model: data.model,
      provider: data.provider,
      storage: data.storage,
      condition: data.condition
    });
    }

}
