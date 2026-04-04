import React from 'react'
import { motion } from "framer-motion";

const GlassCard = ({ title, img, icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.07 }}
      className="relative rounded-2xl overflow-hidden backdrop-blur-xl bg-white/30 border border-white/40 shadow-xl hover:shadow-2xl transition"
    >
      <img src={img} className="w-full h-48 object-cover" />

      <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>

      <div className="absolute bottom-0 p-4 text-white">
        <div className="mb-2">{icon}</div>
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
    </motion.div>
  )
}

export default GlassCard
