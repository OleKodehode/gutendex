import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

export default function Categories({
  items,
  selectedCategory,
  onCategoryChange,
}) {
  return (
    <section className="h-15 bg-sky-400 dark:bg-sky-600 border-t-2 border-zinc-700 w-screen pt-3 flex justify-between fixed top-20 z-10">
      <Swiper
        modules={[Scrollbar, Navigation, Mousewheel]}
        direction="horizontal"
        scrollbar={{ draggable: true }}
        mousewheel={{ forceToAxis: true, invert: false, sensitivity: 1 }}
        slidesPerView={3}
        slidesOffsetBefore={20}
        slidesOffsetAfter={20}
        breakpoints={{
          1024: { slidesPerView: 6 },
        }}
      >
        {items.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
              onClick={() => onCategoryChange(item)}
            >
              <p
                className={`text-lg hover:-translate-y-0.5 hover:text-shadow-xs hover:text-zinc-300 cursor-pointer w-1/2 text-center ${
                  selectedCategory === item ? "underline" : ""
                }`}
              >
                {item}
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
