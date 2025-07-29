'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Vše Pro Stavby s.r.o. | Moderní stavby a rekonstrukce";
    
    const faviconUrl = "https://via.placeholder.com/32x32/16a34a/ffffff?text=V";
    let link: HTMLLinkElement | null = document.querySelector("link[rel='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = faviconUrl;
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '#sluzby', label: 'Služby' },
    { href: '#reference', label: 'Reference' },
    { href: '#onas', label: 'O nás' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  const services = [
      { icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/tractor.svg', title: 'Zemní a výkopové práce' },
      { icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/ruler-2.svg', title: 'Základové desky' },
      { icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/building-community.svg', title: 'Hrubé stavby' },
      { icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/paint.svg', title: 'Rekonstrukce' },
      { icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/plug-connected.svg', title: 'Zasíťování pozemků' },
      { icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/layers-subtract.svg', title: 'Zateplení a fasády' },
      { icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/rooftop.svg', title: 'Střechy' },
      { icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/key.svg', title: 'Stavby na klíč' },
  ];

  const references = [
    {
      image: '/images/project-tanvald-renovated-chalupa.jpg',
      title: 'Omlazení chalupy u Tanvaldu',
      description: 'Fasáda, zateplení'
    },
    {
      image: '/images/project-prague-renovated-family-house.jpg',
      title: 'Rekonstrukce rodinného domu',
      description: 'Praha'
    },
    {
      image: '/images/project-jevany-new-modern-house-exterior.jpg',
      title: 'Novostavba RD Jevany',
      description: 'Kompletní realizace'
    },
    {
      image: '/images/project-brno-office-building-facade-after.jpg',
      title: 'Fasáda bytového domu',
      description: 'Brno'
    }
  ];

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-green-700 tracking-wider">
            Vše Pro Stavby s.r.o.
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-600 hover:text-green-700 transition-colors duration-300">
                {link.label}
              </a>
            ))}
          </nav>
          <button onClick={toggleMenu} className="md:hidden z-50">
            <img src={isMenuOpen ? "https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/x.svg" : "https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/menu-2.svg"} alt="Menu Icon" className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center md:hidden">
          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={toggleMenu} className="text-2xl text-gray-700 hover:text-green-700 transition-colors duration-300">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}

      <main>
        {/* Hero Section */}
        <section id="home" className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-white">
            <Image 
                src="/images/project-prague-family-house-after.jpg"
                alt="Zrekonstruovaný rodinný dům" 
                layout="fill"
                objectFit="cover"
                quality={80}
                priority
                className="absolute inset-0 z-0"
            />
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <div className="relative z-20 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Stavíme a rekonstruujeme s péčí</h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 drop-shadow-md">
                    Jsme stavební firma specializující se na kompletní realizaci staveb, od rekonstrukcí po novostavby na klíč.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#sluzby" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 duration-300 shadow-lg">Naše služby</a>
                    <a href="#kontakt" className="bg-white/20 backdrop-blur-sm border border-white/50 hover:bg-white/30 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 duration-300 shadow-lg">Kontaktujte nás</a>
                </div>
            </div>
        </section>


        {/* Services Section */}
        <section id="sluzby" className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Naše služby</h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Nabízíme komplexní řešení pro vaši stavbu, od počátečních zemních prací až po finální úpravy.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <img src={service.icon} alt={`${service.title} icon`} className="w-12 h-12 mx-auto mb-4 text-green-600" />
                  <h3 className="font-semibold text-lg">{service.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* References Section */}
        <section id="reference" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Naše Reference</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Prohlédněte si výběr z našich dokončených projektů.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {references.map((ref, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                  <div className="relative h-56 w-full">
                     <Image 
                        src={ref.image} 
                        alt={ref.title}
                        layout='fill'
                        objectFit='cover'
                        className="transition-transform duration-500 group-hover:scale-110"
                      />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-1">{ref.title}</h3>
                    <p className="text-gray-500 text-sm">{ref.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="onas" className="py-20 bg-white">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/images/project-tanvald-hallway-renovation-after.jpg"
                alt="Interiér po rekonstrukci"
                width={600}
                height={400}
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
            <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">O nás</h2>
                <p className="text-gray-600 mb-6">
                  Vše Pro Stavby s.r.o. je dynamicky se rozvíjející stavební společnost s cílem poskytovat kvalitní a komplexní služby. Zakládáme si na individuálním přístupu, spolehlivosti a zkušenostech našeho týmu profesionálů.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-bold text-green-700">KVALITA</h4>
                        <p className="text-sm text-gray-600">Prvotřídní materiály a práce.</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-bold text-green-700">SPOLEHLIVOST</h4>
                        <p className="text-sm text-gray-600">Dodržujeme termíny a rozpočty.</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-bold text-green-700">ZKUŠENOSTI</h4>
                        <p className="text-sm text-gray-600">Léta praxe v oboru.</p>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontakt" className="py-20 bg-gray-800 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kontaktujte nás</h2>
            <p className="text-gray-300 mb-12 max-w-2xl mx-auto">Máte dotaz nebo zájem o naše služby? Neváhejte se nám ozvat.</p>
            <div className="max-w-md mx-auto bg-gray-700 p-8 rounded-lg shadow-2xl text-left">
                <h3 className="font-bold text-xl mb-4 text-green-400">Vše Pro Stavby s.r.o.</h3>
                <p className="text-gray-300 mb-4">IČO: 07703813 | DIČ: CZ07703813</p>
                <div className="space-y-4">
                    <div className="flex items-center">
                         <img src="https://heroicons.com/24/solid/map-pin.svg" alt="Adresa" className="w-6 h-6 mr-4 text-green-400 flex-shrink-0"/>
                         <span className="text-gray-200">Rybná 716/24, Staré Město, 110 00 Praha 1</span>
                    </div>
                    <div className="flex items-center">
                        <img src="https://heroicons.com/24/solid/phone.svg" alt="Telefon" className="w-6 h-6 mr-4 text-green-400 flex-shrink-0"/>
                        <a href="tel:+420725932772" className="text-gray-200 hover:text-green-400 transition-colors">+420 725 932 772</a>
                    </div>
                    <div className="flex items-center">
                        <img src="https://heroicons.com/24/solid/envelope.svg" alt="Email" className="w-6 h-6 mr-4 text-green-400 flex-shrink-0"/>
                        <a href="mailto:info@vseprostavby.cz" className="text-gray-200 hover:text-green-400 transition-colors">info@vseprostavby.cz</a>
                    </div>
                </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-6">
        <div className="container mx-auto px-6 text-center">
            <p className="mb-2">&copy; {new Date().getFullYear()} Vše Pro Stavby s.r.o. Všechna práva vyhrazena.</p>
            <p className="text-sm">
              Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">DigitalFusion</a>
            </p>
        </div>
      </footer>
    </div>
  );
}