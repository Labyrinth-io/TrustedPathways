import React from 'react';
import {
  Users,
  ClipboardList,
  Calendar,
  Search,
  TrendingUp,
  PhoneCall,
  FileText,
  AlertCircle
} from "lucide-react";

export default function ValueStackSection() {
  const values = [
    { icon: Users, title: "A dedicated support coordinator", description: "Your personal guide through the NDIS" },
    { icon: ClipboardList, title: "Personalised support plan", description: "Tailored to your unique needs and goals" },
    { icon: Calendar, title: "Appointment scheduling & follow-ups", description: "We handle the logistics for you" },
    { icon: Search, title: "Help finding the right providers", description: "Connect with trusted services" },
    { icon: TrendingUp, title: "Funding guidance & plan maximisation", description: "Get the most from your NDIS plan" },
    { icon: PhoneCall, title: "Regular check-ins and proactive support", description: "We're always here for you" },
    { icon: FileText, title: "Help with forms, applications, and problems", description: "No more paperwork stress" },
    { icon: AlertCircle, title: "Emergency assistance when needed", description: "Support when it matters most" },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-[#4A1F7A] font-semibold text-sm tracking-wide uppercase mb-4">
            What You Get
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Complete Support,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A1F7A] to-[#7C3AED]">
              Zero Stress
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to navigate your NDIS journey with confidence
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center mb-4 group-hover:from-[#4A1F7A] group-hover:to-[#7C3AED] transition-all duration-300">
                <value.icon className="w-7 h-7 text-[#4A1F7A] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-sm text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
