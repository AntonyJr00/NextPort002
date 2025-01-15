"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

interface Props {
  containerStyle: string;
  BtnSyles: string;
  IconStyle: string;
}

export const WorkSliderBtns = ({
  BtnSyles,
  IconStyle,
  containerStyle,
}: Props) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyle}>
      <button className={BtnSyles}>
        <PiCaretLeftBold
          className={IconStyle}
          onClick={() => swiper.slidePrev()}
        />
      </button>
      <button className={BtnSyles}>
        <PiCaretRightBold
          className={IconStyle}
          onClick={() => swiper.slideNext()}
        />
      </button>
    </div>
  );
};
