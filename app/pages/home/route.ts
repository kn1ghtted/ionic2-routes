export class Stop {
  name : string;
  time : string;
}

export class Route {
  id : number;
  name : string;
  description : string;
  stops : Stop[];
}