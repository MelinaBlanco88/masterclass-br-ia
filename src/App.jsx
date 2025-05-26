import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Countdown from 'react-countdown';
import { useInView } from 'react-intersection-observer';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import {
  ChartBarIcon,
  ChatBubbleBottomCenterTextIcon,
  ClockIcon,
  DocumentTextIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  ChevronDownIcon,
  PlayCircleIcon,
} from '@heroicons/react/24/outline';

const discountEndDate = new Date('2025-06-09T19:00:00');

function App() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openFaq, setOpenFaq] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  const benefits = [
    {
      icon: <ChatBubbleBottomCenterTextIcon className="w-8 h-8" />,
      title: "Domina ChatGPT sin ser técnico",
      description: "Descubre los conceptos clave ChatGPT de manera simple, para que puedas aplicarlos en tu negocio inmobiliario sin complicaciones."
    },
    {
      icon: <ClockIcon className="w-8 h-8" />,
      title: "Las herramientas exactas que están revolucionando el mercado del Real Estate",
      description: "Te mostraré las mejores herramientas de automatización, prompts y flujos listos para copiar y pegar. Menos trabajo, más resultados."
    },
    {
      icon: <ChartBarIcon className="w-8 h-8" />,
      title: "Aplicaciones REALES para agentes y emprendedores inmobiliarios",
      description: "Aprende cómo usar la IA para atraer leads, mejorar tus cierres y ofrecer un servicio al cliente que parece de otro planeta."
    },
    {
      icon: <DocumentTextIcon className="w-8 h-8" />,
      title: "Acceso a recursos que te harán escalar más rápido",
      description: "Te llevarás plantillas, prompts y herramientas listas para usar que te ahorrarán semanas de trabajo."
    },
    {
      icon: <LightBulbIcon className="w-8 h-8" />,
      title: "Crea tu primera automatización inmobiliaria en 10 minutos",
      description: "No es solo teoría: vas a ver cómo se hace, paso a paso. Y lo mejor: ¡vas a hacerlo tú también!"
    },
    {
      icon: <RocketLaunchIcon className="w-8 h-8" />,
      title: "Bonus: Agentes IA ¡listos para usar!",
      description: "Agentes de IA expertos en mercado inmobiliario que te ayudarán a tomar mejores decisiones."
    }
  ];

  const testimonials = [
    {
      name: "Cristian Pedrero",
      role: "Ingeniero y emprendedor",
      image: "../cristian.jpg",
      text: "La automatización con IA ha revolucionado mi negocio. Ahorro más de 15 horas semanales en tareas administrativas.",
    },
    {
      name: "Ana María López",
      role: "Directora de Agencia Inmobiliaria",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      text: "Después del masterclass, implementamos ChatGPT en nuestro equipo y las respuestas a leads mejoraron un 300%.",
    },
    {
      name: "Edi obed Vasquez ortiz",
      role: "Aprendiz",
      image: "https://assets.skool.com/f/5a3aef782d86473a8d3072473f316871/7ea666e2822c409c9f80804019b0bcb72cd927fc9f2247efbe82081401cb8bae-sm.jpg",
      text: "Me dio mucha alegría ver como con ChatGPT puedes lograr ahorrar tiempo. Es una maravilla, con solo decirle a la IA como lo quieres y que le puede agregar.",
    },
  ];

  const faqs = [
    {
      q: "¿Necesito experiencia previa en IA?",
      a: "No, la masterclass está diseñado para todos los niveles. Comenzaremos desde lo básico hasta aplicaciones avanzadas. Te guiaremos paso a paso en la implementación de cada herramienta."
    },
    {
      q: "¿Tendré acceso a la grabación?",
      a: "Sí, todos los participantes recibirán acceso a la grabación del masterclass por 30 días, permitiéndote repasar el contenido las veces que necesites."
    },
    {
      q: "¿Qué necesito para unirme?",
      a: "Solo necesitas una computadora con conexión a internet y la aplicación Zoom instalada. Todo el material adicional será proporcionado durante el masterclass."
    },
    {
      q: "¿Qué voy a aprender exactamente?",
      a: "Vas a aprender a usar la inteligencia artificial para automatizar tareas repetitivas, generar contenido, responder más rápido a tus clientes y hacer crecer tu negocio inmobiliario con herramientas concretas."
    },
    {
      q: "¿Cuánto dura la masterclass?",
      a: "La masterclass tiene una duración de 90 minutos."
    },
    {
      q: "¿Esto me sirve si recién estoy empezando?",
      a: "Sí, totalmente. De hecho, cuanto antes empieces a usar IA, mejor ventaja vas a tener frente a tu competencia."
    },
    {
      q: "¿Qué pasa si tengo dudas después de la masterclass?",
      a: "Tendrás acceso a una comunidad donde podrás compartir tus dudas, aprender de otros y seguir creciendo con nosotros."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1677442136019-21780ecad995')] bg-cover opacity-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1701295463174-f10485104156')] bg-cover opacity-5" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1699133867157-c1ff8b750e07')] bg-cover opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-black/50" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#C1ED0B] to-[#9333ea] text-transparent bg-clip-text">
            Masterclass IA
          </h1>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#C1ED0B] to-[#9333ea] text-transparent bg-clip-text">
            Aplicada al Real Estate
          </h1>
          
          <h2 className="text-2xl md:text-4xl mb-8 text-[#C1ED0B]">
            El cerebro que vende por ti
          </h2>

          <p className="text-xl mb-8 max-w-3xl mx-auto">
            ¿Sabías que la Inteligencia Artificial ya está transformando el mercado inmobiliario? 
            Aprende a integrar herramientas de IA para optimizar tus ventas y ahorrar tiempo en tu negocio y en tu día a día.
          </p>

          <div className="mb-12">
            <p className="text-2xl mb-2">📅 Lunes 9 de Junio</p>
            <div className="timezones-container">
              <p className="text-2xl mb-2">🇲🇽 7:00 PM (México)</p>
              <p className="text-2xl mb-2">🇨🇴🇵🇪 8:00 PM (Colombia / Perú)</p>
              <p className="text-2xl mb-2">🇺🇸 8:00 PM (Estados Unidos – ET)</p>
              <p className="text-2xl mb-2">🇦🇷🇨🇱 9:00 PM (Argentina / Chile)</p>
            </div>


            <p className="text-2xl">💻 Vía Zoom</p>
          </div>
 
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12 max-w-2xl mx-auto">
            <h3 className="text-2xl mb-4">Esta MasterClass comienza en:</h3>
            <Countdown 
              date={discountEndDate}
              renderer={({ days, hours, minutes, seconds }) => (
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { value: days, label: 'Días' },
                    { value: hours, label: 'Horas' },
                    { value: minutes, label: 'Minutos' },
                    { value: seconds, label: 'Segundos' }
                  ].map(({ value, label }) => (
                    <div key={label} className="bg-black/30 rounded-lg p-4">
                      <div className="text-4xl font-bold text-[#C1ED0B]">{value}</div>
                      <div className="text-sm">{label}</div>
                    </div>
                  ))}
                </div>
              )}
            />
            
            {/* 
            <div className="mt-8">
              <p className="text-4xl font-bold text-[#C1ED0B]">$25 USD</p>
              <p className="text-lg mt-2">
                Solicita un código de descuento <a href="http://wa.link/yso3wi" target="_blank" rel="noopener noreferrer"><b>aquí</b></a>
              </p>
            </div>
            */}

          </div>

          <a 
            href="https://q9br2s0opxo.typeform.com/to/V5dAiGnk"
            className="inline-block bg-gradient-to-r from-[#C1ED0B] to-[#9333ea] text-black font-bold text-xl px-12 py-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#C1ED0B]/50"
          >
            ¡RESERVA TU LUGAR AHORA! 🚀
          </a>
        </motion.div>
      </section>

      {/* Video Preview Section */}
      <section className="py-32 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#C1ED0B] to-[#9333ea] text-transparent bg-clip-text">
              La Revolución de la IA 
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              La inteligencia artificial está transformando la manera en que trabajamos. 
              Desde la automatización de tareas hasta la predicción de tendencias del mercado, 
              la IA es la herramienta que necesitas para destacarte en la industria.
            </p>

          </div>
          <div className="relative max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('../public/preview.png')] bg-cover bg-center">
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setShowVideo(true)}
                  className="group relative transform hover:scale-110 transition-all duration-300"
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#C1ED0B] to-[#9333ea] rounded-full opacity-75 group-hover:opacity-100 blur transition-all duration-300" />
                  <PlayCircleIcon className="w-24 h-24 relative text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {showVideo && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl aspect-video">
              <button
                onClick={() => setShowVideo(false)}
                className="absolute -top-12 right-0 text-white hover:text-[#C1ED0B] transition-colors"
              >
                Cerrar
              </button>
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/wyGDvS8k104"
                title="Preview del Masterclass"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#C1ED0B] to-[#9333ea] text-transparent bg-clip-text">
            Lo Que Aprenderás
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-[#C1ED0B] mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a 
              href="https://q9br2s0opxo.typeform.com/to/V5dAiGnk"
              className="inline-block bg-[#C1ED0B] text-black font-bold text-xl px-12 py-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#C1ED0B]/50"
            >
              ¡Asegura Tu Lugar Ahora! 🎯
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1698393972526-31ed3806a1de')] bg-cover opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#C1ED0B] to-[#9333ea] text-transparent bg-clip-text">
            Lo Que Dicen Nuestros Alumnos
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-[#C1ED0B] text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#C1ED0B] to-[#9333ea] text-transparent bg-clip-text">
            Speakers
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-8"
            >
              <img 
                src="https://static-media.hotmart.com/Zvgj79xBCZBzV_eKaoi74wlWgXA=/filters:quality(100)/klickart-prod/uploads/media/file/9219154/replicate-prediction-t5e9wjacs9rj20cm4zp8b9mbpr-1.webp" 
                alt="Melina Blanco"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-2xl font-bold text-center mb-2">Melina Blanco</h3>
              <h4 className="text-[#C1ED0B] text-center mb-4">Experta en IA y Automatización</h4>
              <p className="text-gray-300">
                <b>Experta en Inteligencia Artificial</b> aplicada a negocios, automatización y desarrollo de productos digitales. 
                Con una sólida trayectoria como desarrolladora front-end y especialista en experiencia de usuario (UX), ha guiado a emprendedores y empresas a <b>integrar la IA de forma práctica y estratégica</b> en sus procesos clave.
              </p>
              <p className="text-gray-300">
                Apasionada por la innovación, Melina ha desarrollado su propio enfoque de enseñanza y creación de contenido, combinando tecnología, diseño y automatización inteligente. 
                Su estilo directo, claro y creativo la ha convertido en una referente para quienes buscan escalar sus negocios con inteligencia.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="https://www.instagram.com/meliwhite_8/" target="_blank" rel="noopener noreferrer" 
                   className="text-white hover:text-[#C1ED0B] transition-colors">
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/melinablanco88/" target="_blank" rel="noopener noreferrer"
                   className="text-white hover:text-[#C1ED0B] transition-colors">
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a href="https://www.youtube.com/@MeliWhite-8" target="_blank" rel="noopener noreferrer"
                   className="text-white hover:text-[#C1ED0B] transition-colors">
                  <FaYoutube className="w-6 h-6" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-8"
            >
              <img 
                src="https://static-media.hotmart.com/VKJfmdsktVt34QVxYO3mOYaAJ3g=/filters:quality(100)/klickart-prod/uploads/media/file/9219433/compressed_image_4.jpg" 
                alt="Mariana Padilla"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-2xl font-bold text-center mb-2">Mariana Padilla</h3>
              <h4 className="text-[#C1ED0B] text-center mb-4">Empresaria y conferencista internacional</h4>
              <p className="text-gray-300">
                Reconocida <b>empresaria y conferencista internacional</b>, especialista en inversiones inmobiliarias, inteligencia empresarial y financiera. Es creadora de la metodología TOPP, diseñada para potenciar la toma de decisiones estratégicas. 
                Ha compartido su experiencia en escenarios de países como Dubái, Panamá, Colombia, Perú, Estados Unidos y México, así como en universidades de prestigio como el TEC de Monterrey, Ibero y Anáhuac.
              </p>
              <p className="text-gray-300">
                <b>Autora</b> del <b>triple best seller en Amazon «El producto no importa»</b>, Mariana ha asesorado a cientos de empresarios y ejecutivos, ayudándolos a invertir con visión, liderar con propósito y desarrollar negocios más inteligentes.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="https://www.instagram.com/marianapadillatop/" target="_blank" rel="noopener noreferrer"
                   className="text-white hover:text-[#C1ED0B] transition-colors">
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/marianapadilla/" target="_blank" rel="noopener noreferrer"
                   className="text-white hover:text-[#C1ED0B] transition-colors">
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a href="https://www.youtube.com/@marianapadillatop" target="_blank" rel="noopener noreferrer"
                   className="text-white hover:text-[#C1ED0B] transition-colors">
                  <FaYoutube className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#C1ED0B] to-[#9333ea] text-transparent bg-clip-text">
            Preguntas Frecuentes
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="text-xl font-bold text-[#C1ED0B]">{faq.q}</h3>
                  <ChevronDownIcon 
                    className={`w-6 h-6 transition-transform duration-300 ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-4 text-gray-300">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a 
              href="https://q9br2s0opxo.typeform.com/to/V5dAiGnk"
              className="inline-block bg-gradient-to-r from-[#9333ea] to-[#C1ED0B] text-white font-bold text-xl px-12 py-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#9333ea]/50"
            >
              ¡Únete al Futuro! 🌟
            </a>
          </div>
        </div>
      </section>

      <a 
        href="https://wa.me/+525574766664" 
        className="fixed bottom-8 right-8 bg-[#25D366] text-white px-6 py-4 rounded-full flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-lg z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp"
          className="w-6 h-6"
        />
        ¿Tienes preguntas?
      </a>
    </div>
  );
}

export default App;