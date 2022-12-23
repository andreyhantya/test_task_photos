import React, { useEffect, useState } from "react";
import PhotoCard from "../Card";
import { CardListWrapper } from './styled'

const ImgagesList = ({data}) => {
  const [viewData, setViewData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const scrollHandler = (e) => {
    if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100){
      setCurrentPage(prev => prev + 1)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    }
  },[])

    useEffect(() => {
        const currentData = data.splice(currentPage - 1, currentPage + 2)

        setViewData(prev => [...prev, ...currentData])
    }, [currentPage])

    useEffect(() => {
        const currentData = data.splice(0, 15)

        setViewData(currentData)
    }, [data])

    return (
        <CardListWrapper>
          {viewData.map(photo => <PhotoCard key={photo.id} data={photo}/>)}
        </CardListWrapper>
    )
}

export default React.memo(ImgagesList);