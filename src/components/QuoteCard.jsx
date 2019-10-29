import React from 'react';
import './QuoteCard.css';

const QuoteCard = ({item}) => (
    <figure className="QuoteCard">
        <img src={item.image} alt={item.character} />
        <figcaption>
            <blockquote>{item.quote}</blockquote>
            <p>
                <cite>{item.character}</cite>
            </p>
        </figcaption>
    </figure>
);

export default QuoteCard;