import React from "react"
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs"
import PropTypes from "prop-types"

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      <span style={{ color }}>
        {value >= 1 ? (
          <BsStarFill />
        ) : value >= 0.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
      <span style={{ color }}>
        {value >= 2 ? (
          <BsStarFill />
        ) : value >= 1.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
      <span style={{ color }}>
        {value >= 3 ? (
          <BsStarFill />
        ) : value >= 2.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
      <span style={{ color }}>
        {value >= 4 ? (
          <BsStarFill />
        ) : value >= 3.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
      <span style={{ color }}>
        {value >= 5 ? (
          <BsStarFill />
        ) : value >= 4.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>

      <span className="ps-2 reviewText">{text && text}</span>
    </div>
  )
}

Rating.defaultProps = {
  color: "#f8e825",
}

Rating.propTypes = {
  value: PropTypes.number,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
}
export default Rating
