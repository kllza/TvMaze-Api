/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import {FC} from 'react';
import {CardProps} from '../share/interface';

const Card: FC<CardProps> = ({imageUrl}) => {
  return (
    <>
      <div className="flex justify-center m-2 lg:m-0">
        <img src={imageUrl} />
      </div>
    </>
  );
};

export default Card;
