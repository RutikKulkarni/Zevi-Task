import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const Rating = (rating: number) => {
  return (
    <div>
      {rating >= 1 ? (
        <AiFillStar color="rgba(255, 255, 0)" />
      ) : (
        <AiOutlineStar color="rgb(255, 255, 255)" />
      )}
      {rating >= 2 ? (
        <AiFillStar color="rgba(255, 255, 0)" />
      ) : (
        <AiOutlineStar color="rgb(255, 255, 255)" />
      )}
      {rating >= 3 ? (
        <AiFillStar color="rgba(255, 255, 0)" />
      ) : (
        <AiOutlineStar color="rgb(255, 255, 255)" />
      )}
      {rating >= 4 ? (
        <AiFillStar color="rgba(255, 255, 0)" />
      ) : (
        <AiOutlineStar color="rgb(255, 255, 255)" />
      )}
      {rating >= 5 ? (
        <AiFillStar color="rgba(255, 255, 0)" />
      ) : (
        <AiOutlineStar color="rgb(255, 255, 255)" />
      )}
    </div>
  );
};

export default Rating;