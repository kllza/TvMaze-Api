/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import {FC} from 'react';
import {IDat} from '../share/interface';
import Card from './Card';
interface CardListProps {
  moviesArray: IDat[];
}

const CardList: FC<CardListProps> = ({moviesArray}) => {
  /* console.log(moviesArray); */
  return (
    <div className="flex">
      {moviesArray.map((movie, index) => {
        return (
          <>
            <Link href={`/movie/${movie.id}`}>
              <a target="_blank">
                <Card imageUrl={movie.image.medium} key={'Card' + index} />
              </a>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default CardList;
