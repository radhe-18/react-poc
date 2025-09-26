import { motion } from "framer-motion";

const Banner = () => {
  const images = [
    'https://picsum.photos/1920/1080?random=1',
    'https://picsum.photos/1920/1080?random=2',
    'https://picsum.photos/1920/1080?random=3',
    'https://picsum.photos/1920/1080?random=4',
  ];
  const allImages = [...images, ...images]; // Duplicate for seamless loop

  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden rounded-2xl shadow-xl mb-12">
      {/* Scrolling background images */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="flex animate-scrollX" style={{ width: `${allImages.length * 100}vw` }}>
          {allImages.map((img, index) => (
            <div
              key={index}
              className="w-screen h-full opacity-80"
              style={{
                backgroundImage: `url('${img}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
        </div>
      </div>

      {/* Animated circles */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-white/10 top-10 left-10"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-white/5 bottom-10 right-10"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          🚀 Welcome to the Future
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Experience powerful tools, stunning themes, and seamless workflows.
        </motion.p>
      </div>
    </section>
  );
};

export default Banner;
