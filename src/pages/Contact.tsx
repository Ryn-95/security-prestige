import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
})

type ContactForm = z.infer<typeof contactSchema>

export default function Contact() {
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactForm) => {
    try {
      // Simuler l'envoi du formulaire
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setToast({
        type: 'success',
        message: 'Message envoyé avec succès ! Nous vous répondrons rapidement.',
      })
      reset()
    } catch (error) {
      setToast({
        type: 'error',
        message: 'Une erreur est survenue. Veuillez réessayer.',
      })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="flex items-center justify-between">
            {/* Menu hamburger */}
            <button className="flex flex-col space-y-1.5 group">
              <span className="w-7 h-0.5 bg-gray-900 transition-all group-hover:bg-yellow-600"></span>
              <span className="w-7 h-0.5 bg-gray-900 transition-all group-hover:bg-yellow-600"></span>
              <span className="w-7 h-0.5 bg-gray-900 transition-all group-hover:bg-yellow-600"></span>
            </button>

            {/* Logo centré */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <h1 className="text-3xl font-extralight tracking-[0.4em] text-gray-900">
                SÉCURITÉ
                <span className="block text-yellow-600 text-2xl mt-1">PRESTIGE</span>
              </h1>
              <p className="text-xs font-light tracking-[0.25em] text-gray-500 text-center mt-2">
                FONDÉE EN 2008
              </p>
            </div>

            {/* Espace pour équilibrer */}
            <div className="w-7"></div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-extralight tracking-[0.2em] mb-12 leading-tight">
              Contactez-nous pour une Proposition Sécurisée sur Mesure
            </h2>
            
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-12"></div>
            
            <p className="text-lg font-light text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Nous sommes heureux de répondre à toutes vos questions concernant nos services de sécurité privée et nos formations d'excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-10 bg-white p-16 shadow-elegant-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <input
                    type="text"
                    placeholder="Nom"
                    className="w-full px-6 py-5 bg-transparent border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-yellow-600 transition-all duration-300 font-light tracking-wide"
                    {...register('name')}
                    aria-invalid={errors.name ? 'true' : 'false'}
                  />
                  {errors.name && (
                    <p className="mt-3 text-red-500 text-sm font-light">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-6 py-5 bg-transparent border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-yellow-600 transition-all duration-300 font-light tracking-wide"
                    {...register('email')}
                    aria-invalid={errors.email ? 'true' : 'false'}
                  />
                  {errors.email && (
                    <p className="mt-3 text-red-500 text-sm font-light">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <textarea
                  className="w-full px-6 py-5 bg-transparent border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-yellow-600 transition-all duration-300 font-light tracking-wide resize-none"
                  rows={8}
                  placeholder="Message"
                  {...register('message')}
                  aria-invalid={errors.message ? 'true' : 'false'}
                />
                {errors.message && (
                  <p className="mt-3 text-red-500 text-sm font-light">{errors.message.message}</p>
                )}
              </div>

              <div className="text-center pt-6">
                <motion.button
                  type="submit"
                  className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white px-16 py-5 font-light tracking-[0.15em] hover:from-yellow-700 hover:to-yellow-800 transition-all duration-300 shadow-golden hover:shadow-golden-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {isSubmitting ? 'ENVOI EN COURS...' : 'ENVOYER LE MESSAGE'}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <p className="text-lg font-light mb-8 text-gray-700 max-w-4xl mx-auto">
              NOUS SOMMES HEUREUX DE RÉPONDRE À TOUTES VOS QUESTIONS CONCERNANT NOS SERVICES DE SÉCURITÉ PRIVÉE ET NOS FORMATIONS.
            </p>
            
            <p className="text-lg font-light mb-20 text-gray-700 max-w-4xl mx-auto">
              N'HÉSITEZ PAS À NOUS APPELER AU <a href="tel:+33175438090" className="text-yellow-600 font-normal hover:text-yellow-700 transition-colors">+33 (0) 1 75 43 80 90</a> POUR PARLER AVEC L'UN DE NOS EXPERTS EN SÉCURITÉ.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-20">
              <motion.div 
                className="text-center group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1 }}
              >
                <h3 className="text-lg font-light tracking-[0.15em] mb-6 text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">ADRESSE</h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  Sécurité Prestige
                  <br />
                  123 Avenue de la Sécurité
                  <br />
                  75008 Paris, France
                </p>
              </motion.div>

              <motion.div 
                className="text-center group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <h3 className="text-lg font-light tracking-[0.15em] mb-6 text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">CONTACT</h3>
                <div className="space-y-3 text-gray-600 font-light">
                  <p>
                    <a
                      href="tel:+33175438090"
                      className="hover:text-yellow-600 transition-colors duration-300"
                    >
                      +33 (0) 1 75 43 80 90
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:contact@securite-prestige.fr"
                      className="hover:text-yellow-600 transition-colors duration-300"
                    >
                      contact@securite-prestige.fr
                    </a>
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="text-center group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <h3 className="text-lg font-light tracking-[0.15em] mb-6 text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">HORAIRES</h3>
                <div className="space-y-3 text-gray-600 font-light">
                  <p>
                    <strong className="text-gray-900 font-normal">Lun-Ven :</strong>
                    <br />
                    9h00 - 18h00
                  </p>
                  <p>
                    <strong className="text-gray-900 font-normal">Urgences :</strong>
                    <br />
                    24h/24 - 7j/7
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h3 className="text-3xl font-extralight tracking-[0.2em] mb-16">
              INSCRIVEZ-VOUS À NOTRE NEWSLETTER
            </h3>
            
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-16"></div>
            
            <div className="flex flex-col md:flex-row gap-6 max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Nom"
                className="flex-1 px-6 py-5 bg-transparent border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-all duration-300 font-light tracking-wide"
              />
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-6 py-5 bg-transparent border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-all duration-300 font-light tracking-wide"
              />
              <button className="px-12 py-5 bg-gradient-to-r from-yellow-600 to-yellow-700 text-black font-light tracking-[0.15em] hover:from-yellow-700 hover:to-yellow-800 transition-all duration-300 shadow-golden">
                ENVOYER
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            className={`fixed top-8 left-1/2 -translate-x-1/2 px-8 py-4 shadow-elegant-lg z-50 ${
              toast.type === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center space-x-3">
              <span className="text-lg">
                {toast.type === 'success' ? '✓' : '✕'}
              </span>
              <span className="font-light">{toast.message}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Auto-hide toast */}
      {toast && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onAnimationComplete={() => {
            setTimeout(() => setToast(null), 4000)
          }}
        />
      )}
    </div>
  )
} 