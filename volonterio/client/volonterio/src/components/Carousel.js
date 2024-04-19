import { useEffect, useState, Children, cloneElement} from "react";
import '../index.css'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'

const PAGE_WIDTH = 850;

const Carousel = ({children}) => {
    const [pages, setPages] =useState([])
    const [offset, setOffset] =useState(0)

    const handleLeftArrowClick = () =>{

        setOffset((currentOffset) =>{
            const newOffset = currentOffset + PAGE_WIDTH

            console.log(newOffset)
            return Math.min(newOffset, 0)
        })
    }
    const handleRightArrowClick = () =>{

        setOffset((currentOffset) =>{
            const newOffset = currentOffset - PAGE_WIDTH

            const maxOffset = -(PAGE_WIDTH*(pages.length -1))
            console.log(newOffset, maxOffset)
            return Math.max(newOffset, maxOffset)
        })
    }

    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: `100%`,
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`,
                    }
                })
            })
        )
    }, [])
    return(
        <div className="main-container">
            <FaChevronLeft className="cursor-pointer" onClick={handleLeftArrowClick}/>
            <div className="h-full w-full overflow-hidden">
                <div className="h-full flex flex-row transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateX(${offset}px)`
                }}
                >{pages}</div>
            </div>
            <FaChevronRight className="cursor-pointer" onClick={handleRightArrowClick}/>
        </div>
    )
}
export default Carousel;
