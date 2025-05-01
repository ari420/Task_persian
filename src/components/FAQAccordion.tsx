"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function FAQ() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      q: "مراحل طراحی وب سایت چیست؟",
      a: "جواب: شامل نیازسنجی، طراحی UI/UX، توسعه، تست و تحویل نهایی است.",
    },
    {
      q: "چقدر زمان می‌برد؟",
      a: "جواب: بسته به پروژه، بین ۲ تا ۶ هفته زمان می‌برد.",
    },
    {
      q: "چقدر زمان می‌برد؟",
      a: "جواب: بسته به پروژه، بین ۲ تا ۶ هفته زمان می‌برد.",
    },
    {
      q: "چقدر زمان می‌برد؟",
      a: "جواب: بسته به پروژه، بین ۲ تا ۶ هفته زمان می‌برد.",
    },
    {
      q: "چقدر زمان می‌برد؟",
      a: "جواب: بسته به پروژه، بین ۲ تا ۶ هفته زمان می‌برد.",
    },
    {
      q: "چقدر زمان می‌برد؟",
      a: "جواب: بسته به پروژه، بین ۲ تا ۶ هفته زمان می‌برد.",
    },
    {
      q: "چقدر زمان می‌برد؟",
      a: "جواب: بسته به پروژه، بین ۲ تا ۶ هفته زمان می‌برد.",
    },
    {
      q: "چقدر زمان می‌برد؟",
      a: "جواب: بسته به پروژه، بین ۲ تا ۶ هفته زمان می‌برد.",
    },
    {
      q: "چقدر زمان می‌برد؟",
      a: "جواب: بسته به پروژه، بین ۲ تا ۶ هفته زمان می‌برد.",
    },
  ];

  return (
    <section className="py-10 bg-slate-50">
      <div className="w-full flex justify-center items-center">
        <div className="border-2 border-slate-200 bg-white w-[80%] rounded-lg flex flex-wrap *:w-full *:lg:w-[50%]">
          <div className="border p-4 flex flex-wrap content-start">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full flex items-center"
            >
              <h1 className="font-bold text-[20px]">FAQ</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full flex items-center"
            >
              <p className="font-bold mt-2">سوالات متداولی که از ما می‌پرسید</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-full flex items-center pl-14"
            >
              <p className="mt-1">
                سوالات متداولی که ممکن است نیاز شما نیز باشند در اینجا پاسخ داده
                شده‌اند:
              </p>
            </motion.div>
          </div>

          <div className="border flex flex-wrap p-6 justify-center content-start">
            {questions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.3 }}
                className="border-2 border-slate-200 bg-slate-50 w-full rounded-lg mb-2"
              >
                <div className="w-full p-5">
                  <div
                    className=" flex justify-between items-center cursor-pointer"
                    onClick={() => toggle(index)}
                  >
                    <div className="">{item.q}</div>
                    <div className="">
                      <AddCircleOutlineIcon />
                    </div>
                  </div>
                  <div
                    className={` transition-all duration-300 ease-in-out overflow-hidden ${
                      openIndex === index ? "max-h-[100px] " : "max-h-0"
                    }`}
                  >
                    <div className="p-2">{item.a}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
