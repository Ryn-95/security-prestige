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
const ServiceCard = ({ title, description, image, video, delay = 0 }: { 
  title: string, 
  description: string, 
  image: string,
  video?: string,
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
            alt={title}
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
              description="Maître-chien certifié ;
Zones sensibles 24h/24 ;
Rondes nocturnes ;
Chiens dressés et certifiés."
              image="/images/maitrechien.jpeg"
              video="/videos/gardemaitrechien.mp4"
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
      <main>
        <section className="relative min-h-screen overflow-hidden flex items-center justify-center pt-40 pb-32 px-4 sm:px-6 lg:px-8 text-center">
          {/* Fond noir absolu */}
          <div className="absolute inset-0 bg-black" />
          
          {/* Grille technique blueprint ultra fine */}
          <div className="absolute inset-0 opacity-[0.008]" 
               style={{
                 backgroundImage: `
                   linear-gradient(rgba(255, 195, 0, 0.2) 0.5px, transparent 0.5px),
                   linear-gradient(90deg, rgba(255, 195, 0, 0.2) 0.5px, transparent 0.5px)
                 `,
                 backgroundSize: '10px 10px'
               }}
          />

          {/* Ligne d'horizon principale - Animation ultra lente */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 12, delay: 3, ease: "easeInOut" }}
            className="absolute top-1/2 left-0 right-0 h-[0.5px] bg-amber-400/70 transform -translate-y-1/2"
          />

          {/* Lignes de fuite verticales */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 10, delay: 4, ease: "easeInOut" }}
            className="absolute top-0 bottom-0 left-4 sm:left-8 lg:left-16 w-[0.5px] bg-gradient-to-b from-transparent via-amber-400/50 to-transparent"
          />
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 10, delay: 4.5, ease: "easeInOut" }}
            className="absolute top-0 bottom-0 right-4 sm:right-8 lg:right-16 w-[0.5px] bg-gradient-to-b from-transparent via-amber-400/50 to-transparent"
          />

          {/* Cadre technique avec mesures */}
          <div className="absolute inset-x-4 sm:inset-x-8 lg:inset-x-12 top-20 bottom-12 border border-amber-400/20 pointer-events-none">
            {/* Marqueurs de mesure aux coins */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 6 }}
              className="absolute -top-1 -left-1 w-2 h-2 sm:w-3 sm:h-3 border-l-2 border-t-2 border-amber-400/60"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 6.2 }}
              className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 border-r-2 border-t-2 border-amber-400/60"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 6.4 }}
              className="absolute -bottom-1 -left-1 w-2 h-2 sm:w-3 sm:h-3 border-l-2 border-b-2 border-amber-400/60"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 6.6 }}
              className="absolute -bottom-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 border-r-2 border-b-2 border-amber-400/60"
            />

            {/* Lignes de cotation */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 3, delay: 7 }}
              className="absolute -top-6 left-1/4 right-1/4 h-[0.5px] bg-amber-400/40"
            />
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 3, delay: 7.5 }}
              className="absolute -left-6 top-1/4 bottom-1/4 w-[0.5px] bg-amber-400/40"
            />
          </div>
          
          {/* Conteneur principal */}
          <div className="relative z-10 w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* H1 Principal SEO Ultra-Optimisé */}
            <header className="text-center mb-8 sm:mb-12">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeOut", delay: 1.5 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight text-white mb-4 tracking-[-0.02em] leading-tight"
                style={{ 
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif',
                  fontWeight: 100
                }}
              >
              </motion.h1>
            </header>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 4, ease: "easeOut", delay: 2.5 }}
              className="relative"
            >
              {/* Image avec système de mesure technique */}
              <div className="relative inline-block">
                
                {/* Image pure */}
                <div className="relative">
              <img 
                src="/images/photo_groupe.jpeg"
                alt="Équipe Prestige Sécurité - Société de sécurité privée agréée Paris Roubaix - Agents SSIAP gardiennage surveillance 24h/24"
                    className="max-w-full max-h-[40vh] sm:max-h-[45vh] md:max-h-[50vh] lg:max-h-[55vh] object-contain w-auto h-auto filter contrast-105 brightness-102"
                  />
                </div>

                {/* Système de cotation technique avancé */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 3, delay: 5 }}
                  className="absolute -inset-8 sm:-inset-12 lg:-inset-16 pointer-events-none"
                >
                  {/* Lignes de construction principales */}
                  <div className="absolute top-0 left-0 right-0 h-[0.3px] bg-amber-400/30" />
                  <div className="absolute bottom-0 left-0 right-0 h-[0.3px] bg-amber-400/30" />
                  <div className="absolute top-0 bottom-0 left-0 w-[0.3px] bg-amber-400/30" />
                  <div className="absolute top-0 bottom-0 right-0 w-[0.3px] bg-amber-400/30" />
                  
                  {/* Lignes de mesure diagonales */}
                  <div className="absolute top-0 left-0 w-4 h-4 sm:w-6 sm:h-6 border-l border-t border-amber-400/50" />
                  <div className="absolute top-0 right-0 w-4 h-4 sm:w-6 sm:h-6 border-r border-t border-amber-400/50" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 sm:w-6 sm:h-6 border-l border-b border-amber-400/50" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 sm:w-6 sm:h-6 border-r border-b border-amber-400/50" />
                </motion.div>

                {/* Annotations techniques sophistiquées */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 8 }}
                  className="absolute -top-8 sm:-top-10 -left-8 sm:-left-10 text-amber-400/60 text-[8px] sm:text-[10px] font-extralight tracking-[0.4em] leading-tight"
                  style={{ fontFamily: 'SF Mono, Monaco, monospace' }}
                >
                  <div>A1</div>
                  <div className="text-amber-400/40 text-[6px] sm:text-[8px] mt-1">REF</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 8.3 }}
                  className="absolute -top-8 sm:-top-10 -right-8 sm:-right-10 text-amber-400/60 text-[8px] sm:text-[10px] font-extralight tracking-[0.4em] leading-tight text-right"
                  style={{ fontFamily: 'SF Mono, Monaco, monospace' }}
                >
                  <div>B1</div>
                  <div className="text-amber-400/40 text-[6px] sm:text-[8px] mt-1">REF</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 8.6 }}
                  className="absolute -bottom-8 sm:-bottom-10 -left-8 sm:-left-10 text-amber-400/60 text-[8px] sm:text-[10px] font-extralight tracking-[0.4em] leading-tight"
                  style={{ fontFamily: 'SF Mono, Monaco, monospace' }}
                >
                  <div>C1</div>
                  <div className="text-amber-400/40 text-[6px] sm:text-[8px] mt-1">REF</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 8.9 }}
                  className="absolute -bottom-8 sm:-bottom-10 -right-8 sm:-right-10 text-amber-400/60 text-[8px] sm:text-[10px] font-extralight tracking-[0.4em] leading-tight text-right"
                  style={{ fontFamily: 'SF Mono, Monaco, monospace' }}
                >
                  <div>D1</div>
                  <div className="text-amber-400/40 text-[6px] sm:text-[8px] mt-1">REF</div>
                </motion.div>

                {/* Points de mesure précis */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, delay: 9.5 }}
                  className="absolute top-1/4 -left-2 w-1 h-1 bg-amber-400/60 rounded-full"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, delay: 9.7 }}
                  className="absolute top-1/4 -right-2 w-1 h-1 bg-amber-400/60 rounded-full"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, delay: 9.9 }}
                  className="absolute bottom-1/4 -left-2 w-1 h-1 bg-amber-400/60 rounded-full"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, delay: 10.1 }}
                  className="absolute bottom-1/4 -right-2 w-1 h-1 bg-amber-400/60 rounded-full"
                />
              </div>
            </motion.div>
          </div>

          {/* Indicateur de défilement artistique */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 10.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-amber-400/30 text-[8px] sm:text-[10px] font-extralight tracking-[0.4em] uppercase"
              style={{ fontFamily: 'SF Mono, Monaco, monospace' }}
            >
              SCROLL
            </motion.div>
          </motion.div>

          {/* Informations techniques sophistiquées */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 11 }}
            className="absolute bottom-8 right-4 sm:right-8 text-amber-400/25 text-[7px] sm:text-[9px] font-extralight tracking-[0.6em] rotate-90 origin-bottom-right leading-loose"
            style={{ fontFamily: 'SF Mono, Monaco, monospace' }}
          >
            <div>PRESTIGE.SEC</div>
            <div className="text-amber-400/15 text-[6px] sm:text-[7px] mt-2">EST.2008</div>
          </motion.div>

          {/* Coordonnées et métadonnées */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 11.5 }}
            className="absolute top-24 sm:top-32 left-4 sm:left-8 text-amber-400/40 text-[7px] sm:text-[9px] font-extralight leading-loose"
            style={{ fontFamily: 'SF Mono, Monaco, monospace' }}
          >
            <div className="space-y-1">
              <div>LAT: 48.8566°N</div>
              <div>LON: 2.3522°E</div>
              <div className="text-amber-400/30 text-[6px] sm:text-[7px] mt-3">PARIS.FR</div>
              <div className="text-amber-400/30 text-[6px] sm:text-[7px]">UTC+01:00</div>
            </div>
          </motion.div>

          {/* Données techniques en bas à gauche */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 12 }}
            className="absolute bottom-8 left-4 sm:left-8 text-amber-400/40 text-[7px] sm:text-[9px] font-extralight leading-loose"
            style={{ fontFamily: 'SF Mono, Monaco, monospace' }}
          >
            <div className="space-y-1">
              <div>AGENTS: ACTIFS</div>
              <div>STATUS: OPERATIONNEL</div>
              <div className="text-amber-400/30 text-[6px] sm:text-[7px] mt-3">AUT-059-2123</div>
              <div className="text-amber-400/30 text-[6px] sm:text-[7px]">12-09-2024</div>
            </div>
          </motion.div>

          {/* Horloge numérique en haut à droite */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 12.5 }}
            className="absolute top-24 sm:top-32 right-4 sm:right-8 text-amber-400/40 text-[7px] sm:text-[9px] font-extralight text-right leading-loose"
            style={{ fontFamily: 'SF Mono, Monaco, monospace' }}
          >
            <div className="space-y-1">
              <motion.div
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {new Date().toLocaleTimeString('fr-FR', { 
                  hour12: false,
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </motion.div>
              <div className="text-amber-400/30 text-[6px] sm:text-[7px]">
                {new Date().toLocaleDateString('fr-FR', {
                  day: '2-digit',
                  month: '2-digit', 
                  year: 'numeric'
                })}
              </div>
            </div>
          </motion.div>

          {/* Lignes de connexion subtiles entre les éléments */}
          <motion.div
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 8, delay: 13, ease: "easeInOut" }}
            className="absolute inset-0 pointer-events-none"
          >
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path
                d="M 5,12 L 95,12 L 95,95 L 5,95 Z"
                stroke="rgba(255, 195, 0, 0.15)"
                strokeWidth="0.15"
                fill="none"
                strokeDasharray="0.5,2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 10, delay: 13 }}
              />
            </svg>
          </motion.div>

          {/* Animation de scan subtile */}
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
              animate={{
              x: ['100%', '-100%'],
              opacity: [0, 0.15, 0.3, 0.15, 0]
              }}
              transition={{
              duration: 15, 
                repeat: Infinity,
              ease: "linear",
              delay: 15 
              }}
            className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-amber-400/40 to-transparent"
            />
        </section>
      </main>

      {/* Section Vidéo Mercedes Ultra Premium */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            {/* Texte à gauche - Ultra épuré */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4 space-y-12"
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, delay: 0.8 }}
                className="h-[1px] bg-gradient-to-r from-amber-400/60 to-transparent"
              />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="space-y-8"
              >
              <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thin tracking-[-0.02em] mb-4 sm:mb-6 md:mb-8 whitespace-nowrap"
                >
                  <span className="text-white">{t('aboutTitle1')}</span> <span className="text-amber-400">{t('aboutTitle2')}</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="text-white/60 font-thin text-lg max-w-2xl"
              >
                {t('aboutDescription')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 1.6 }}
                  className="grid grid-cols-2 gap-8 sm:gap-12"
                >
                  <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-thin text-amber-400 mb-2">{t('availability')}</div>
                  <div className="text-white/60 font-thin">{t('availabilityText')}</div>
                </div>
                  <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-thin text-amber-400">{t('professionalism')}</div>
                  <div className="text-white/60 font-thin">{t('professionalismText')}</div>
              </div>
                </motion.div>
            </motion.div>
            </motion.div>

            {/* Vidéo à droite - Format premium */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 60 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-8 relative"
            >
              {/* Conteneur vidéo avec effets premium */}
              <div className="relative group">
                {/* Cadre décoratif */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 3, delay: 1 }}
                  className="absolute -inset-[1px] bg-gradient-to-r from-amber-400/20 via-transparent to-amber-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                />
                
                {/* Vidéo principale */}
                <div className="relative w-full h-[380px] md:h-[450px] lg:h-[480px] xl:h-[520px] rounded-xl overflow-hidden bg-black/20 backdrop-blur-sm">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/videos/mercedesnoir.mp4" type="video/mp4" />
                    Votre navigateur ne supporte pas la vidéo.
                  </video>
                  
                  {/* Overlay subtil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Badge premium flottant */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 2 }}
                    className="absolute top-8 left-8"
                  >
                    <div className="bg-black/60 backdrop-blur-md text-white text-[10px] font-extralight px-6 py-3 rounded-full uppercase tracking-[0.3em] border border-white/10"
                         style={{ 
                           fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif',
                           fontWeight: 100
                         }}>
                      Véhicule Elite
              </div>
            </motion.div>

                  {/* Indicateurs techniques */}
            <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 2.3 }}
                    className="absolute bottom-8 right-8 space-y-3"
                  >
                    <div className="flex items-center space-x-3 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-white/80 font-extralight text-xs tracking-wide"
                            style={{ 
                              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif',
                              fontWeight: 100
                            }}>
                        Opérationnel
                </span>
                </div>
                  </motion.div>
                </div>

                {/* Effet de brillance au survol */}
                <motion.div
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none"
                />
                </div>

              {/* Spécifications techniques */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 2.5 }}
                className="mt-12 grid grid-cols-3 gap-8 text-center"
              >
                <div className="space-y-2">
                  <div className="text-white/30 font-extralight text-[10px] uppercase tracking-[0.3em]"
                       style={{ 
                         fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif',
                         fontWeight: 100
                       }}>
                    Sécurité
                  </div>
                  <div className="text-white/60 font-extralight text-sm"
                       style={{ 
                         fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif',
                         fontWeight: 100
                       }}>
                    Optimale
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-white/30 font-extralight text-[10px] uppercase tracking-[0.3em]"
                       style={{ 
                         fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif',
                         fontWeight: 100
                       }}>
                    Technologie
                  </div>
                  <div className="text-white/60 font-extralight text-sm"
                       style={{ 
                         fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif',
                         fontWeight: 100
                       }}>
                    Mercedes Elite
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-white/30 font-extralight text-[10px] uppercase tracking-[0.3em]"
                       style={{ 
                         fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif',
                         fontWeight: 100
                       }}>
                    {t('discretion')}
                  </div>
                  <div className="text-white/60 font-extralight text-sm"
                       style={{ 
                         fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif',
                         fontWeight: 100
                       }}>
                    Maximale
                  </div>
                </div>
            </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Surveillance Technologique Ultra Premium */}
      <section className="py-32 bg-gray-900/10 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            {/* Image à gauche - Format premium */}
          <motion.div
              initial={{ opacity: 0, scale: 0.95, x: -60 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
              transition={{ duration: 2.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-8 relative order-2 lg:order-1"
            >
              {/* Conteneur image avec effets premium */}
              <div className="relative group">
                {/* Cadre décoratif */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 3, delay: 0.8 }}
                  className="absolute -inset-[1px] bg-gradient-to-l from-amber-400/20 via-transparent to-amber-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                />
                
                {/* Image principale */}
                <div className="relative w-full h-[380px] md:h-[450px] lg:h-[480px] xl:h-[520px] rounded-xl overflow-hidden bg-black/20 backdrop-blur-sm">
                  <img
                    src="/images/camera_securiteprestige.png"
                    alt="Prestige Sécurité - Surveillance"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay subtil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Badge technologique flottant */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 1.5 }}
                    className="absolute top-8 left-8"
                  >
                    <div className="bg-black/60 backdrop-blur-md text-white text-[10px] font-extralight px-6 py-3 rounded-full uppercase tracking-[0.3em] border border-white/10"
                         style={{ 
                           fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif',
                           fontWeight: 100
                         }}>
                      Rondes Sécurisées
              </div>
            </motion.div>

                  {/* Indicateurs techniques */}
            <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 1.8 }}
                    className="absolute bottom-8 right-8 space-y-3"
                  >
                    <div className="flex items-center space-x-3 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                      <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                      <span className="text-white/80 font-extralight text-xs tracking-wide"
                            style={{ 
                              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif',
                              fontWeight: 100
                            }}>
                        Équipe en ronde
                </span>
            </div>
          </motion.div>
          </div>

                {/* Effet de brillance au survol */}
                <motion.div
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none"
                />
        </div>

              {/* Spécifications techniques */}
          <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 2 }}
                className="mt-12 grid grid-cols-3 gap-8 text-center"
              >
                <div className="space-y-2">
                  <div className="text-white/30 font-extralight text-[10px] uppercase tracking-[0.3em]"
                       style={{ 
                         fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif',
                         fontWeight: 100
                       }}>
                    Fréquence
                  </div>
                  <div className="text-white/60 font-extralight text-sm"
                       style={{ 
                         fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif',
                         fontWeight: 100
                       }}>
                    Toutes les 2h
                </div>
                    </div>
                <div className="space-y-2">
                  <div className="text-white/30 font-extralight text-[10px] uppercase tracking-[0.3em]"
                       style={{ 
                         fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif',
                         fontWeight: 100
                       }}>
                    Contrôle
                    </div>
                  <div className="text-white/60 font-extralight text-sm"
                       style={{ 
                         fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif',
                         fontWeight: 100
                       }}>
                    Points d'accès
                    </div>
                    </div>
                <div className="space-y-2">
                  <div className="text-white/30 font-extralight text-[10px] uppercase tracking-[0.3em]"
                       style={{ 
                         fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif',
                         fontWeight: 100
                       }}>
                    Rapport
                  </div>
                  <div className="text-white/60 font-extralight text-sm"
                       style={{ 
                         fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif',
                         fontWeight: 100
                       }}>
                    Main courante
                </div>
              </div>
                </motion.div>
            </motion.div>

            {/* Texte à droite - Ultra épuré */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4 space-y-12 order-1 lg:order-2"
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, delay: 1 }}
                className="h-[1px] bg-gradient-to-r from-amber-400/60 to-transparent"
              />
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, delay: 1.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white leading-[0.9] tracking-[-0.02em]"
                style={{ 
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif',
                  fontWeight: 100
                }}
              >
                Protection <span style={{ color: '#FFC300' }}>spécialisée</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 1.4 }}
                className="text-white/40 font-extralight text-base md:text-lg max-w-[800px] mt-6 leading-[1.35] tracking-[-0.01em]"
                style={{ 
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif',
                  fontWeight: 100
                }}
              >
                Notre expertise s'étend à la sécurisation<br />
                complète des zones sensibles, avec<br />
                une gestion maîtrisée des sites à haut risque.
              </motion.p>

              {/* Statistiques avec animation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 1.6 }}
                className="grid grid-cols-2 gap-8 mt-12"
              >
                <div className="space-y-2">
                  <div className="text-2xl font-extralight text-amber-400/90"
                       style={{ 
                         fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif',
                         fontWeight: 100
                       }}>
                    12
                </div>
                  <div className="text-white/40 font-extralight text-xs uppercase tracking-[0.2em]"
                       style={{ 
                         fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif',
                         fontWeight: 100
                       }}>
                    Rondes par jour
                </div>
                    </div>

                <div className="space-y-2">
                  <div className="text-2xl font-extralight text-amber-400/90"
                       style={{ 
                         fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif',
                         fontWeight: 100
                       }}>
                    15min
                    </div>
                  <div className="text-white/40 font-extralight text-xs uppercase tracking-[0.2em]"
                       style={{ 
                         fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif',
                         fontWeight: 100
                       }}>
                    Durée ronde
                </div>
            </div>
              </motion.div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Section Domaines d'intervention - Design Ultra Apple/Burger King */}
      <section className="relative w-full bg-black py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative">
          
          {/* En-tête Apple style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="text-center mb-20"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-6 tracking-[-0.03em]"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif', fontWeight: 100 }}
            >
              {t('domainsTitle')}
            </motion.h2>
            
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.8 }}
              className="h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
              className="text-white/30 font-extralight text-xl"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif', fontWeight: 100 }}
            >
              Solutions adaptées aux environnements complexes
            </motion.p>
          </motion.div>

          {/* Grille ultra minimaliste Apple/Burger King */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-20">
            {[
              {
                icon: '🏢',
                title: 'Grande Distribution',
                subtitle: 'Intervention rapide',
                delay: 0.2
              },
              {
                icon: '🚨',
                title: 'Sites exposés aux trafics',
                subtitle: 'Intervention rapide',
                delay: 0.4
              },
              {
                icon: '🚇',
                title: 'Transports publics',
                subtitle: 'Sécurisation continue',
                delay: 0.6
              },
              {
                icon: '🏘️',
                title: 'Quartiers sensibles',
                subtitle: 'Présence dissuasive',
                delay: 0.8
              },
              {
                icon: '🤝',
                title: 'Bailleurs sociaux',
                subtitle: 'Partenariat durable',
                delay: 1.0
              }
                ].map((item, index) => (
              <motion.div
                    key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                transition={{ duration: 1.2, delay: item.delay, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="relative group"
                  >
                {/* Card ultra minimaliste */}
                <div className="relative bg-white/[0.03] backdrop-blur-sm rounded-3xl p-8 border border-white/5 hover:border-amber-400/20 transition-all duration-500 hover:bg-white/[0.05] h-40 flex flex-col justify-center items-center text-center">
                  
                  {/* Icône avec animation */}
            <motion.div
                    className="text-4xl mb-4"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: item.delay,
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  
                  {/* Titre */}
                  <h3 className="text-white/90 font-extralight text-sm mb-2 leading-tight"
                      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif', fontWeight: 100 }}>
                    {item.title}
                  </h3>
                  
                  {/* Sous-titre */}
                  <p className="text-white/40 font-extralight text-xs"
                     style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif', fontWeight: 100 }}>
                    {item.subtitle}
                  </p>

                  {/* Effet de lueur au hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-400/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Dot indicator */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-amber-400/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            </motion.div>
            ))}
        </div>

          {/* Statement minimaliste */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="text-center"
          >
            <p className="text-white/20 font-extralight text-lg max-w-2xl mx-auto leading-relaxed"
               style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif', fontWeight: 100 }}>
              Notre savoir-faire repose sur des procédures maîtrisées et une présence continue sur le terrain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Ultra Premium - Tous les Services */}
      <ServicesSection />

      {/* Section Spécialisations - Dashboard Professionnel (Exactement comme l'image) */}
      <section className="py-20 sm:py-32 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* En-tête Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-extralight text-white mb-2 tracking-wide"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif', fontWeight: 100 }}>
              Spécialisations
            </h2>
            <p className="text-white/60 font-extralight text-lg">
              Dashboard Professionnel
            </p>
          </motion.div>

          {/* Dashboard Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="bg-gray-950 rounded-2xl border border-amber-400/20 overflow-hidden"
          >
            {/* Header Dashboard avec les boutons Mac */}
            <div className="bg-gray-900 px-6 py-4 border-b border-amber-400/10 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500/60 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500/60 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500/60 rounded-full"></div>
              </div>
              <div className="text-sm text-amber-400/80 font-extralight">
                PRESTIGE SÉCURITÉ - Dashboard Professionnel
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-amber-400/60 font-extralight">Sécurisé</span>
              </div>
            </div>

            {/* Contenu Principal du Dashboard */}
            <div className="bg-black p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Colonne Gauche - Critères de spécialisation */}
                <div className="lg:col-span-3 space-y-6">
                  <div>
                    <h3 className="text-lg font-extralight text-white/90 mb-6"
                        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif', fontWeight: 100 }}>
                      Critères de spécialisation
                    </h3>
                    
                    <div className="space-y-4">
                      {/* Zone d'expertise */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-white/[0.02] border border-white/10 rounded-xl p-4"
                      >
                        <div className="text-white/40 text-xs font-extralight mb-2 uppercase tracking-wider">Zone d'expertise</div>
                        <div className="text-white/90 font-extralight text-sm">Zones sensibles</div>
                      </motion.div>

                      {/* Secteur */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-white/[0.02] border border-white/10 rounded-xl p-4"
                      >
                        <div className="text-white/40 text-xs font-extralight mb-2 uppercase tracking-wider">Secteur</div>
                        <div className="text-white/90 font-extralight text-sm">Infrastructure</div>
                      </motion.div>

                      {/* Type */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="bg-white/[0.02] border border-white/10 rounded-xl p-4"
                      >
                        <div className="text-white/40 text-xs font-extralight mb-2 uppercase tracking-wider">Type</div>
                        <div className="text-white/90 font-extralight text-sm">Surveillance 24/7</div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Colonne Centrale - Missions accomplies */}
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-extralight text-white/90 mb-6"
                        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif', fontWeight: 100 }}>
                      Missions accomplies
                    </h3>
                    
                    <div className="space-y-4">
                      {/* Zones Sensibles */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="bg-white/[0.02] border border-white/10 rounded-xl p-6"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <span className="text-xl">📁</span>
                            <span className="text-white/90 font-extralight">Zones Sensibles</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-green-400 text-sm font-extralight">100%</span>
                            <span className="text-green-400/60 text-xs">Réussite</span>
                          </div>
                        </div>
                        <p className="text-white/50 text-sm font-extralight mb-4">
                          Expulsion rapide de squats et sécurisation de bâtiments exposés aux trafics
                        </p>
                        <ul className="text-white/40 text-xs space-y-1">
                          <li>• Intervention rapide • Réhabilitation complète</li>
                        </ul>
                      </motion.div>

                      {/* Transport */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="bg-white/[0.02] border border-white/10 rounded-xl p-6"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <span className="text-xl">🚊</span>
                            <span className="text-white/90 font-extralight">Transport</span>
                  </div>
                          <div className="px-3 py-1 bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full text-xs font-extralight">
                            Protection
                          </div>
                        </div>
                        <p className="text-white/50 text-sm font-extralight mb-4">
                          Protection renforcée des gares, lignes de métro et parkings publics
                        </p>
                        <ul className="text-white/40 text-xs space-y-1">
                          <li>• Contrôle des flux • Surveillance 24/7</li>
                        </ul>
                      </motion.div>

                      {/* Chantiers */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="bg-white/[0.02] border border-white/10 rounded-xl p-6"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <span className="text-xl">🏗️</span>
                            <span className="text-white/90 font-extralight">Chantiers</span>
                          </div>
                          <div className="px-3 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full text-xs font-extralight">
                            Sécurisé
                        </div>
                        </div>
                        <p className="text-white/50 text-sm font-extralight mb-4">
                          Reprise en main de chantiers exposés aux actes de vandalisme
                        </p>
                        <ul className="text-white/40 text-xs space-y-1">
                          <li>• Stratégie dissuasive • Veille permanente</li>
                        </ul>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Colonne Droite - Actions rapides et Notifications */}
                <div className="lg:col-span-3 space-y-6">
                  
                  {/* Actions Rapides */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-extralight text-white/90"
                        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif', fontWeight: 100 }}>
                      Actions rapides
                    </h3>
                    
                    <button className="w-full px-4 py-3 bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/20 rounded-xl text-amber-400/90 text-sm font-extralight transition-all duration-300">
                      Planifier intervention
                    </button>
                    
                    <button className="w-full px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white/70 text-sm font-extralight transition-all duration-300">
                      Affiner recherche
                    </button>
                  </motion.div>

                  {/* Notifications */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-extralight text-white/90"
                        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif', fontWeight: 100 }}>
                      Notifications
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <div className="text-green-400 text-xs font-extralight">3 nouvelles zones</div>
                        </div>
                      </div>
                      
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <div className="text-yellow-400 text-xs font-extralight">Intervention terminée</div>
                        </div>
                      </div>

                      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                          <div className="text-gray-400 text-xs font-extralight">🏠 Résidences sécurisées</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section VIP Elite Ultra Minimaliste - Responsive amélioré */}
      <section className="py-24 sm:py-32 md:py-40 lg:py-48 bg-black relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* En-tête ultra épuré avec responsive */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="text-center mb-16 sm:mb-20 lg:mb-24"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight text-white mb-2 tracking-[-0.05em] leading-[0.85]">
              Accompagnement
            </h2>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight mb-4 sm:mb-6" style={{ color: '#FFC300' }}>
              VIP Elite
            </div>
            <div className="text-white/60 font-extralight text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
              Services avec accompagnateur, chauffeurs et véhicules de luxe
            </div>
          </motion.div>

          {/* Statistiques ultra épurées avec responsive */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 lg:mb-20 text-center"
          >
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extralight" style={{ color: '#FFC300' }}>24/7</div>
              <div className="text-white/40 font-extralight text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em]">DISPONIBILITÉ</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extralight" style={{ color: '#FFC300' }}>Premium</div>
              <div className="text-white/40 font-extralight text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em]">SERVICE</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extralight" style={{ color: '#FFC300' }}>100%</div>
              <div className="text-white/40 font-extralight text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em]">{t('discretion').toUpperCase()}</div>
            </div>
          </motion.div>

          {/* Texte et image avec responsive */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="text-center"
          >
            <p
              className="text-white/80 text-lg sm:text-xl lg:text-2xl font-light max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-24 text-center px-4"
              style={{ 
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif', 
                fontWeight: 100,
                lineHeight: '1.6'
              }}
            >
              Vos déplacements avec chauffeur privé,<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>voiture de luxe et accompagnateur.
            </p>
            <div className="relative max-w-2xl mx-auto rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/images/agentchauffeur.jpeg"
                alt="Agent Chauffeur VIP Elite"
                className="w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover rounded-xl border border-amber-400/10"
                style={{ boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)' }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Recrutement Ultra Épurée */}
      <RecruitmentSection />

      {/* Contact Ultra Épuré - Seulement l'image */}
      <section id="contact" className="py-32 bg-black relative">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-5xl md:text-6xl font-extralight text-white tracking-[-0.02em] mb-8"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif', fontWeight: 100 }}
            >
              Contact <span className="text-amber-400/90">Elite</span>
            </motion.h2>
            
          <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
            viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.8 }}
              className="h-[1px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent mx-auto"
            />
          </motion.div>

          <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative max-w-3xl mx-auto rounded-3xl overflow-hidden">
              {/* Image principale */}
              <img 
                src="/images/Batiment_prestigesecurite.png" 
                  alt="Bâtiment Prestige Sécurité"
                className="w-full h-[500px] object-cover"
              />
              
              {/* Overlay élégant */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Contact flottant minimaliste */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 1 }}
                className="absolute bottom-8 left-8 right-8"
              >
                <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                  <div className="text-center">
                    <div className="text-white/60 font-extralight text-sm tracking-wide">
                      prestigesecurite59@gmail.com
                    </div>
                    <div className="text-white/40 font-extralight text-xs mt-2 tracking-widest">
                      DISPONIBLE 24H/24 • 7J/7
                    </div>
                  </div>
              </div>
          </motion.div>
              
              {/* Effet de bordure subtile */}
              <div className="absolute inset-0 border border-amber-400/10 rounded-3xl" />
              </div>
          </motion.div>
        </div>
      </section>

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

          {/* Section réseaux sociaux */}
          <div className="text-center -mt-24 mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-amber-400/80 font-extralight tracking-[0.2em] uppercase">
              SUIVEZ-NOUS
            </h3>
            <div className="flex justify-center items-center gap-6">
              {/* WhatsApp */}
              <a
                href="http://wa.me/33781844236"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform"
              >
                <div className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:border-amber-400/30 hover:bg-white/10 transition-all duration-500">
                  <svg className="w-6 h-6 text-white/70 hover:text-amber-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/prestigesecurite?igsh=MTB1dnM4bGptYnFoeQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform"
              >
                <div className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:border-amber-400/30 hover:bg-white/10 transition-all duration-500">
                  <svg className="w-6 h-6 text-white/70 hover:text-amber-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/16ovSbcyAt/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform"
              >
                <div className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:border-amber-400/30 hover:bg-white/10 transition-all duration-500">
                  <svg className="w-6 h-6 text-white/70 hover:text-amber-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
              </a>
              {/* Twitter/X */}
              <a
                href="https://x.com/prestigesecu?s=11"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform"
              >
                <div className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:border-amber-400/30 hover:bg-white/10 transition-all duration-500">
                  <svg className="w-6 h-6 text-white/70 hover:text-amber-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Grille d'informations responsive */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-2">Contact</h4>
              <p className="text-white/60">
                <strong>Téléphone:</strong> 07 81 84 42 36<br />
                <strong>Email:</strong> prestigesecurite59@gmail.com
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-2">Adresse</h4>
              <p className="text-white/60">
                <strong>Paris:</strong> 40 rue Alexandre Dumas, 75011 Paris, France<br />
                <strong>Roubaix:</strong> 25 Boulevard de la République, 59100 Roubaix, France
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-2">Autorisation</h4>
              <p className="text-white/60">
                <strong>Numéro:</strong> AUT-059-2123-12-09-20240960800<br />
                <strong>Article:</strong> L.612-14 du Code de la sécurité intérieure
              </p>
            </div>
          </div>

          {/* Légalité */}
          <div className="mt-8 text-center">
            <p className="text-white/60">
              <strong>Conformément à l'article L.612-14 du Code de la sécurité intérieure :</strong><br />
              "L'autorisation d'exercice ne confère aucune prérogative de puissance publique à l'entreprise ou aux personnes qui en bénéficient."
            </p>
          </div>

          {/* Droits réservés */}
          <div className="mt-4 text-center">
            <p className="text-white/60">
              <strong>© 2024 PRESTIGE SÉCURITÉ — TOUS DROITS RÉSERVÉS</strong>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 