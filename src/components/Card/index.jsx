import React from "react";
import { CardWrapper,CardTitle } from './styles'

const Card = ({data}) => (
    <CardWrapper key={data.id}>
        <img src={data.thumbnailUrl} alt='Card Photo'/>
        <CardTitle>{data.title}</CardTitle>
    </CardWrapper>
)

export default Card;