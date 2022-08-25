/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import {FC} from 'react';
import {IDat, ParamsProps} from '../../share/interface';

const Index: FC<IDat> = ({data}) => {
  console.log(data);
  return (
    <>
      <div className="text-center">
        <div className="flex justify-center p-4 bg-gray-400">
          <img src={data.image.medium} />
        </div>
        <div>
          Name: {data.name}
          <br />
          Rating: {data.rating.average}
        </div>
        <p className="text-center p-10 bg-gray-300">
          Summary:
          <br />
          {data.summary}
        </p>
        <div>
          {data.schedule.days}
          <br />
          {data.schedule.time}
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  try {
    const res = await fetch(` https://api.tvmaze.com/shows`);
    const data: IDat[] = await res.json();
    const paths = data.map(({id}) => ({params: {id: `${id}`}}));

    return {
      paths,
      fallback: false,
    };
  } catch (e) {
    console.log(e);
  }
};

export const getStaticProps = async ({params}: ParamsProps) => {
  try {
    const res = await fetch(` https://api.tvmaze.com/shows/${params.id}`);
    const data: IDat[] = await res.json();

    return {
      props: {
        data,
      },
    };
  } catch (e) {
    console.log(e);
  }
};

export default Index;
