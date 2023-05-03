
// import {FaStar, FaStarHalfAlt} from "react-icons/fa"
// import {AiOutlineStar} from "react-icons/ai"
// import styled from "styled-components"

// const Star =({stars, reviews}) => {

//     const ratingStar = Array.from( {length: 5}, (elem, index)=>
//     {
//         let number = index + 0.5;
//         // debugger;

//         return (
//                 <span key ={index}>
//             {
//                 stars >= index + 1 ? (<FaStar className = "icon" />) :
//                  stars >= number ? (<FaStarHalfAlt className = "icon" />) : 
//                  (<AiOutlineStar className = "icon" />)
//             }
//         </span>
//     );

//     }
//     );

       
//   return (
//     <Wrapper>
//         <div className="icon-style">
//             {ratingStar}
//             <p>
//                 ({reviews} customer reviews)
//             </p>

//         </div>
//     </Wrapper>
//   )
// }

// export default Star

import React, { useState } from "react";
import './Rate.scss';

function StarRating() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button
                        id = "retz"
                        type="button"
                        key={index}
                        className={index <= (hover || rating) ? "on" : "off"}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                    >
                        <span className="star">&#9733;</span>
                    </button>
                );
            })}
        </div>
    );
}

export default StarRating;