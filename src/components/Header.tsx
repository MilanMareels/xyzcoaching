import { Carousel } from "flowbite-react";
import { headerImages } from "../data/headerImages";

export default function Header() {
  return (
    <header>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={3000}>
          {headerImages.map((image, i) => (
            <img src={image.image} alt="..." key={i} loading="lazy" />
          ))}
        </Carousel>
      </div>
    </header>
  );
}
