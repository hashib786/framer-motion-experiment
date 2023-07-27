import { motion } from "framer-motion";

const App = () => {
  /*
    transition:-
    
    */

  return (
    <motion.div
      className="box"
      animate={{
        borderRadius: ["0%", "40%", "50%"],
        scale: [1, 1.5, 3],
        rotate: [0, 180, 360],
      }}
      transition={{
        // type: "spring",
        // stiffness: 100,
        // repeat: Infinity,
        // repeatType: "mirror",
        duration: 2.5,
        ease: "easeInOut",
        times: [0, 0.2, 0.5],
        repeat: Infinity,
        repeatType: "mirror",
        stiffness: 100,
        type: "spring",
        repeatDelay: 1,
      }}
    ></motion.div>
  );
};

export default App;
