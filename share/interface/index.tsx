export interface IDat {
  id: number;
  image: {medium: string};
  name: string;
  genres: [string];
  rating: {average: number};
  summary: string;
  schedule: {days: [string]; time: string};
}

export interface IData {
  data: IDat[];
}

export interface CardProps {
  imageUrl: string;
}
