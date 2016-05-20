import {Page, NavController, NavParams} from 'ionic-angular';  
import {MOCK_STOPS} from './mock-stops';


@Page({
  templateUrl: './build/pages/geton-page/geton-page.html'
})

export class GetOnDetailsPage{
  item;
  constructor(params: NavParams) {
    this.item = params.data.item;
    this.stops = params.data.stops;
  }
  stops = this.stops;
}