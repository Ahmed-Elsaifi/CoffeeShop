import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  { id: 1, name: "Amina", text: "Best coffee ever!", img: "/src/assets/coffee2.jpg" },
  { id: 2, name: "Omar", text: "Lovely ambiance and taste.", img: "/src/assets/coffee3.jpg" },
  { id: 3, name: "Lina", text: "Great service.", img: "/src/assets/coffee4.jpg" },
];

export default function TestimonialsPreview() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % data.length);
  const prev = () => setIndex((index - 1 + data.length) % data.length);

  return (
    <section className="mt-8 bg-gradient-to-r from-white to-yellow-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl text-center">
      <h2 className="text-xl font-bold text-primary mb-6">Testimonials</h2>

      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-2xl shadow relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={data[index].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={data[index].img}
              alt={data[index].name}
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
            />
            <div className="font-semibold">{data[index].name}</div>
            <div className="text-sm text-gray-500 dark:text-gray-300 mt-2">
              {data[index].text}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="flex justify-between mt-6 text-2xl px-4">
          <button onClick={prev} aria-label="Previous testimonial">←</button>
          <button onClick={next} aria-label="Next testimonial">→</button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {data.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-yellow-500" : "bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
