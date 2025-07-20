import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Scale, Award } from "lucide-react";

const LawyerProfile = () => {
  return (
    <section className="py-20  text-white relative overflow-hidden "style={{ backgroundColor: "#030915" }}>
      {/* Decorative elements */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="space-y-4">
              <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Scale className="h-8 w-8 text-gold" />
                <span className="text-gold font-semibold tracking-wider uppercase text-xl">
                  About Me
                </span>
              </motion.div>

              <motion.h2
                className="text-4xl lg:text-5xl font-serif font-bold text-gold"style={{
                  fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                  color: "#f5c15c ",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                 BAMRUNG RUNGREUANG
              </motion.h2>

              <motion.div
                className="h-1 w-24 bg-gold "style={{
                  fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                  color: "#f5c15c ",
                }}
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              ></motion.div>
            </div>

            {/* Experience */}
            {/* <motion.div 
              className="bg-gradient-to-r from-gold/10 to-transparent p-6 rounded-lg border-l-4 border-gold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            > */}
            <div className="flex items-center space-x-3 mb-3">
              <Award className="h-6 w-6 text-gold" />
              <span className="text-xl font-semibold" style={{
                fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                color: "#f5c15c ",
              }}>
                More than 30 years of experience in law and litigation
              </span>
            </div>
            {/* </motion.div> */}

            {/* Position */}
            <motion.div
              //   className="bg-gradient-to-r from-white/5 to-transparent p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-2 text-2xl">
                <Briefcase className="h-6 w-6 text-gold" />
                <span className="text-lg "style={{
                fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                color: "#F5F5F5",
              }}>
                  Position
                </span>
              </div>
              <p className="text-gray-300 ml-9 text-xl" style={{
                fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                color: "#f5c15c ",
              }}>
                Lawyer, Lawyers Council of Thailand
              </p>
              <p className="text-gray-300 ml-9 text-xl">
                Consulting - Volunteer lawyer
              </p>
            </motion.div>

            {/* Education */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3">
                <GraduationCap className="h-6 w-6 text-gold" />
                <span className="text-xl font-semibold text-gold">
                  Education
                </span>
              </div>

              <div className="ml-9 space-y-4 text-xl">
                <div className="border-l-2 border-gold/30 pl-6 py-2">
                  <h4 className="font-semibold " style={{
                fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                color: "#F5F5F5",
              }}>
                    Bachelor's Degree
                  </h4>
                  <p className="text-gray-300" style={{
                fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                color: "#f5c15c ",
              }}>
                    Bachelor of Law, Sukhothai Thammathirat Open University
                  </p>
                </div>

                <div className="border-l-2 border-gold/30 pl-6 py-2">
                  <h4 className="font-semibold text-white" style={{
                fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                color: "#F5F5F5",
              }}>Master's Degree</h4>
                  <p className="text-gray-300" style={{
                fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                color: "#f5c15c ",
              }}>
                    Political Science, Major in Political Communication, Krirk
                    University
                  </p>
                </div>

                <div className="border-l-2 border-gold/30 pl-6 py-2">
                  <h4 className="font-semibold text-white" style={{
                fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                color: "#F5F5F5",
              }}>Ph.D.</h4>
                  <p className="text-gray-300" style={{
                fontFamily: "'Playfair Display', serif", // or "'Cormorant Garamond', serif"
                color: "#f5c15c ",
              }}>
                    Honorary Doctorate in Political Science, Politics and
                    Governance, LADC Institute
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Image with decorative background */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            {/* Decorative background similar to the justice statue image */}
            <div className="relative">
              {/* Gold accent background */}
              <div className="absolute -top-4 -left-4 w-80 h-[28rem] bg-gradient-to-br from-gold/60 to-gold/5 rounded-lg transform "></div>

              {/* Main image container */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-800 p-8  shadow-2xl border border-gold/20">
                <div className="w-80 h-[28rem] bg-gradient-to-b from-gray-700 to-gray-700  relative overflow-hidden">
                  <img
                    src="/lovable-uploads/img-person.png"
                    alt="Lawyer Bamrung Rungruang"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
        {/* Custom Horizontal Line */}
        <div className="w-full mt-20 flex justify-center" style={{ backgroundColor: "#030915" }}>
        <hr style={{ border: 0, height: "3px", width: "1390px", backgroundColor: "#f5c15c ", borderRadius: "2px", margin: "0 auto" }} />
      </div>
    </section>
    
  );
};

export default LawyerProfile;
