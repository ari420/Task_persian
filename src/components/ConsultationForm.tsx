"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

export default function ConsultationForm() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);
  const ref3 = useRef<HTMLInputElement>(null);
  const ref4 = useRef<HTMLTextAreaElement>(null);

  const checkboxRefs = {
    c1: useRef<HTMLInputElement>(null),
    c2: useRef<HTMLInputElement>(null),
    c3: useRef<HTMLInputElement>(null),
    c4: useRef<HTMLInputElement>(null),
    c5: useRef<HTMLInputElement>(null),
  };

  const submit = () => {
    const name = ref1.current?.value;
    const email = ref2.current?.value;
    const phone = ref3.current?.value;
    const message = ref4.current?.value;

    if (!name || !email || !phone) {
      alert("لطفاً تمام فیلدها را پر کنید.");
      return;
    }

    const selectedServices = Object.entries(checkboxRefs);
    Object.entries(checkboxRefs)
      .filter(([, ref]) => ref.current?.checked)
      .map(([, ref]) => ref.current?.parentElement?.textContent?.trim() || "");

    console.log("form submitted :)");
    console.log("نام:", name);
    console.log("ایمیل:", email);
    console.log("شماره تماس:", phone);
    console.log("سرویس‌ها:", selectedServices.join(", ") || "هیچ‌کدام");
    console.log("پیام:", message || "ندارد");

    // Clear inputs
    ref1.current!.value = "";
    ref2.current!.value = "";
    ref3.current!.value = "";
    ref4.current!.value = "";
    Object.values(checkboxRefs).forEach((ref) => {
      if (ref.current) ref.current.checked = false;
    });
  };

  return (
    <section className="py-10 bg-slate-50">
      <div className=" w-full flex flex-wrap justify-center *:w-full  ">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className=" flex items-center justify-center"
        >
          <h1 className=" font-bold ">فرم دریافت مشاوره</h1>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className=" flex items-center justify-center"
        >
          <p className=" text-center">
            برای ارتقای بیزینس خود به دنبال فرصتی ناب هستید؟ فرم زیر را تکمیل
            کنید تا مشاوران ما به صورت کاملان رایگان شمارا راهنمایی کنند.
          </p>
        </motion.div>
        <div className=" flex justify-center py-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className=" rounded-lg w-[80%] bg-white border-2 border-slate-200"
          >
            {/* {form } */}
            <form dir="rtl" className="flex flex-col gap-6 p-7">
              {/* فیلدهای نام، ایمیل، شماره تماس */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col flex-1  ">
                  <label className="mb-1 text-sm  font-bold">
                    نام و نام خانوادگی خود را وارد کنید
                  </label>
                  <div className=" w-full  relative">
                    <input
                      ref={ref1}
                      type="text"
                      className="border-2 border-slate-200 bg-slate-50 w-full rounded-lg px-8 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="نام و نام خانوادگی"
                    />
                    <div className=" absolute right-2 top-1/2 transform -translate-y-1/2 w-[20px] h-[20px] flex items-center justify-center">
                      <Image
                        src="/ic1.svg"
                        alt="Full Screen Background"
                        width={1920}
                        height={1080}
                        className=" w-full h-full "
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <label className="mb-1 text-sm font-bold">
                    آدرس ایمیل خود را وارد کنید
                  </label>
                  <div className=" w-full  relative">
                    <input
                      ref={ref2}
                      type="email"
                      className="border-2 w-full border-slate-200 bg-slate-50 rounded-lg px-8 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="مثلاً email@mail.com"
                    />
                    <div className=" absolute right-2 top-1/2 transform -translate-y-1/2 w-[20px] h-[20px] flex items-center justify-center">
                      <Image
                        src="/sms.svg"
                        alt="Full Screen Background"
                        width={1920}
                        height={1080}
                        className=" w-full h-full "
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <label className="mb-1 text-sm font-bold">
                    شماره تماس خود را وارد کنید
                  </label>
                  <div className=" w-full  relative">
                    <input
                      ref={ref3}
                      type="tel"
                      className="  w-full border-2 border-slate-200 bg-slate-50 rounded-lg px-8 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="۰۹۵۶۸۴۹۳۸۷۵۶"
                      dir="rtl"
                    />
                    <div className=" absolute right-2 top-1/2 transform -translate-y-1/2 w-[20px] h-[20px] flex items-center justify-center">
                      <Image
                        src="/call.svg"
                        alt="Full Screen Background"
                        width={1920}
                        height={1080}
                        className=" w-full h-full "
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* سرویس‌ها */}
              <div className="flex flex-col gap-3">
                <label className="text-sm font-bold ">
                  نوع سرویس(های) مورد نظر خود را انتخاب کنید
                </label>
                <div className="flex flex-wrap gap-2 font-bold">
                  <label className="flex gap-2 items-center border-2 border-slate-200 bg-slate-50 rounded-lg px-2">
                    <input type="checkbox" ref={checkboxRefs.c1} /> خدمات سئو
                  </label>
                  <label className="flex gap-2 items-center border-2 border-slate-200 bg-slate-50 rounded-lg px-2">
                    <input type="checkbox" ref={checkboxRefs.c2} /> طراحی وب
                    سایت
                  </label>
                  <label className="flex gap-2 items-center border-2 border-slate-200 bg-slate-50 rounded-lg px-2">
                    <input type="checkbox" ref={checkboxRefs.c3} /> اتوماسیون و
                    بازاریابی
                  </label>
                  <label className="flex gap-2 items-center border-2 border-slate-200 bg-slate-50 rounded-lg px-2">
                    <input type="checkbox" ref={checkboxRefs.c4} /> کمپین‌های
                    تبلیغاتی
                  </label>
                  <label className="flex gap-2 items-center border-2 border-slate-200 bg-slate-50 rounded-lg px-2">
                    <input type="checkbox" ref={checkboxRefs.c5} /> خدمات تولید
                    محتوا
                  </label>
                </div>
              </div>

              {/* توضیحات */}
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-bold">
                  در مورد درخواست خود برای ما بنویسید.
                </label>
                <textarea
                  ref={ref4}
                  rows={4}
                  className="border rounded-lg px-3 py-2 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="توضیحات (اختیاری)"
                ></textarea>
              </div>

              {/* دکمه ثبت */}
              <div className="flex justify-center">
                <button
                  onClick={submit}
                  type="button"
                  className="bg-black text-white px-16 py-1 rounded-full hover:bg-gray-800 transition"
                >
                  ثبت درخواست
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
