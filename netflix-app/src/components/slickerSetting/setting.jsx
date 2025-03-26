import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <FaChevronRight
            className={className}
            style={{
                ...style,
                display: "block",
                color: "red",
                fontSize: "30px"
            }}
            onClick={onClick}
        />
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <FaChevronLeft
            className={className}
            style={{
                ...style,
                display: "block",
                color: "red",
                fontSize: "30px"
            }}
            onClick={onClick}
        />
    );
};

var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
            breakpoint: 1800,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
                initialSlide: 1
            }
        },
        {
            breakpoint: 1320,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                initialSlide: 1
            }
        },
        {
            breakpoint: 1080,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                initialSlide: 1
            }
        },
        {
            breakpoint: 920,
            settings: {
                slidesToShow: 2.5,
                slidesToScroll: 2,
                initialSlide: 1
            }
        },
        {
            breakpoint: 780,
            settings: {
                slidesToShow: 2.5,
                slidesToScroll: 2,
                initialSlide: 1
            }
        },
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
};

export default settings