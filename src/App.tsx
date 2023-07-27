import { motion } from "framer-motion";

import MenuToggle from "./components/MenuToggle.tsx";

const App = () => {
  return (
    <motion.nav>
      <motion.div className="background">
        <MenuToggle />
      </motion.div>
    </motion.nav>
  );
};

export default App;
