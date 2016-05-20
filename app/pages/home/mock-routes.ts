import { Route } from './route';

export var MOCK_ROUTES: Route[] = [
  {"id": 11, "name": "61D", "description" : "Inbound", 
    "stops" : [
    {"name" : "Forbes Ave opp Amberson Ave", "time" : "3 min"},
    {"name" : "Fifth Ave at Wilkins Ave", "time" : "5 min"}
    ]
  },
  {"id": 11, "name": "61D", "description" : "Outbound", 
    "stops" : [
      {"name" : "Fifth Ave opp Aiken Ave", "time" : "6 min"},
      {"name" : "Fifth Ave opp Belle fibte St", "time" : "9 min"},
      {"name" : "Fifth Ave at Negley Ave", "time" : "11 min"}
    ]
  }
  // {"id": 12, "name": "61C", "description" : "Inbound",},
  // {"id": 12, "name": "61C", "description" : "Outbound"}, 
  // {"id": 13, "name": "61A", "description" : "Inbound"},
  // {"id": 13, "name": "61A", "description" : "Outbound"}
];
