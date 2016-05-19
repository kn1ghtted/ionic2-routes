import {Page, NavController, NavParams} from 'ionic-angular';  

@Page({
  templateUrl: './build/pages/home/navPage.html',
})

export class GetOnDetailsPage{
  item;
  constructor(params: NavParams) {
    this.item = params.data.item;
  }
}