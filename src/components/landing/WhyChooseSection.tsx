import React from 'react';
import {
  UserCheck,
  HeartHandshake,
  Clock,
  Zap,
  Fingerprint,
  MapPin,
  MessageCircle,
  Heart
} from "lucide-react";

export default function WhyChooseSection() {
  const reasons = [
    { icon: UserCheck, title: "Dedicated Support Coordinator" },
    { icon: HeartHandshake, title: "Comprehensive Care Management" },
    { icon: Clock, title: "24/7 Support Availability" },
    { icon: Zap, title: "Easy & Fast Referral Pathway" },
    { icon: Fingerprint, title: "Highly Personalised Approach" },
    { icon: MapPin, title: "We Come To You" },
    { icon: MessageCircle, title: "Fast Communication & Follow-up" },
    { icon: Heart, title: "Genuine Care & Compassion" },
  ];

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-[#4A1F7A] font-semibold text-sm tracking-wide uppercase mb-4">
            Why Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A1F7A] to-[#7C3AED]">
              Trusted Pathways
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your well-being becomes our top priority. Every step of the way.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-purple-50 to-pink-50/50 rounded-2xl p-6 hover:from-[#4A1F7A] hover:to-[#7C3AED] transition-all duration-300 cursor-default overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500" />

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-5 group-hover:bg-white/20 transition-colors duration-300">
                  <reason.icon className="w-7 h-7 text-[#4A1F7A] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
                  {reason.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 italic max-w-2xl mx-auto">
            "Your well-being becomes our top priority. Every step of the way."
          </p>
        </div>
      </div>
    </section>
  );
}
