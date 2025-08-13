import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

// Fonction de traduction complète
const translations = {
  fr: {
    // Navigation
    about: 'À propos',
    services: 'Services',
    contact: 'Contact',
    
    // Chargement
    loading: 'Chargement en cours',
    
    // Services
    serviceSecurity: 'Gardiennage',
    securityDescription: 'Surveillance de sites industriels et commerciaux 24h/24 avec agents certifiés.',
    serviceMagasin: 'Sécurité Magasin',
    magasinDescription: 'Protection contre le vol et surveillance discrète en magasins et commerces.',
    serviceIncendie: 'Sécurité Incendie',
    incendieDescription: 'Prévention, surveillance et intervention incendie certifiée SSIAP.',
    serviceCynophile: 'Garde Maître Chien',
    cynophileDescription: 'Équipes cynophiles spécialisées pour la détection et la dissuasion.',
    serviceVideo: 'Sécurité Vidéo',
    videoDescription: 'Systèmes de surveillance vidéo haute définition avec monitoring 24/7.',
    serviceVip: 'Accompagnement Protection Rapprochée VIP',
    vipSubtitle: 'Véhicules Prestige',
    vipDescription: 'Service de protection rapprochée avec chauffeurs d\'élite et véhicules blindés.',
    vipAccompagnement: 'Accompagnement VIP',
    vipAccompagnementDesc: 'Service d\'accompagnement haut de gamme avec véhicules de luxe et chauffeurs professionnels.',
    
    // About Section
    aboutTitle1: 'Qui',
    aboutTitle2: 'sommes-nous',
    aboutDescription: 'Prestige Sécurité est une société experte dans la sécurité des biens et des personnes. Grâce à l\'expérience de plus de 20 ans de notre direction, nous assurons un service rigoureux, professionnel et de confiance.',
    availability: '24/7',
    availabilityText: 'Disponibilité',
    professionalism: '100%',
    professionalismText: 'Professionnalisme',
    discretion: 'Discrétion',
    
    // Domaines d'intervention
    domainsTitle: 'Domaines d\'intervention',
    grandeDistribution: 'Grande Distribution',
    grandeDistributionSub: 'Intervention rapide',
    sitesExposes: 'Sites exposés aux trafics',
    sitesExposesSub: 'Intervention rapide',
    transportsPublics: 'Transports publics',
    transportsPublicsSub: 'Sécurisation continue',
    quartiersSensibles: 'Quartiers sensibles',
    quartiersSensiblesSub: 'Présence dissuasive',
    bailleursSociaux: 'Bailleurs sociaux',
    bailleursSociauxSub: 'Partenariat durable',
    
    // Footer
    followUs: 'SUIVEZ-NOUS',
    parisAddress: 'Paris',
    parisStreet: '40 rue Alexandre Dumas',
    parisPostal: '75011 Paris, France',
    roubaixAddress: 'Roubaix',
    roubaixStreet: '25 Boulevard de la République',
    roubaixPostal: '59100 Roubaix, France',
    contactSection: 'Contact',
    phone: '07 81 84 42 36',
    email: 'prestigesecurite59@gmail.com',
    authorization: 'Autorisation',
    authorizationNumber: 'AUT-059-2123-12-09-20240960800',
    legalNotice: 'Conformément à l\'article L.612-14 du Code de la sécurité intérieure :',
    legalText: '« L\'autorisation d\'exercice ne confère aucune prérogative de puissance publique à l\'entreprise ou aux personnes qui en bénéficient. »',
    allRightsReserved: '© 2024 PRESTIGE SÉCURITÉ — TOUS DROITS RÉSERVÉS',
    
    // WhatsApp
    whatsappTooltip: 'Nous contacter sur WhatsApp',
    
    // Menu Mobile
    menuHours: '24H/24 • 7J/7'
  },
  en: {
    // Navigation
    about: 'About',
    services: 'Services',
    contact: 'Contact',
    
    // Loading
    loading: 'Loading...',
    
    // Services
    serviceSecurity: 'Security Guard',
    securityDescription: 'Industrial and commercial site surveillance 24/7 with certified agents.',
    serviceMagasin: 'Store Security',
    magasinDescription: 'Theft protection and discreet surveillance in stores and shops.',
    serviceIncendie: 'Fire Security',
    incendieDescription: 'Fire prevention, surveillance and certified SSIAP intervention.',
    serviceCynophile: 'Dog Handler Security',
    cynophileDescription: 'Specialized canine teams for detection and deterrence.',
    serviceVideo: 'Video Security',
    videoDescription: 'High-definition video surveillance systems with 24/7 monitoring.',
    serviceVip: 'VIP Close Protection Escort',
    vipSubtitle: 'Prestige Vehicles',
    vipDescription: 'Close protection service with elite drivers and armored vehicles.',
    vipAccompagnement: 'VIP Escort',
    vipAccompagnementDesc: 'High-end escort service with luxury vehicles and professional drivers.',
    
    // About Section
    aboutTitle1: 'Who',
    aboutTitle2: 'we are',
    aboutDescription: 'Prestige Security is an expert company in property and personal security. Thanks to our management\'s 20+ years of experience, we ensure rigorous, professional and trustworthy service.',
    availability: '24/7',
    availabilityText: 'Availability',
    professionalism: '100%',
    professionalismText: 'Professionalism',
    discretion: 'Discretion',
    
    // Domains Section
    domainsTitle: 'Intervention Domains',
    grandeDistribution: 'Retail',
    grandeDistributionSub: 'Rapid intervention',
    sitesExposes: 'Exposed sites to trafficking',
    sitesExposesSub: 'Rapid intervention',
    transportsPublics: 'Public transport',
    transportsPublicsSub: 'Continuous security',
    quartiersSensibles: 'Sensitive neighborhoods',
    quartiersSensiblesSub: 'Deterrent presence',
    bailleursSociaux: 'Social landlords',
    bailleursSociauxSub: 'Lasting partnership',
    
    // Footer
    followUs: 'FOLLOW US',
    parisAddress: 'Paris',
    parisStreet: '40 rue Alexandre Dumas',
    parisPostal: '75011 Paris, France',
    roubaixAddress: 'Roubaix',
    roubaixStreet: '25 Boulevard de la République',
    roubaixPostal: '59100 Roubaix, France',
    contactSection: 'Contact',
    phone: '07 81 84 42 36',
    email: 'prestigesecurite59@gmail.com',
    authorization: 'Authorization',
    authorizationNumber: 'AUT-059-2123-12-09-20240960800',
    legalNotice: 'In accordance with article L.612-14 of the Internal Security Code:',
    legalText: '"The exercise authorization does not confer any prerogative of public power to the company or the persons who benefit from it."',
    allRightsReserved: '© 2024 PRESTIGE SECURITY — ALL RIGHTS RESERVED',
    
    // WhatsApp
    whatsappTooltip: 'Contact us on WhatsApp',
    
    // Menu Mobile
    menuHours: '24/7'
  }
}

// Composant d'arrière-plan animé
const AnimatedBackground = () => {
  return (
    <>
      {/* Lignes flottantes */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-[1px] bg-gradient-to-r from-transparent via-amber-400/10 to-transparent"
          style={{
            width: `${Math.random() * 200 + 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [-100, 100],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}

      {/* Cercles pulsants */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute rounded-full bg-amber-400/5"
          style={{
            width: `${Math.random() * 200 + 50}px`,
            height: `${Math.random() * 200 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: Math.random() * 8 + 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Points lumineux */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-1 h-1 bg-amber-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}
    </>
  );
};

// Composant ServiceCard amélioré avec alignement parfait des textes
const ServiceCard = ({ title, description, image, video, alt, delay = 0 }: { 
  title: string, 
  description: string, 
  image: string,
  video?: string,
  alt?: string,
  delay?: number 
}) => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const startCycle = () => {
    if (!video) return;

    const showImage = () => {
      setShowVideo(false);
      timeoutRef.current = setTimeout(showVideoAndPlay, 3000); // Image reste 3 secondes
    };

    const showVideoAndPlay = () => {
      setShowVideo(true);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
      timeoutRef.current = setTimeout(showImage, 7000); // Vidéo reste 7 secondes
    };

    // Démarre avec l'image
    showImage();
  };

  useEffect(() => {
    startCycle();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      className="relative overflow-hidden rounded-none h-[580px]"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay }}
    >
      <motion.div className="relative h-full">
        {/* Effet de bordure animée */}
        <motion.div
          className="absolute -inset-[1px] bg-gradient-to-r from-amber-400/20 via-transparent to-amber-400/20"
          animate={{
            backgroundPosition: ["200% 0", "-200% 0"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Image et vidéo - à l'intérieur de la card */}
          <img 
            src={image}
            alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${showVideo ? 'opacity-0' : 'opacity-100'}`}
          />
          
          {video && (
            <video
              ref={videoRef}
              src={video}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${showVideo ? 'opacity-100' : 'opacity-0'}`}
              loop
              muted
              playsInline
            />
          )}

          {/* Overlay avec animation de gradient */}
          <motion.div 
            className="absolute inset-0"
            animate={{
              background: [
                "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5), rgba(0,0,0,0.8))",
                "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.3), rgba(0,0,0,0.8))",
                "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5), rgba(0,0,0,0.8))",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          {/* Particules animées sur la carte */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-amber-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
            />
          ))}

        {/* Contenu texte - position fixe pour alignement parfait peu importe la longueur */}
        <div className="absolute bottom-12 left-0 right-0 p-8">
          {/* Ligne animée - toujours à la même position */}
              <motion.div
            className="h-[1px] bg-amber-400/60 mb-6"
                animate={{
                  width: ["0%", "100%", "0%"],
                  x: ["0%", "0%", "100%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

          {/* Zone de contenu avec hauteur fixe pour alignement parfait */}
          <div className="h-32 flex flex-col justify-start">
            {/* Titre avec animation de flottement - position fixe */}
              <motion.h3
              className="text-white text-3xl font-extralight tracking-[0.02em] leading-tight mb-4 h-16 flex items-center"
                style={{ 
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif',
                  fontWeight: 100
                }}
                animate={{
                  y: [-2, 2, -2],
                  opacity: [0.9, 1, 0.9],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {title}
              </motion.h3>

            {/* Description avec animation de fade - hauteur contrôlée */}
              <motion.p
              className="text-white/70 font-extralight text-base leading-relaxed tracking-wide flex-1 overflow-hidden"
                style={{ 
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif',
                  fontWeight: 100
                }}
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
              {description.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < description.split('\n').length - 1 && <br />}
                </span>
              ))}
              </motion.p>
          </div>

          {/* Indicateur animé - position fixe */}
              <motion.div
            className="flex items-center space-x-2 mt-4"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="w-2 h-2 rounded-full bg-amber-400/60"
                  animate={{
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="w-2 h-2 rounded-full bg-amber-400/60"
                  animate={{
                    opacity: [1, 0.4, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
            </motion.div>
          </div>
      </motion.div>
    </motion.div>
  );
};

// Section Services avec animations améliorées
const ServicesSection = () => {
  return (
    <section id="services" className="py-48 bg-black relative overflow-hidden">
      <AnimatedBackground />

      <div className="max-w-[1400px] mx-auto px-12 lg:px-20 relative">
        {/* En-tête avec animations continues */}
        <motion.div className="text-center mb-40">
          <motion.h2
            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight text-white mb-12 tracking-[-0.03em] leading-[0.85]"
            style={{ 
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif',
              fontWeight: 100
            }}
            animate={{
              opacity: [0.8, 1, 0.8],
              y: [-2, 2, -2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Services de Sécurité
          </motion.h2>

          <motion.div
            className="h-[1px] bg-amber-400/40 mx-auto mb-8 w-32"
          />

          <motion.p
            className="text-white/40 font-extralight text-2xl tracking-[0.02em]"
            style={{ 
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif',
              fontWeight: 100
            }}
          >
            Gardiennage • Surveillance • Protection VIP
          </motion.p>
        </motion.div>

        {/* Grid des services avec animations séquentielles */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-28 mb-48">
          {[
            {
              title: "Agent de Sécurité Rondier",
              description: "Surveillance statique 24h/24 ;\nRondes d'intervention rapide ;\nSécurisation des accès ;\nVeille opérationnelle.",
              image: "/images/gardiennage.jpeg",
              video: "/videos/5122837_Security_Guard_Security_3840x2160.mp4",
              delay: 0.2,
            },
            {
              title: "Agent de Sécurité",
              description: "Prévention des vols ;\nGestion des incivilités ;\nContrôle des accès ;\nPics d'affluence.",
              image: "/images/secu-MAGASIN.jpeg",
              video: "/videos/securitemagasin.mp4",
              delay: 0.4,
            },
            {
              title: "Agent SSIAP",
              description: "Certification SSIAP 1, 2, 3 ;\nPrévention incendie ;\nGestion des évacuations ;\nPremiers secours.",
              image: "/images/SECU-incendie.jpeg",
              video: "/videos/incendiee2.mp4",
              delay: 0.6,
            },
          ].map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Services spécialisés en 3 colonnes avec responsive amélioré */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-20 xl:gap-28 mb-48">
          <div className="w-full">
            <ServiceCard
              title="Agent Cynophile"
              description="Maître-chien certifié ; Zones sensibles 24h/24 ; Rondes nocturnes ; Chiens dressés et certifiés."
              image="/images/maitrechien.jpeg"
              video="/videos/gardemaitrechien.mp4"
              alt="Agent cynophile de Prestige Sécurité avec son chien, spécialisé en surveillance de zones sensibles."
              delay={0.2}
            />
          </div>
          <div className="w-full">
            <ServiceCard
              title="Agent de Surveillance"
              description="Monitoring vidéo 24h/24 ;
Détection d'intrusion ;
Gestion des alarmes ;
Rapports d'intervention."
              image="/images/securitevideo.jpeg"
              video="/videos/agentsurveillance.mp4"
              delay={0.4}
            />
          </div>
          <div className="w-full">
            <ServiceCard
              title="Accompagnement VIP"
              description="Services avec accompagnateur ;
Chauffeurs professionnels ;
Véhicules de luxe."
              image="/images/accompagnement_vip.jpeg"
              video="/videos/mercedespluie.mp4"
              delay={0.6}
            />
          </div>
        </div>

        {/* Spécialisations détaillées */}
        <div className="mt-32 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="text-center mb-20"
          >
            <h3 className="text-6xl md:text-7xl lg:text-8xl font-extralight text-white mb-12 tracking-[-0.03em]"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif', fontWeight: 100 }}>
              Spécialisations
            </h3>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 120 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5 }}
              className="h-[1px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent mx-auto"
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20 mb-20">
            {[
              {
                icon: '🏢',
                title: 'Grande Distribution',
                description: 'Sécurité fluide et discrète en environnement commercial',
                points: ['Prévention des vols', 'Contrôle d\'accès', 'Assistance clientèle'],
                badge: 'Expert',
                delay: 0.2
              },
              {
                icon: '🔒',
                title: 'Sites Sensibles',
                description: 'Expulsion rapide de squats et sécurisation de zones à risque',
                points: ['Intervention rapide', 'Présence dissuasive', 'Réhabilitation'],
                badge: '100% Réussite',
                delay: 0.4
              },
              {
                icon: '🚇',
                title: 'Transport Public',
                description: 'Protection renforcée des infrastructures de transport',
                points: ['Surveillance 24/7', 'Gestion des flux', 'Contrôle préventif'],
                badge: 'Spécialiste',
                delay: 0.6
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: item.delay, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                {/* Carte ultra épurée */}
                <div className="relative bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-3xl rounded-2xl border border-white/5 overflow-hidden h-96 flex flex-col justify-between p-8 group-hover:border-amber-400/20 transition-all duration-700">
                  
                  {/* Effet de glow subtil */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Badge minimaliste */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: item.delay + 0.3 }}
                    className="absolute top-6 right-6 px-3 py-1 bg-amber-400/10 border border-amber-400/20 backdrop-blur-xl rounded-full"
                  >
                    <span className="text-amber-400 text-xs font-extralight tracking-wide">
                      {item.badge}
                    </span>
                  </motion.div>

                  {/* Contenu principal */}
                  <div className="relative z-10">
                    {/* Icône épurée */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: item.delay + 0.1, type: "spring", bounce: 0.3 }}
                      className="text-5xl mb-8 opacity-80"
                    >
                      {item.icon}
                    </motion.div>

                    {/* Titre */}
                    <motion.h4
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: item.delay + 0.2 }}
                      className="text-2xl font-extralight text-white mb-4 tracking-wide"
                      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif', fontWeight: 100 }}
                    >
                      {item.title}
                    </motion.h4>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: item.delay + 0.3 }}
                      className="text-white/60 font-extralight text-sm leading-relaxed mb-6"
                      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif', fontWeight: 100 }}
                    >
                      {item.description}
                    </motion.p>
                  </div>

                  {/* Points clés */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: item.delay + 0.4 }}
                    className="relative z-10 space-y-2"
                  >
                    {item.points.map((point, pointIndex) => (
                      <motion.div
                        key={pointIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: item.delay + 0.5 + pointIndex * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-1 h-1 bg-amber-400/60 rounded-full" />
                        <span className="text-white/50 text-xs font-extralight tracking-wide">
                          {point}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Ligne dorée en bas */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: item.delay + 0.6 }}
                    className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-amber-400/60 via-amber-400/20 to-transparent transform origin-left"
                    style={{ width: '100%' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Statement ultra épuré */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 1 }}
            className="text-center"
          >
            <p className="text-white/20 font-extralight text-lg max-w-2xl mx-auto leading-relaxed tracking-wide"
               style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif', fontWeight: 100 }}>
              Notre savoir-faire repose sur des procédures maîtrisées et une présence continue sur le terrain.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const RecruitmentSection = () => {
  return (
    <section className="relative h-screen bg-black overflow-hidden">
      {/* Vidéo en arrière-plan avec overlay */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          src="/videos/recrutement.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Contenu centré */}
      <div className="relative h-full max-w-[1400px] mx-auto px-12 lg:px-20 flex flex-col items-center justify-center">
        {/* Ligne animée supérieure */}
        <motion.div
          className="w-[1px] h-32 bg-gradient-to-b from-transparent via-amber-400/30 to-transparent mb-16"
          animate={{
            scaleY: [0.8, 1.2, 0.8],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Titre avec animation de fade */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-7xl md:text-8xl lg:text-9xl font-extralight text-white mb-8 tracking-[-0.03em] text-center"
          style={{ 
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif',
            fontWeight: 100
          }}
        >
          Recrutement
        </motion.h2>

        {/* Sous-titre avec animation de fade */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/60 font-extralight mb-16 text-center max-w-2xl"
          style={{ 
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif',
            fontWeight: 100
          }}
        >
          Rejoignez une équipe d'agents expérimentés dans la gestion de sites sensibles. Notre capacité d'adaptation rapide et notre réactivité immédiate font notre force.
        </motion.p>

        {/* Call to action avec animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative group"
        >
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-amber-400/0 via-amber-400/30 to-amber-400/0 rounded-full blur-sm"
            animate={{
              backgroundPosition: ["200% 0", "-200% 0"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <a
            href="#contact"
            className="relative px-12 py-5 bg-black border border-amber-400/30 text-white/90 rounded-full text-lg font-light tracking-wider hover:border-amber-400/50 transition-colors duration-500"
            style={{ 
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif',
              fontWeight: 200
            }}
          >
            Postuler maintenant
          </a>
        </motion.div>

        {/* Ligne animée inférieure */}
        <motion.div
          className="w-[1px] h-32 bg-gradient-to-b from-transparent via-amber-400/30 to-transparent mt-16"
          animate={{
            scaleY: [0.8, 1.2, 0.8],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Particules subtiles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-amber-400/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </section>
  );
};

export default function Home() {
  const [language, setLanguage] = useState('fr')
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Fonction pour obtenir la traduction
  const t = (key: string) => {
    const langObj = translations[language as 'fr' | 'en'];
    return (langObj as any)[key] || key;
  };

  // Fonction pour basculer la langue
  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr')
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    // Simulation du chargement
    const loadingTimer = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(loadingTimer)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(loadingTimer)
  }, [])

  useEffect(() => {
    // Détection du scroll pour changer la navbar
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
      
      // Fermer le menu mobile lors du scroll
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobileMenuOpen])

  return (
    <div className="bg-black text-white min-h-screen font-thin relative overflow-hidden">
      {/* Écran de chargement épuré et professionnel */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          >
            {/* Logo avec animation */}
            <div className="text-center space-y-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative"
              >
                {/* Logo */}
                <img 
                  src="/images/vrailogo.jpeg" 
                  alt="Prestige Sécurité Logo" 
                  className="h-32 w-auto mx-auto mb-6"
                />
              </motion.div>

              {/* Barre de progression minimaliste */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="w-64 space-y-4"
              >
                {/* Barre de progression */}
                <div className="relative h-px bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${loadingProgress}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-amber-400 to-amber-300"
                  />
            </div>

                {/* Pourcentage */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="text-white/40 text-xs font-light text-center tabular-nums"
                  style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif' }}
                >
                  {Math.round(loadingProgress)}%
                </motion.div>
              </motion.div>

              {/* Message de chargement */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                className="text-white/30 text-sm font-light tracking-[0.1em] uppercase"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif' }}
              >
                {t('loading')}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bouton WhatsApp flottant ultra amélioré */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 3 }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50"
      >
        <motion.a
          href="https://wa.me/33781844236"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow"
        >
          <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
          </svg>
          
          {/* Tooltip responsive */}
          <div className="absolute right-full mr-2 sm:mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-white text-gray-900 px-2 py-1 sm:px-3 sm:py-2 rounded-lg shadow-lg text-xs sm:text-sm font-thin whitespace-nowrap">
              {t('whatsappTooltip')}
          </div>
        </div>

          {/* Pulsation animée */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 bg-green-400 rounded-full opacity-20"
          />
        </motion.a>
      </motion.div>

      {/* Navbar Ultra Épurée 3.0 */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 2.5, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          isScrolled 
            ? 'bg-black/70 backdrop-blur-2xl border-b border-white/5' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-28">
            {/* Logo avec animation raffinée */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative group cursor-pointer select-none"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-amber-400/10 via-amber-400/5 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <img 
                src="/images/vrailogo.jpeg" 
                alt="Logo Prestige" 
                className="h-20 w-auto relative transition-all duration-300 object-contain"
                draggable="false"
              />
          </motion.div>
            
            {/* Navigation centrale ultra épurée */}
            <div className="hidden lg:flex items-center space-x-16">
                {[
                  { href: "#about", label: t('about') },
                  { href: "#services", label: t('services') },
                  { href: "#contact", label: t('contact') }
                ].map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 3 + index * 0.1 }}
                  className="relative group select-none focus:outline-none active:outline-none"
                  style={{ 
                    WebkitTapHighlightColor: 'transparent',
                    WebkitUserSelect: 'none',
                    userSelect: 'none',
                    outline: 'none'
                  }}
                >
                  <span className="text-white/50 group-hover:text-white font-light text-sm tracking-[0.2em] transition-all duration-500">
                    {item.label}
                  </span>
                  <span className="absolute -bottom-2 left-1/2 w-1 h-1 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-1/2 group-hover:scale-100" />
                  </motion.a>
                ))}
        </div>

            {/* Actions à droite */}
            <div className="flex items-center space-x-8">
              {/* Bouton de langue ultra raffiné */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 3.3 }}
                onClick={toggleLanguage}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group select-none focus:outline-none active:outline-none"
                style={{ 
                  WebkitTapHighlightColor: 'transparent',
                  WebkitUserSelect: 'none',
                  userSelect: 'none',
                  outline: 'none'
                }}
              >
                <div className="relative px-6 py-2.5 overflow-hidden rounded-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 via-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute inset-[1px] rounded-full bg-black/50 backdrop-blur-sm transition-all duration-500" />
                  <span className="relative z-10 text-amber-400/90 text-xs font-light tracking-[0.3em] transition-colors duration-500">
                {language === 'fr' ? 'EN' : 'FR'}
                  </span>
                </div>
              </motion.button>

              {/* Menu hamburger ultra sophistiqué */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 3.5 }}
                onClick={toggleMobileMenu}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                className="lg:hidden relative group p-4 select-none focus:outline-none active:outline-none z-[70]"
                style={{ 
                  WebkitTapHighlightColor: 'transparent',
                  WebkitUserSelect: 'none',
                  userSelect: 'none',
                  outline: 'none'
                }}
              >
                {/* Container avec backdrop magnétique */}
                <motion.div
                  className="absolute -inset-3 rounded-2xl"
                  animate={{
                    backgroundColor: isMobileMenuOpen 
                      ? 'rgba(255, 195, 0, 0.15)' 
                      : 'rgba(255, 255, 255, 0.05)',
                    scale: isMobileMenuOpen ? 1.2 : 1,
                    rotate: isMobileMenuOpen ? 180 : 0
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
                
                {/* Icône burger ultra sophistiquée */}
                <div className="relative z-10 w-7 h-7 flex flex-col justify-center items-center">
                  {/* Ligne 1 */}
                  <motion.span
                    className="absolute block rounded-full origin-center"
                    style={{ width: 28, height: 2 }}
                    animate={isMobileMenuOpen ? {
                      rotate: 45,
                      y: 0,
                      backgroundColor: '#FFC300',
                      boxShadow: '0 0 15px rgba(255, 195, 0, 0.8)',
                      scaleX: 1.2
                    } : {
                      rotate: 0,
                      y: -6,
                      backgroundColor: '#ffffff99',
                      boxShadow: 'none',
                      scaleX: [1, 0.8, 1]
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                      scaleX: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                  />
                  
                  {/* Ligne 2 */}
                  <motion.span
                    className="absolute block rounded-full"
                    style={{ width: 28, height: 2, backgroundColor: '#ffffff99' }}
                    animate={isMobileMenuOpen ? {
                      opacity: 0,
                      scaleX: 0,
                      rotate: 360
                    } : {
                      opacity: 1,
                      scaleX: [1, 0.6, 1],
                      rotate: 0
                    }}
                    transition={{
                      duration: 0.3,
                      scaleX: { duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }
                    }}
                  />
                  
                  {/* Ligne 3 */}
                  <motion.span
                    className="absolute block rounded-full origin-center"
                    style={{ width: 28, height: 2 }}
                    animate={isMobileMenuOpen ? {
                      rotate: -45,
                      y: 0,
                      backgroundColor: '#FFC300',
                      boxShadow: '0 0 15px rgba(255, 195, 0, 0.8)',
                      scaleX: 1.2
                    } : {
                      rotate: 0,
                      y: 6,
                      backgroundColor: '#ffffff99',
                      boxShadow: 'none',
                      scaleX: [1, 0.8, 1]
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                      scaleX: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }
                    }}
                  />
                </div>

                {/* Effet lumineux périphérique */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0"
                  whileHover={{ opacity: 1 }}
                  style={{
                    background: 'radial-gradient(circle, rgba(255, 195, 0, 0.1) 0%, transparent 70%)',
                    filter: 'blur(8px)'
                  }}
                />
              </motion.button>
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          * {
            -webkit-tap-highlight-color: transparent;
          }
          
          a, button {
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            user-select: none;
            outline: none !important;
          }

          a:focus, button:focus {
            outline: none !important;
            box-shadow: none !important;
          }

          a:active, button:active {
            outline: none !important;
            background: transparent !important;
          }
        ` }} />
      </motion.nav>

      {/* Mega Menu Mobile Ultra Minimaliste */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            {/* Background épuré */}
            <motion.div
              className="absolute inset-0 bg-black"
              onClick={closeMobileMenu}
            />
            
            {/* Contenu centré ultra simple */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 h-full flex flex-col justify-center items-center px-8"
            >
              {/* Logo simple */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mb-16"
              >
                <img 
                  src="/images/vrailogo.jpeg" 
                  alt="Prestige Sécurité" 
                  className="h-20 w-auto mx-auto mb-6"
                />
                <div className="w-16 h-[1px] bg-amber-400/60 mx-auto" />
              </motion.div>

              {/* Navigation ultra simple */}
              <div className="space-y-8 text-center mb-16">
                {[
                  { href: "#about", label: t('about') },
                  { href: "#services", label: t('services') },
                  { href: "#contact", label: t('contact') }
                ].map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    onClick={closeMobileMenu}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block text-white/80 hover:text-amber-400 text-3xl font-extralight tracking-wide transition-colors duration-300"
                    style={{ 
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif',
                      fontWeight: 200
                    }}
                  >
                    {item.label}
                  </motion.a>
                ))}
        </div>
        
              {/* Contact simple */}
          <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="text-center space-y-4"
              >
                <div className="text-amber-400 text-xl font-light tracking-wider">
                  07 81 84 42 36
                </div>
                <div className="text-white/40 text-sm font-extralight">
                  prestigesecurite59@gmail.com
                </div>
                <div className="text-white/30 text-xs font-extralight tracking-widest">
                  {t('menuHours')}
                </div>
              </motion.div>

              {/* Langue simple */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                onClick={toggleLanguage}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 px-8 py-3 border border-amber-400/30 rounded-full text-amber-400 text-sm font-extralight tracking-[0.2em] hover:border-amber-400/60 transition-colors duration-300"
              >
                {language === 'fr' ? 'EN' : 'FR'}
              </motion.button>

              {/* Bouton fermeture simple */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                onClick={closeMobileMenu}
                className="absolute top-8 right-8 w-10 h-10 flex items-center justify-center text-white/60 hover:text-amber-400 transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section Ultra Épurée & Artistique - Version Ultime SEO */}
      <header className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </video>
        <div className="relative z-20 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-widest text-white mb-6">
            Prestige Sécurité
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-light text-amber-400">
            Votre partenaire confiance pour la sécurité privée à Paris & Roubaix
          </p>
        </div>
      </header>

      <main>
        <ServicesSection />
        
        <section id="about" className="py-20 sm:py-28 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-amber-400 mb-8 tracking-wider">
              Qui Sommes-Nous ?
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-12">
              Depuis 2008, Prestige Sécurité s'est imposée comme un leader de la sécurité privée. Notre mission est d'assurer votre tranquillité d'esprit grâce à des solutions sur-mesure et des agents hautement qualifiés, disponibles 24h/24 et 7j/7.
            </p>
            <img 
              src="/images/photo_groupe.jpeg"
              alt="Équipe Prestige Sécurité - Société de sécurité privée agréée Paris Roubaix - Agents SSIAP gardiennage surveillance 24h/24"
              className="max-w-full max-h-[40vh] sm:max-h-[45vh] md:max-h-[50vh] lg:max-h-[55vh] object-contain w-auto h-auto filter contrast-105 brightness-102"
              loading="lazy" decoding="async"
            />
          </div>
        </section>

        <RecruitmentSection />

        <section id="contact-info" className="py-20 sm:py-28 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-amber-400 mb-12 tracking-wider">
              Contactez-Nous
            </h2>
            <p className="text-lg sm:text-xl text-white/80 mb-4">
              Pour toute demande de devis ou information, notre équipe est à votre écoute.
            </p>
            <a href="tel:+33781844236" className="text-2xl sm:text-3xl text-amber-400 hover:text-white transition-colors duration-300">
              07 81 84 42 36
            </a>
          </div>
        </section>
      </main>

      {/* Footer professionnel ultra épuré avec responsive amélioré */}
      <footer className="bg-black pt-20 sm:pt-24 lg:pt-28 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Logo centré */}
          <div className="text-center mt-8">            
            {/* Logo sans animation mais GIGANTESQUE */}
            <img 
              src="/images/vrailogo-removebg-preview.png" 
              alt="Prestige Sécurité" 
              className="h-[32rem] sm:h-[36rem] md:h-[40rem] lg:h-[44rem] xl:h-[48rem] w-auto mx-auto"
            />
          </div>

          {/* Titre "SUIVEZ-NOUS" - collé au logo */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="text-center -mt-24 mb-16"
          >
            <h4 className="text-amber-400/80 font-extralight text-base sm:text-lg tracking-[0.2em] uppercase cursor-pointer hover:text-amber-400 transition-colors duration-300">
              {t('followUs')} EN CLIQUANT ICI
            </h4>
          </motion.div>

          {/* Réseaux sociaux */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="flex justify-center space-x-8 mb-16 sm:mb-20 lg:mb-24 mt-8"
          >
            {/* Facebook */}
            <motion.a
              href="https://www.facebook.com/share/16ovSbcyAt/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center group-hover:border-amber-400/30 group-hover:bg-white/10 transition-all duration-500">
                <svg className="w-6 h-6 text-white/70 group-hover:text-amber-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/prestigesecurite?igsh=MTB1dnM4bGptYnFoeQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center group-hover:border-amber-400/30 group-hover:bg-white/10 transition-all duration-500">
                <svg className="w-6 h-6 text-white/70 group-hover:text-amber-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </div>
              <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.a>

            {/* X (Twitter) */}
            <motion.a
              href="https://x.com/prestigesecu?s=11"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center group-hover:border-amber-400/30 group-hover:bg-white/10 transition-all duration-500">
                <svg className="w-6 h-6 text-white/70 group-hover:text-amber-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href="http://wa.me/33781844236"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center group-hover:border-amber-400/30 group-hover:bg-white/10 transition-all duration-500">
                <svg className="w-6 h-6 text-white/70 group-hover:text-amber-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                </svg>
              </div>
              <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.a>
          </motion.div>

          {/* Grille d'informations responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16">

            {/* Adresses */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Paris */}
              <div className="relative">
                <div className="space-y-2">
                  <h5 className="text-white text-base sm:text-lg font-medium tracking-wide">{t('parisAddress')}</h5>
                  <div className="text-white/70 font-light text-sm sm:text-base leading-relaxed">
                    {t('parisStreet')}<br />
                    {t('parisPostal')}
                  </div>
                </div>
              </div>
              
              {/* Roubaix */}
              <div className="relative">
                <div className="space-y-2">
                  <h5 className="text-white text-base sm:text-lg font-medium tracking-wide">{t('roubaixAddress')}</h5>
                  <div className="text-white/70 font-light text-sm sm:text-base leading-relaxed">
                    {t('roubaixStreet')}<br />
                    {t('roubaixPostal')}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="space-y-4 sm:space-y-6"
            >
              <h5 className="text-white text-base sm:text-lg font-medium tracking-wide">{t('contactSection')}</h5>
              <div className="space-y-3">
                <div className="text-lg sm:text-xl lg:text-2xl text-amber-400 font-bold tracking-wider">
                  {t('phone')}
                </div>
                <div className="text-white/70 font-light text-sm sm:text-base">
                  {t('email')}
                </div>
                <div className="text-white/50 font-light text-xs sm:text-sm uppercase tracking-wider">
                  DISPONIBLE 24H/24 • 7J/7
                </div>
              </div>
            </motion.div>

            {/* Autorisation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="space-y-4 sm:col-span-2 lg:col-span-1"
            >
              <h5 className="text-white text-base sm:text-lg font-medium tracking-wide">{t('authorization')}</h5>
              <div className="text-white/70 font-light text-sm sm:text-base">
                {t('authorizationNumber')}
              </div>
              
              <div className="text-white/50 text-xs sm:text-sm font-light leading-relaxed pt-2">
                <div className="mb-2">{t('legalNotice')}</div>
                <em className="text-white/40">
                  {t('legalText')}
                </em>
              </div>
            </motion.div>

          </div>

          {/* Ligne de séparation */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 1 }}
            className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"
          />

          {/* Copyright */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="text-center"
          >
            <p className="text-white/40 font-light text-xs sm:text-sm tracking-wide">
              {t('allRightsReserved')}
            </p>
          </motion.div>
          
        </div>
      </footer>
    </div>
  )
} 