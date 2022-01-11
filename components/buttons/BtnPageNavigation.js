import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { btnScale } from "../../utils/animations";

const BtnPageNavigation = ({ href, Icon }) => {
  const { whileHover, whileTap, transition } = btnScale(false);

  return (
    <Link href={href} passHref={true}>
      <motion.a
        whileHover={whileHover}
        whileTap={whileTap}
        transition={transition}
        className="flex justify-center items-center w-full text-white hover:text-white bg-bgBluelight-100 hover:bg-bgBluelight-100 transition-colors duration-300 xl:text-black xl:bg-white paper"
      >
        <Icon className="p-4 w-16 h-16 xl:w-20 xl:h-20" />
      </motion.a>
    </Link>
  );
};

export default BtnPageNavigation;
