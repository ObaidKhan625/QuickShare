import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import { motion } from "framer-motion";
const SendButton = () => {
  return (
    <div>
      <motion.div
        whileHover={{ scale: 1.2, rotate: 360 }}
        whileTap={{
          scale: 1.2,

          borderRadius: "100%",
        }}
      >
        <TelegramIcon sx={{ height: "10vh", width: "10vh" }} />
      </motion.div>
    </div>
  );
};

export default SendButton;
