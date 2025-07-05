"use client";

import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { gsap } from "gsap";
import {
  Lock,
  Star,
  Gift,
  Zap,
  Shield,
  Car,
  CreditCard,
  Coffee,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

// Import slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Benefits() {
  const [selectedPrize, setSelectedPrize] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userPoints, setUserPoints] = useState(1250); // Mock user points
  const [currentSlide, setCurrentSlide] = useState(0);
  const modalRef = useRef(null);
  const prizeRef = useRef(null);
  const sparklesRef = useRef(null);
  const sliderRef = useRef(null);

  // Custom arrow components
  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="w-8 h-8 bg-black dark:bg-white rounded-md shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center"
    >
      <ChevronLeft className="h-4 w-4 text-white dark:text-black" />
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="w-8 h-8 bg-black dark:bg-white rounded-md shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center"
    >
      <ChevronRight className="h-4 w-4 text-white dark:text-black" />
    </button>
  );

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const benefits = [
    {
      id: 1,
      name: "Free Coffee",
      description: "Get a free coffee at any partner café",
      points: 500,
      icon: Coffee,
      color: "bg-amber-500",
      gradient: "from-amber-400 to-orange-500",
    },
    {
      id: 2,
      name: "Fuel Discount",
      description: "10% off on fuel at partner stations",
      points: 1000,
      icon: Zap,
      color: "bg-yellow-500",
      gradient: "from-yellow-400 to-orange-400",
    },
    {
      id: 3,
      name: "Car Wash",
      description: "Free premium car wash service",
      points: 800,
      icon: Car,
      color: "bg-blue-500",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      id: 4,
      name: "Insurance Bonus",
      description: "Extra 5% discount on insurance renewal",
      points: 1500,
      icon: Shield,
      color: "bg-green-500",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      id: 5,
      name: "Credit Card",
      description: "Special credit card with 0% APR",
      points: 2000,
      icon: CreditCard,
      color: "bg-purple-500",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      id: 6,
      name: "Premium Gift",
      description: "Exclusive premium gift package",
      points: 3000,
      icon: Gift,
      color: "bg-red-500",
      gradient: "from-red-400 to-pink-500",
    },
  ];

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrizeClick = (prize) => {
    setSelectedPrize(prize);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPrize(null);
  };

  const unlockPrize = () => {
    if (userPoints >= selectedPrize.points) {
      // Animate the unlocking
      gsap.to(prizeRef.current, {
        scale: 1.2,
        duration: 0.3,
        ease: "back.out(1.7)",
        onComplete: () => {
          gsap.to(prizeRef.current, {
            scale: 1,
            duration: 0.2,
          });
        },
      });

      // Create sparkle effect
      gsap.fromTo(
        sparklesRef.current.children,
        {
          scale: 0,
          opacity: 0,
          rotation: 0,
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 360,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
        }
      );

      // Update points
      setUserPoints((prev) => prev - selectedPrize.points);

      // Close modal after animation
      setTimeout(() => {
        closeModal();
      }, 2000);
    }
  };

  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        {
          scale: 0.8,
          opacity: 0,
          y: 50,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
        }
      );
    }
  }, [isModalOpen]);

  const canUnlock = selectedPrize && userPoints >= selectedPrize.points;

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Your Benefits</h2>
        <p className="text-muted-foreground">Unlock rewards with your points</p>
        <div className="flex items-center justify-center gap-2 text-lg font-semibold">
          <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
          <span>{userPoints} Points</span>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative py-8">
        <Slider
          ref={sliderRef}
          {...carouselSettings}
          className="benefits-carousel"
        >
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon;
            const isUnlockable = userPoints >= benefit.points;

            return (
              <div key={benefit.id} className="px-2 py-4">
                <Card
                  className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                    isUnlockable ? "hover:shadow-lg" : "opacity-60"
                  }`}
                  onClick={() => handlePrizeClick(benefit)}
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="relative">
                      <div
                        className={`w-16 h-16 mx-auto rounded-full ${benefit.color} flex items-center justify-center`}
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      {!isUnlockable && (
                        <div className="absolute -top-2 -right-2 bg-gray-600 rounded-full p-1">
                          <Lock className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{benefit.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                      <div className="flex items-center justify-center gap-1 text-sm font-medium">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span>{benefit.points} Points</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </Slider>

        {/* Custom Controls */}
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2">
          <div className="flex gap-2">
            <CustomPrevArrow onClick={goToPrev} />
            <CustomNextArrow onClick={goToNext} />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div
            ref={modalRef}
            className="bg-background rounded-2xl p-8 max-w-md w-full relative overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 hover:bg-muted rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Prize content */}
            <div className="text-center space-y-6">
              <div className="relative">
                <div
                  ref={prizeRef}
                  className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${selectedPrize.gradient} flex items-center justify-center shadow-lg`}
                >
                  <selectedPrize.icon className="h-12 w-12 text-white" />
                </div>

                {/* Sparkles */}
                <div
                  ref={sparklesRef}
                  className="absolute inset-0 pointer-events-none"
                >
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-0"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        transform: `rotate(${i * 45}deg)`,
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold">{selectedPrize.name}</h3>
                <p className="text-muted-foreground">
                  {selectedPrize.description}
                </p>
                <div className="flex items-center justify-center gap-2 text-lg font-semibold">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <span>{selectedPrize.points} Points</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex justify-between items-center text-sm">
                    <span>Your Points:</span>
                    <span className="font-semibold">{userPoints}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>Required:</span>
                    <span className="font-semibold">
                      {selectedPrize.points}
                    </span>
                  </div>
                </div>

                <Button
                  onClick={unlockPrize}
                  disabled={!canUnlock}
                  className={`w-full ${
                    canUnlock
                      ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  {canUnlock ? "Unlock Prize!" : "Not Enough Points"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Benefits;
