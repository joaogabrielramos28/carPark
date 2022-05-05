import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { ICarouselProps } from "./types";
import Image from "next/image";
import Loading from "../Loading/Loading";

const Carousel = ({ images }: ICarouselProps) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;
  const [loading, setLoading] = useState(true);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <Container>
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {images.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              // eslint-disable-next-line @next/next/no-img-element
              <>
                <Image
                  width={800}
                  height={600}
                  src={slide}
                  onLoad={() => setLoading(false)}
                  alt={"Imagens do Park"}
                  loading={loading ? "lazy" : "eager"}
                />
              </>
            )}
          </div>
        );
      })}
    </Container>
  );
};

export default Carousel;
