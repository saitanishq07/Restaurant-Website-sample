import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CHEF_INFO } from '../data/restaurantData';
import { ArrowRight, Flame, Quote } from 'lucide-react';

export default function ChefSection() {
  return (
    <section className="py-24 sm:py-32 bg-ember-black text-ember-cream relative overflow-hidden border-t border-ember-gold/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-center space-x-2 text-ember-gold text-xs tracking-[0.3em] font-sans uppercase mb-12">
          <Flame className="w-4 h-4" />
          <span>CULINARY LEADERSHIP</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Chef Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 aspect-[3/4] overflow-hidden border border-ember-gold/25 group">
              <img
                src={CHEF_INFO.image}
                alt={CHEF_INFO.name}
                className="w-full h-full object-cover filter brightness-90 contrast-110 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ember-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-serif text-2xl font-normal text-ember-cream">
                  {CHEF_INFO.name}
                </p>
                <p className="text-xs font-sans tracking-widest text-ember-gold uppercase mt-0.5">
                  {CHEF_INFO.title}
                </p>
              </div>
            </div>

            {/* Subtle Gold Frame Underlay */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-ember-gold/20 pointer-events-none hidden sm:block" />
          </motion.div>

          {/* Chef Philosophy & Narrative Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-ember-cream leading-[1.1]">
                THE CHEF
              </h2>
              <p className="text-xs font-sans tracking-[0.25em] text-ember-gold uppercase mt-2">
                EXECUTIVE CHEF ARJUN RAO
              </p>
            </div>

            <p className="font-sans text-base sm:text-lg text-ember-cream/80 font-light leading-relaxed">
              "Chef Arjun Rao brings together regional Indian traditions, open-fire cooking and modern culinary technique."
            </p>

            {/* Signature Philosophy Block */}
            <div className="p-8 bg-ember-dark border border-ember-gold/20 relative">
              <Quote className="w-10 h-10 text-ember-gold/20 absolute top-4 right-4" />
              <div className="space-y-2 relative z-10">
                <span className="text-[10px] font-sans tracking-[0.3em] text-ember-gold uppercase font-semibold">
                  SIGNATURE PHILOSOPHY
                </span>
                <blockquote className="font-serif text-2xl sm:text-3xl italic text-ember-cream font-normal">
                  "{CHEF_INFO.philosophy}"
                </blockquote>
              </div>
            </div>

            {/* Highlights List */}
            <ul className="space-y-3 pt-2">
              {CHEF_INFO.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-ember-cream/70 font-sans font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-ember-gold mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link
                to="/chef"
                className="inline-flex items-center space-x-3 text-xs font-sans tracking-[0.25em] text-ember-gold hover:text-ember-gold-light uppercase group font-semibold"
              >
                <span>MEET OUR CHEF</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
