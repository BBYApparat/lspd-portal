"use client"

import { motion } from "framer-motion"
import { Shield, Star, Award } from "lucide-react"

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Shield */}
      <motion.div
        className="absolute top-20 left-10 text-blue-200/20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Shield className="h-16 w-16" />
      </motion.div>

      {/* Floating Star */}
      <motion.div
        className="absolute top-40 right-20 text-yellow-200/20"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Star className="h-12 w-12" />
      </motion.div>

      {/* Floating Award */}
      <motion.div
        className="absolute bottom-40 left-20 text-blue-200/20"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <Award className="h-14 w-14" />
      </motion.div>

      {/* Additional floating elements */}
      <motion.div
        className="absolute top-60 right-40 text-blue-300/15"
        animate={{
          y: [0, -18, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <Shield className="h-10 w-10" />
      </motion.div>
    </div>
  )
}
