"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
   <div className=" px-6 pt-8 bg-white">
     <section className="py-10 lg:py-2 bg-slate-50  w-full text-center flex flex-wrap lg:flex-nowrap rounded-tl-md  rounded-tr-md  lg:mt-0 *:w-full *:lg:w-[50%]">
      {/* {context} */}
      <div className=" flex flex-wrap content-center  order-2 lg:order-1 lg:pl-20 2xl:pl-40 lg:pr-10 2xl:pr-16 ">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className=" w-full flex justify-center items-center lg:justify-start my-2"
        >
          <h1 className="  font-extrabold text-[18px]">
            کمپین های بازاریابی و تبلیقات
          </h1>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className=" w-full flex justify-center items-center lg:justify-start mt-1 lg:mt-2"
        >
          <p className="  font-bold lg:text-justify ">
            آیا به دنبال راهی مطمئن برای دیده شدن برندتان هستید؟ مشاوره رایگان
            ما به شما کمک می‌کند تا مسیر موفقیت را پیدا کنید. همین حالا قدم اول
            را بردارید!
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className=" w-full flex justify-center items-center lg:justify-start mt-1 lg:mt-2"
        >
          <p className="">
            جهت دریافت مشاوره رایگان با شماره‌ی زیر تماس بگیرید
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className=" w-full flex justify-center items-center lg:justify-start mt-4"
        >
          <button className=" bg-button p-2 rounded-lg font-bold text-white hover:scale-95 transition-all duration-300">
            دریافت مشاوره
          </button>
        </motion.div>
      </div>

      {/* {image svg} */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.9 }}
        className=" overflow-hidden  w-full h-[250px] lg:h-[400px] 2xl:h-[500px]  flex justify-center items-center order-1 lg:order-2"
      >
        <Image
          src="/heroSvg.svg"
          alt="Full Screen Background"
          width={1920}
          height={1080}
          className=" w-full h-full "
        />
      </motion.div>
    </section>
   </div>
  );
}
