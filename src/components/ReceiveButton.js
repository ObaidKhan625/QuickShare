import React from "react";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { motion } from "framer-motion";
const ReceiveButton = () => {
  return (
    <div>
      {/* <motion.div
  whileHover={{ scale: 1.2, rotate: 360 }}
  whileTap={{
    scale: 1.2,
  
    borderRadius: "100%"
  }}
> */}
      <SaveAltIcon sx={{ height: "10vh", width: "10vh" }} />
      {/* </motion.div> */}
    </div>
  );
};

export default ReceiveButton;
