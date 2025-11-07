import { motion } from "framer-motion";
import { ClipLoader } from "react-spinners";

const LoadingComponent = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
        className="h-full w-full flex flex-row justify-center items-center"
      >
        <ClipLoader color={"black"} size={150} />
      </motion.div>
    </>
  );
};

export default LoadingComponent;
