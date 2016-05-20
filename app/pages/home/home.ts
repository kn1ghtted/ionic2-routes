import {Route} from './route';  
import {MOCK_ROUTES} from './mock-routes';
import {GetOnDetailsPage} from '../geton-page/geton-page'
import {Page, NavController, NavParams} from 'ionic-angular';  

class NavItem {
    title : string;
    icon : string;
    description : string;
    color : string;
}

@Page({
    templateUrl: 'build/pages/home/home.html'}) 
export class HomePage {
    public foundRepos;
    public username;
    private numOfRoutes = 6;
    public selectedRoutes : Route[] = [];
    items = [];

    constructor(private nav: NavController) {
      console.log("Initializing routes");
      this.selectedRoutes = MOCK_ROUTES;
    }

    showNav(route) {
        var item = new NavItem();
        item.color = '#E63135';
        item.title = route.name;
        item.description = route.description;
        this.nav.push(GetOnDetailsPage, {item: item, stops : route.stops});
    }
}