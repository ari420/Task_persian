"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const obstacles = [
  {
    title: "تصور زمان‌بر بودن نتایج",
    text: "برخی از افراد نگران این هستند که نتایج تبلیغات دیر به دست آید، در حالی که پرشین سایت با سرعت بالا، شما را در دستیابی به نتایج مطلوب یاری می‌کند.",
    image: "/Advertising.svg",
  },
  {
    title: "تصور زمان‌بر بودن نتایج",
    text: "برخی از افراد نگران این هستند که نتایج تبلیغات دیر به دست آید، در حالی که پرشین سایت با سرعت بالا، شما را در دستیابی به نتایج مطلوب یاری می‌کند.",
    image: "/expenses.svg",
  },
  {
    title: "تصور زمان‌بر بودن نتایج",
    text: "برخی از افراد نگران این هستند که نتایج تبلیغات دیر به دست آید، در حالی که پرشین سایت با سرعت بالا، شما را در دستیابی به نتایج مطلوب یاری می‌کند.",
    image: "/Fear of management complexity.svg",
  },
  {
    title: "تصور زمان‌بر بودن نتایج",
    text: "برخی از افراد نگران این هستند که نتایج تبلیغات دیر به دست آید، در حالی که پرشین سایت با سرعت بالا، شما را در دستیابی به نتایج مطلوب یاری می‌کند.",
    image: "/Growth plan.svg",
  },
  {
    title: "تصور زمان‌بر بودن نتایج",
    text: "برخی از افراد نگران این هستند که نتایج تبلیغات دیر به دست آید، در حالی که پرشین سایت با سرعت بالا، شما را در دستیابی به نتایج مطلوب یاری می‌کند.",
    image: "/Ignorance of the effect of advertising.svg",
  },
  {
    title: "تصور زمان‌بر بودن نتایج",
    text: "برخی از افراد نگران این هستند که نتایج تبلیغات دیر به دست آید، در حالی که پرشین سایت با سرعت بالا، شما را در دستیابی به نتایج مطلوب یاری می‌کند.",
    image: "/Imagining the time-consuming nature of the results (1).svg",
  },
  {
    title: "تصور زمان‌بر بودن نتایج",
    text: "برخی از افراد نگران این هستند که نتایج تبلیغات دیر به دست آید، در حالی که پرشین سایت با سرعت بالا، شما را در دستیابی به نتایج مطلوب یاری می‌کند.",
    image: "/Imagining the time-consuming nature of the results.svg",
  },
  {
    title: "تصور زمان‌بر بودن نتایج",
    text: "برخی از افراد نگران این هستند که نتایج تبلیغات دیر به دست آید، در حالی که پرشین سایت با سرعت بالا، شما را در دستیابی به نتایج مطلوب یاری می‌کند.",
    image: "/Lack of clear strategy.svg",
  },
];

export default function ObstaclesSlider() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-16 w-full bg-slate-50">
      <div className="h-[250px] bg-[linear-gradient(to_bottom,_#43217C,_#7A3DE2)] flex flex-col items-center">
        <div className="transform translate-y-[15px] flex items-center justify-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white font-bold flex justify-center items-center text-center"
          >
            موانع رایج در دریافت خدمات تولید محتوا برای کسب‌وکارها
          </motion.div>
        </div>
        <div className="w-full flex justify-center">
          <div className="transform translate-y-[30px] w-[80%]">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="h-full w-full"
            >
              <div className="button-prev absolute -left-[20px] w-[40px] h-[40px] top-1/2 -translate-y-1/2 z-10 cursor-pointer">
                <Image
                  src="/arrow btn.svg"
                  alt="prev"
                  width={24}
                  height={24}
                  className=" w-full h-full object-cover"
                />
              </div>

              <div className="button-next absolute w-[40px] h-[40px] -right-[20px] top-1/2 -translate-y-1/2 z-10 cursor-pointer">
                <Image
                  src="/arrow btn (1).svg"
                  alt="next"
                  width={24}
                  height={24}
                  className=" w-full h-full object-cover"
                />
              </div>

              <Swiper
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  prevEl: ".button-prev", // Use class selectors instead of refs
                  nextEl: ".button-next",
                }}
                loop
                breakpoints={{
                  640: { slidesPerView: 1, spaceBetween: 20 },
                  768: { slidesPerView: 2, spaceBetween: 20 },
                  1024: { slidesPerView: 3, spaceBetween: 20 },
                  1280: { slidesPerView: 4, spaceBetween: 20 },
                }}
              >
                {/* Repeat this block 8 times manually */}
                {obstacles.map((data, i) => (
                  <SwiperSlide key={i}>
                    <div className="flex flex-col items-center border-spacing-2 justify-center bg-slate-200 rounded-lg p-2  w-full h-full">
                      <div className="w-[60px] h-[60px]">
                        <Image
                          src={data.image}
                          alt="Full Screen Background"
                          width={1920}
                          height={1080}
                          className="w-full h-full"
                        />
                      </div>
                      <div>
                        <h1 className="text-center mt-2">{data.title}</h1>
                      </div>
                      <div className="">
                        <p className="tracking-tight text-center mt-2">
                          {data.text}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
