import React from 'react';
import { Check } from "lucide-react";

export default function QualificationSection() {
  const qualifications = [
    "Help navigating your NDIS plan",
    "Someone who actually listens",
    "Less stress managing appointments",
    "Support that comes to you",
    "A coordinator who gets things done fast",
    "A team who fights for your goals"
  ];

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Is This Right For You?
          </h2>
          <p className="text-lg text-gray-600">
            See if our support coordination is the perfect fit
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50/50 rounded-3xl p-8 sm:p-12 shadow-lg shadow-purple-100/50 border border-purple-100/50">
          <h3 className="text-xl sm:text-2xl font-semibold text-[#4A1F7A] mb-8 text-center">
            This service is perfect for you if you want:
          </h3>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {qualifications.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-8 h-8 rounded-full bg-[#4A1F7A] flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 font-medium pt-1">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
