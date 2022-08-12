/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

const CardList = ({x, genres}: any) => {
  return (
    <>
      <div className="bg-gray-400">
        {/* {x.id} - {x.name}
        {x.rating.average}
        <img src={x.image.medium} /> */}
        {/* {x.genres === genres} */}
        {/*  {x.genres[0] === 'Action' ? (
          <div className="bg-gray-400">
            

            <img src={x.image.medium} />
          </div>
        ) : (
          ''
        )} */}
        {x.rating.average >= 7 ? (
          x.genres['0'] === genres ? (
            <div className="bg-gray-60">
              <img src={x.image.medium} />
            </div>
          ) : (
            ''
          )
        ) : (
          ''
        )}
        {/* <div className=""> </div>
        {x.id <= 110 ? (
          x.genres['0'] === 'Drama' ? (
            <div className="bg-gray-600">
              <p className="">
                <img src={x.image.medium} />
              </p>
            </div>
          ) : (
            ''
          )
        ) : (
          ''
        )} */}
      </div>
    </>
  );
};

export default CardList;
