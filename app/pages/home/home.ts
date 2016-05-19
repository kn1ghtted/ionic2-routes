import {GitHubService} from '../../services/github';
import {Route} from './route';  
import {MOCK_ROUTES} from './mock-routes';
import {GetOnDetailsPage} from './geton-details'
import {Page, NavController, NavParams} from 'ionic-angular';  



@Page({
    templateUrl: 'build/pages/home/home.html',
    providers: [GitHubService]
})
export class HomePage {  
    public foundRepos;
    public username;
    private numOfRoutes = 6;
    public selectedRoutes : Route[] = [];
    items = [];

    constructor(private github: GitHubService, 
                private nav: NavController) {
      console.log("Initializing routes");
      this.selectedRoutes = MOCK_ROUTES;
    }

    getRoutes() {
        // this.github.getRepos(this.username).subscribe(
        //     data => {
        //         this.foundRepos = data.json();
        //     },
        //     err => console.error(err),
        //     () => console.log('getRepos completed')
        // );
        console.log("Initializing routes");
        this.selectedRoutes = MOCK_ROUTES;
        // for (var i = 0; i < this.numOfRoutes; i++){
        //   var route = new Route();
        //   route.id = i;
        //   route.name = "BUS" + i.toString();
        //   route.description = "Empty";
        //   this.selectedRoutes.push(route);
        // }
    }

    showNav(route) {
        var item = {
        'title': 'Angular',
        'icon': 'angular',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#E63135'};

        item.color = '#E63135';
        item.title = route.name;
        item.description = route.description;
        item.icon = 'bus';
        this.nav.push(GetOnDetailsPage, { item: item });
    }
}