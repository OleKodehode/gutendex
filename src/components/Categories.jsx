import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

export default function Categories({ items }) {
  return (
    <section className="h-15 bg-sky-400 dark:bg-sky-600 border-t-2 border-zinc-700 w-screen pt-3 flex justify-between">
      <Swiper
        modules={[Scrollbar, Navigation]}
        scrollbar={{ draggable: true }}
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
            >
              <p className="text-lg hover:-translate-y-0.5 hover:text-shadow-xs cursor-pointer w-1/2 text-center">
                {item}
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
