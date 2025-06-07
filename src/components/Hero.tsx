import React, { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "./ui/button-hero";
import { Check, ChevronRight } from "lucide-react";

const Hero = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy-dark opacity-95"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay "
          // style={{ backgroundImage: 'url("https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")' }}
          style={{ backgroundImage: 'url("/lovable-uploads/back-blurr.png")' }}
        ></div>
        <div className="absolute top-0 right-2 w-1/6 h-full bg-rust opacity-90 skew-x-[-15deg] translate-x-10 hidden md:block"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-20 relative z-10">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Text Content (spans 7 columns on desktop) */}
          <div className="md:col-span-7 text-white space-y-6">
            <div
              className={`transition-all duration-1000 ease-out transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
                {t("hero.title")}
              </h1>
            </div>

            <div
              className={`transition-all duration-1000 ease-out transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="text-2xl md:text-3xl font-semibold text-gold">
                {t("hero.subtitle")}
              </p>
            </div>

            <div
              className={`transition-all duration-1000 ease-out transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <p className="text-gray-300 max-w-xl text-lg md:text-xl">
                {t("hero.description")}
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              {["service", "record", "rated"].map((feature, index) => (
                <div
                  key={feature}
                  className={`flex items-center transition-all duration-1000 ease-out transform ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex-shrink-0 h-6 w-6 bg-gold rounded-full flex items-center justify-center">
                    <Check className="h-3.5 w-3.5 text-navy-dark" />
                  </div>
                  <span className="ml-3 text-gray-200 text-lg md:text-xl">
                    {t(`features.${feature}`)}
                  </span>
                </div>
              ))}
            </div>

            {/* Google Reviews */}
            {/* <div
              className={`bg-navy/50 backdrop-blur-sm p-4 rounded-lg inline-block shadow-lg border border-white/10 transition-all duration-1000 ease-out transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "700ms" }}
            >
              <div className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
                    alt="Google"
                    className="h-6 w-6"
                  />
                </div>
                <div className="ml-3">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="h-4 w-4 text-gold"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-sm md:text-base text-gray-300">129 reviews</div>
                </div>
              </div>
            </div> */}

            {/* Call to Action */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-1000 ease-out transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <Button
                variant="primary"
                size="lg"
                className="group text-lg md:text-xl px-8 py-4"
              >
                <span>{t("hero.cta")}</span>
                <ChevronRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg md:text-xl px-8 py-4"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Attorney Image (spans 5 columns on desktop) */}
          <div
            className={`md:col-span-5 block transition-all duration-1000 ease-out transform ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="relative bottom-14">
              <div className="absolute -inset-4  rounded-lg blur-md "></div>
              <img
                src="/lovable-uploads/img-person.png"
                alt="Professional Attorney"
                className="relative w-full mx-auto md:-ml-20 mt-8 md:mt-3 bottom-0 md:bottom-2 rounded-lg  object-cover"
                style={{ maxHeight: "600px" }}
              />

              <div className="
                absolute 
                bottom-4 
                left-1/2 
                -translate-x-1/2 
                w-11/12 
                bg-navy-dark/80 
                backdrop-blur-sm 
                p-4 
                rounded-md
                md:left-[30%] md:-translate-x-2/1 md:w-10/12
              ">
                <div className="text-gold font-serif text-xl font-bold">
                  Phuket Lawyer Office
                </div>
                <div className="text-white text-sm"> 5+ Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
