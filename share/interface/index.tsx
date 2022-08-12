export interface IDat {
  id: number;
  name: string;
  image: {medium: string};
  genres: [string];
  rating: {average: number};
}

export interface IData {
  data: IDat[];
}
