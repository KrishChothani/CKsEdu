// import React, { useState, useEffect } from "react";
// import { motion, useAnimation, useInView } from "framer-motion";
// import {
//   GraduationCap,
//   Users,
//   Bot,
//   BookOpen,
//   Calendar,
//   Heart,
//   Video,
//   MessageCircle,
//   Library,
//   Trophy,
//   Brain,
//   ArrowRight,
//   Check,
//   Star,
//   Twitter,
//   Linkedin,
//   Github,
//   Mail,
//   Menu,
//   X,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";

// const FloatingIcon = ({ icon: Icon, delay = 0, duration = 20 }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 50 }}
//     animate={{
//       opacity: [0, 1, 1, 0],
//       y: [-50, -200, -350, -500],
//       x: [0, 50, -30, 20],
//     }}
//     transition={{
//       duration: duration,
//       delay: delay,
//       repeat: Infinity,
//       ease: "easeInOut",
//     }}
//     className="absolute text-white/20"
//   >
//     <Icon size={24} />
//   </motion.div>
// );

// const AnimatedSection = ({ children, className = "" }) => {
//   const controls = useAnimation();
//   const ref = React.useRef(null);
//   const inView = useInView(ref, { threshold: 0.1 });

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [controls, inView]);

//   return (
//     <motion.div
//       ref={ref}
//       animate={controls}
//       initial="hidden"
//       variants={{
//         visible: { opacity: 1, y: 0 },
//         hidden: { opacity: 0, y: 30 },
//       }}
//       transition={{ duration: 0.6 }}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// };

// const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.6, delay }}
//     whileHover={{ scale: 1.05, rotateY: 5 }}
//     className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group"
//   >
//     <motion.div
//       whileHover={{ scale: 1.2, rotate: 360 }}
//       transition={{ duration: 0.6 }}
//       className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/25"
//     >
//       <Icon className="text-white" size={24} />
//     </motion.div>
//     <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
//     <p className="text-gray-300 leading-relaxed">{description}</p>
//   </motion.div>
// );

// const TestimonialCard = ({ name, role, quote, avatar, delay = 0 }) => (
//   <motion.div
//     initial={{ opacity: 0, x: -50 }}
//     whileInView={{ opacity: 1, x: 0 }}
//     transition={{ duration: 0.6, delay }}
//     className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
//   >
//     <div className="flex items-center mb-4">
//       <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
//         {avatar}
//       </div>
//       <div>
//         <h4 className="text-white font-semibold">{name}</h4>
//         <p className="text-gray-400 text-sm">{role}</p>
//       </div>
//     </div>
//     <div className="flex text-yellow-400 mb-3">
//       {[...Array(5)].map((_, i) => (
//         <Star key={i} size={16} fill="currentColor" />
//       ))}
//     </div>
//     <p className="text-gray-300 italic">"{quote}"</p>
//   </motion.div>
// );

// const PricingCard = ({
//   title,
//   price,
//   features,
//   isPopular = false,
//   delay = 0,
// }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.6, delay }}
//     whileHover={{ scale: 1.05 }}
//     className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border ${
//       isPopular ? "border-blue-400 ring-2 ring-blue-400/50" : "border-white/20"
//     } hover:border-blue-400/50 transition-all duration-300`}
//   >
//     {isPopular && (
//       <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
//         <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-white text-sm font-bold px-4 py-1 rounded-full">
//           Most Popular
//         </span>
//       </div>
//     )}
//     <div className="text-center mb-6">
//       <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
//       <div className="text-4xl font-bold text-white mb-2">{price}</div>
//       <p className="text-gray-400">per month</p>
//     </div>
//     <ul className="space-y-3 mb-8">
//       {features.map((feature, index) => (
//         <li key={index} className="flex items-center text-gray-300">
//           <Check className="text-green-400 mr-3" size={16} />
//           {feature}
//         </li>
//       ))}
//     </ul>
//     <motion.button
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
//         isPopular
//           ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25"
//           : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
//       }`}
//     >
//       Get Started
//     </motion.button>
//   </motion.div>
// );

// export default function EducationPlatformLanding() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isYearly, setIsYearly] = useState(false);
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);

//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       role: "Computer Science Student",
//       quote:
//         "The 24/7 mentoring has been a game-changer. I can get help whenever I'm stuck, and the AI tools help me stay organized.",
//       avatar: "SJ",
//     },
//     {
//       name: "Dr. Michael Chen",
//       role: "Mathematics Professor",
//       quote:
//         "This platform has revolutionized how I connect with my students. The AI-powered grading saves me hours every week.",
//       avatar: "MC",
//     },
//     {
//       name: "Emma Rodriguez",
//       role: "Biology Student",
//       quote:
//         "The study groups and collaboration tools have made learning so much more engaging. I love the gamified quizzes!",
//       avatar: "ER",
//     },
//   ];

//   const features = [
//     {
//       icon: Video,
//       title: "1:1 Video Mentoring",
//       description:
//         "Connect with expert mentors 24/7 for personalized guidance and instant problem-solving support.",
//     },
//     {
//       icon: Bot,
//       title: "AI-Powered Tools",
//       description:
//         "Smart scheduling, automated note-taking, and intelligent grading to streamline your learning experience.",
//     },
//     {
//       icon: MessageCircle,
//       title: "Student Chat & Groups",
//       description:
//         "Join study groups, collaborate on projects, and connect with peers in your field of study.",
//     },
//     {
//       icon: Library,
//       title: "Digital Library & Resources",
//       description:
//         "Access thousands of curated resources, research papers, and interactive learning materials.",
//     },
//     {
//       icon: Trophy,
//       title: "Gamified Quizzes & Leaderboards",
//       description:
//         "Make learning fun with interactive quizzes, achievements, and competitive leaderboards.",
//     },
//     {
//       icon: Heart,
//       title: "Mental Wellness Support",
//       description:
//         "Comprehensive wellness resources and support systems to maintain healthy study habits.",
//     },
//   ];

//   const pricingPlans = [
//     {
//       title: "Free Plan",
//       price: "$0",
//       features: [
//         "Basic video mentoring (5 hours/month)",
//         "Access to study groups",
//         "Basic AI tools",
//         "Digital library access",
//         "Community support",
//       ],
//     },
//     {
//       title: "Premium Plan",
//       price: isYearly ? "$19" : "$29",
//       features: [
//         "Unlimited video mentoring",
//         "Advanced AI tools",
//         "Priority mentor matching",
//         "Advanced analytics",
//         "Wellness coaching",
//         "Custom study plans",
//       ],
//       isPopular: true,
//     },
//     {
//       title: "Institutional License",
//       price: isYearly ? "$199" : "$299",
//       features: [
//         "Everything in Premium",
//         "Multi-user management",
//         "Custom integrations",
//         "Advanced reporting",
//         "Dedicated support",
//         "Custom branding",
//       ],
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
//         <div className="container mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="flex items-center space-x-2"
//             >
//               <GraduationCap className="text-blue-400" size={32} />
//               <span className="text-2xl font-bold">EduConnect</span>
//             </motion.div>

//             <div className="hidden md:flex items-center space-x-8">
//               <a
//                 href="#features"
//                 className="hover:text-blue-400 transition-colors"
//               >
//                 Features
//               </a>
//               <a
//                 href="#how-it-works"
//                 className="hover:text-blue-400 transition-colors"
//               >
//                 How It Works
//               </a>
//               <a
//                 href="#pricing"
//                 className="hover:text-blue-400 transition-colors"
//               >
//                 Pricing
//               </a>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
//               >
//                 Get Started
//               </motion.button>
//             </div>

//             <button
//               className="md:hidden"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="fixed top-20 left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-md border-b border-white/20 md:hidden"
//         >
//           <div className="container mx-auto px-6 py-4 space-y-4">
//             <a
//               href="#features"
//               className="block hover:text-blue-400 transition-colors"
//             >
//               Features
//             </a>
//             <a
//               href="#how-it-works"
//               className="block hover:text-blue-400 transition-colors"
//             >
//               How It Works
//             </a>
//             <a
//               href="#pricing"
//               className="block hover:text-blue-400 transition-colors"
//             >
//               Pricing
//             </a>
//             <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-lg font-semibold w-full">
//               Get Started
//             </button>
//           </div>
//         </motion.div>
//       )}

//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
//         {/* Floating Icons */}
//         <FloatingIcon icon={GraduationCap} delay={0} />
//         <FloatingIcon icon={Users} delay={2} />
//         <FloatingIcon icon={Bot} delay={4} />
//         <FloatingIcon icon={BookOpen} delay={6} />
//         <FloatingIcon icon={Calendar} delay={8} />
//         <FloatingIcon icon={Heart} delay={10} />

//         <div className="container mx-auto px-6 text-center relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
//               Empower Learning.
//               <br />
//               Connect Instantly.
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
//               24/7 Mentorship, AI Tools, Peer Collaboration, and More.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center group"
//               >
//                 Get Started
//                 <ArrowRight
//                   className="ml-2 group-hover:translate-x-1 transition-transform"
//                   size={20}
//                 />
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-white/10 backdrop-blur-sm px-8 py-4 rounded-lg font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
//               >
//                 Explore Features
//               </motion.button>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-20 relative">
//         <div className="container mx-auto px-6">
//           <AnimatedSection className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               Powerful Features
//             </h2>
//             <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//               Everything you need to enhance your learning experience and
//               achieve academic success.
//             </p>
//           </AnimatedSection>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <FeatureCard
//                 key={index}
//                 icon={feature.icon}
//                 title={feature.title}
//                 description={feature.description}
//                 delay={index * 0.1}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section id="how-it-works" className="py-20 bg-white/5">
//         <div className="container mx-auto px-6">
//           <AnimatedSection className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               How It Works
//             </h2>
//             <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//               Get started in three simple steps and transform your learning
//               experience.
//             </p>
//           </AnimatedSection>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 step: "01",
//                 title: "Sign Up & Choose Role",
//                 description:
//                   "Create your account and select whether you're a student or professor to get personalized features.",
//               },
//               {
//                 step: "02",
//                 title: "Connect & Collaborate",
//                 description:
//                   "Find mentors, join study groups, and start collaborating with peers in your field of study.",
//               },
//               {
//                 step: "03",
//                 title: "Track Progress",
//                 description:
//                   "Monitor your learning journey with smart dashboards and AI-powered insights.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 className="text-center"
//               >
//                 <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
//                   {item.step}
//                 </div>
//                 <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
//                 <p className="text-gray-300 leading-relaxed">
//                   {item.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-6">
//           <AnimatedSection className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               What Students Say
//             </h2>
//             <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//               Join thousands of students and professors who have transformed
//               their learning experience.
//             </p>
//           </AnimatedSection>

//           <div className="relative max-w-4xl mx-auto">
//             <div className="grid md:grid-cols-3 gap-8">
//               {testimonials.map((testimonial, index) => (
//                 <TestimonialCard
//                   key={index}
//                   name={testimonial.name}
//                   role={testimonial.role}
//                   quote={testimonial.quote}
//                   avatar={testimonial.avatar}
//                   delay={index * 0.2}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section id="pricing" className="py-20 bg-white/5">
//         <div className="container mx-auto px-6">
//           <AnimatedSection className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               Choose Your Plan
//             </h2>
//             <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
//               Select the perfect plan for your learning journey and unlock your
//               full potential.
//             </p>

//             <div className="flex items-center justify-center mb-8">
//               <span
//                 className={`mr-3 ${!isYearly ? "text-white" : "text-gray-400"}`}
//               >
//                 Monthly
//               </span>
//               <motion.button
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setIsYearly(!isYearly)}
//                 className={`w-14 h-7 rounded-full p-1 transition-colors duration-300 ${
//                   isYearly ? "bg-blue-500" : "bg-gray-600"
//                 }`}
//               >
//                 <motion.div
//                   animate={{ x: isYearly ? 28 : 0 }}
//                   transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                   className="w-5 h-5 bg-white rounded-full"
//                 />
//               </motion.button>
//               <span
//                 className={`ml-3 ${isYearly ? "text-white" : "text-gray-400"}`}
//               >
//                 Yearly
//               </span>
//               {isYearly && (
//                 <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
//                   Save 30%
//                 </span>
//               )}
//             </div>
//           </AnimatedSection>

//           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {pricingPlans.map((plan, index) => (
//               <PricingCard
//                 key={index}
//                 title={plan.title}
//                 price={plan.price}
//                 features={plan.features}
//                 isPopular={plan.isPopular}
//                 delay={index * 0.2}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-12 bg-gray-900/50 border-t border-white/20">
//         <div className="container mx-auto px-6">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div>
//               <div className="flex items-center space-x-2 mb-4">
//                 <GraduationCap className="text-blue-400" size={32} />
//                 <span className="text-2xl font-bold">EduConnect</span>
//               </div>
//               <p className="text-gray-400 mb-4">
//                 Empowering education through innovative technology and
//                 meaningful connections.
//               </p>
//               <div className="flex space-x-4">
//                 <motion.a
//                   whileHover={{ scale: 1.1 }}
//                   href="#"
//                   className="text-gray-400 hover:text-blue-400 transition-colors"
//                 >
//                   <Twitter size={20} />
//                 </motion.a>
//                 <motion.a
//                   whileHover={{ scale: 1.1 }}
//                   href="#"
//                   className="text-gray-400 hover:text-blue-400 transition-colors"
//                 >
//                   <Linkedin size={20} />
//                 </motion.a>
//                 <motion.a
//                   whileHover={{ scale: 1.1 }}
//                   href="#"
//                   className="text-gray-400 hover:text-blue-400 transition-colors"
//                 >
//                   <Github size={20} />
//                 </motion.a>
//               </div>
//             </div>

//             <div>
//               <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li>
//                   <a href="#" className="hover:text-blue-400 transition-colors">
//                     Home
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#features"
//                     className="hover:text-blue-400 transition-colors"
//                   >
//                     Features
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#how-it-works"
//                     className="hover:text-blue-400 transition-colors"
//                   >
//                     How It Works
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#pricing"
//                     className="hover:text-blue-400 transition-colors"
//                   >
//                     Pricing
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-lg font-semibold mb-4">Support</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li>
//                   <a href="#" className="hover:text-blue-400 transition-colors">
//                     Contact
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-blue-400 transition-colors">
//                     Help Center
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-blue-400 transition-colors">
//                     Privacy Policy
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-blue-400 transition-colors">
//                     Terms of Service
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
//               <p className="text-gray-400 mb-4">
//                 Stay updated with our latest features and news.
//               </p>
//               <div className="flex">
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="flex-1 bg-white/10 border border-white/20 rounded-l-lg px-4 py-2 focus:outline-none focus:border-blue-400 transition-colors"
//                 />
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-r-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
//                 >
//                   <Mail size={20} />
//                 </motion.button>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-400">
//             <p>&copy; 2025 EduConnect. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import {
  BookOpen,
  Users,
  Brain,
  Award,
  Video,
  Globe,
  Heart,
  BarChart3,
  Sparkles,
  CheckCircle,
  Star,
  ArrowRight,
  Moon,
  Sun,
  Menu,
  X,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Play,
  Zap,
  Target,
  Shield,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";
import Aurora from "../Components/Aurora";

const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}</span>;
};

const FloatingIcon = ({ icon: Icon, delay = 0, x = 0, y = 0 }) => {
  const [mounted, setMounted] = useState(false);
  const { darkMode } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="absolute animate-pulse"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${delay}s`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="animate-bounce">
        <Icon className={`w-8 h-8 transition-colors duration-300 ${darkMode
          ? "text-indigo-400 opacity-60"
          : "text-indigo-500 opacity-40"
          }`} />
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { darkMode } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        } ${darkMode
          ? "bg-gray-800/40 border-gray-700/50 hover:border-gray-600/60"
          : "bg-white/80 border-gray-200/60 hover:border-indigo-300/60 hover:bg-white/90"
        }`}
    >
      <div className={`w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 shadow-lg transition-shadow duration-300 ${darkMode ? "shadow-indigo-500/25" : "shadow-indigo-500/20"
        }`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"
        }`}>
        {title}
      </h3>
      <p className={`transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-600"
        }`}>{description}</p>
    </div>
  );
};

const TestimonialCard = ({
  name,
  role,
  avatar,
  content,
  rating,
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const { darkMode } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`backdrop-blur-sm rounded-xl p-6 shadow-lg transition-all duration-500 border hover:shadow-xl hover:-translate-y-1 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
        } ${darkMode
          ? "bg-gray-800/40 border-gray-700/50 hover:border-gray-600/60"
          : "bg-white/80 border-gray-200/60 hover:border-indigo-300/60 hover:bg-white/90"
        }`}
    >
      <div className="flex items-center mb-4">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full mr-4 shadow-md" />
        <div>
          <h4 className={`font-semibold transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"
            }`}>
            {name}
          </h4>
          <p className={`text-sm transition-colors duration-300 ${darkMode ? "text-gray-400" : "text-gray-600"
            }`}>{role}</p>
        </div>
      </div>
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : `${darkMode ? "text-gray-600" : "text-gray-300"}`}`}
          />
        ))}
      </div>
      <p className={`italic transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-700"
        }`}>"{content}"</p>
    </div>
  );
};

const PricingCard = ({
  title,
  price,
  period,
  features,
  isPopular,
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const { darkMode } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
  className={`relative backdrop-blur-sm rounded-xl p-6 shadow-md transition-all duration-500 border 
    ${isPopular
      ? `ring-2 ring-indigo-500 scale-105 ${darkMode ? "border-indigo-700" : "border-indigo-200"}`
      : `${darkMode ? "border-gray-700/50" : "border-gray-200/60"}`
    }
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
    ${darkMode ? "bg-gray-800/40" : "bg-white/80"}
    hover:scale-[1.03] hover:ring-2 hover:ring-indigo-500
    ${darkMode ? "hover:border-indigo-700" : "hover:border-indigo-300"}
    ${!isPopular ? "hover:shadow-xl" : ""}
  `}
>

      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"
          }`}>
          {title}
        </h3>
        <div className={`text-3xl font-bold mb-1 transition-colors duration-300 ${darkMode ? "text-indigo-400" : "text-indigo-600"
          }`}>
          ${price}
        </div>
        <p className={`transition-colors duration-300 ${darkMode ? "text-gray-400" : "text-gray-600"
          }`}>{period}</p>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
            <span className={`transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-700"
              }`}>{feature}</span>
          </li>
        ))}
      </ul>
      <button
  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 mt-auto transform
    bg-gray-100 text-gray-900 border border-gray-300
    hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 hover:text-white
    hover:ring-2 hover:ring-indigo-400 hover:scale-[1.03]
    ${darkMode ? "bg-gray-700/50 text-white border-gray-600 hover:bg-gray-600/50" : ""}
  `}
>
  Get Started
</button>


    </div>
  );
};

export default function LandingPage() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [yearlyPricing, setYearlyPricing] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description:
        "Personalized learning paths powered by advanced AI that adapts to your pace and style.",
    },
    {
      icon: Users,
      title: "Community Collaboration",
      description:
        "Connect with peers worldwide, join study groups, and collaborate on projects.",
    },
    {
      icon: BarChart3,
      title: "Live Progress Analytics",
      description:
        "Real-time insights into your learning journey with detailed progress tracking.",
    },
    {
      icon: Award,
      title: "Digital Badges & Certifications",
      description:
        "Earn recognized credentials and showcase your achievements to employers.",
    },
    {
      icon: Video,
      title: "Instant Video Mentoring",
      description:
        "Get immediate help from expert mentors through live video sessions.",
    },
    {
      icon: Globe,
      title: "Global Resource Access",
      description:
        "Access thousands of courses and resources from top institutions worldwide.",
    },
    {
      icon: Heart,
      title: "Wellness Support",
      description:
        "Integrated wellness features to maintain work-life balance while learning.",
    },
    {
      icon: Sparkles,
      title: "Smart Recommendations",
      description:
        "Discover new courses and skills based on your interests and career goals.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Data Science Student",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      content:
        "The AI-powered learning paths helped me master complex concepts at my own pace. Amazing platform!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content:
        "The community collaboration feature connected me with brilliant minds from around the world.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "Marketing Professional",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content:
        "Live progress analytics kept me motivated throughout my learning journey. Highly recommended!",
      rating: 5,
    },
  ];

  const pricingPlans = [
    {
      title: "Basic",
      price: yearlyPricing ? "99" : "12",
      period: yearlyPricing ? "per year" : "per month",
      features: [
        "Access to 100+ courses",
        "Basic progress tracking",
        "Community forums",
        "Mobile app access",
      ],
    },
    {
      title: "Pro",
      price: yearlyPricing ? "199" : "24",
      period: yearlyPricing ? "per year" : "per month",
      features: [
        "Access to 500+ courses",
        "AI-powered recommendations",
        "Video mentoring sessions",
        "Digital certificates",
        "Priority support",
      ],
      isPopular: true,
    },
    {
      title: "Enterprise",
      price: yearlyPricing ? "499" : "49",
      period: yearlyPricing ? "per year" : "per month",
      features: [
        "Unlimited course access",
        "Custom learning paths",
        "Advanced analytics",
        "Team collaboration tools",
        "24/7 dedicated support",
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      <div className={`transition-colors duration-300 ${darkMode
        ? "bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900"
        : "bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/80"
        }`}>
        {/* Header */}
        <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${darkMode
          ? "bg-gray-800/80 border-gray-700"
          : "bg-white/80 border-gray-200/50"
          }`}>
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => navigate("/app")}
              >
                <img src="/logo.png" alt="EduTech Icon" className="h-8 w-8" />
                <span className={`text-xl font-bold transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"
                  }`}>
                  EduTech
                </span>
              </div>

              <nav className="hidden md:flex items-center space-x-8">
                <a
                  href="#features"
                  className={`transition-colors duration-300 ${darkMode
                    ? "text-gray-300 hover:text-indigo-400"
                    : "text-gray-700 hover:text-indigo-600"
                    }`}
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  className={`transition-colors duration-300 ${darkMode
                    ? "text-gray-300 hover:text-indigo-400"
                    : "text-gray-700 hover:text-indigo-600"
                    }`}
                >
                  How it Works
                </a>
                <a
                  href="#pricing"
                  className={`transition-colors duration-300 ${darkMode
                    ? "text-gray-300 hover:text-indigo-400"
                    : "text-gray-700 hover:text-indigo-600"
                    }`}
                >
                  Pricing
                </a>
                <a
                  href="#testimonials"
                  className={`transition-colors duration-300 ${darkMode
                    ? "text-gray-300 hover:text-indigo-400"
                    : "text-gray-700 hover:text-indigo-600"
                    }`}
                >
                  Reviews
                </a>
                <button
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-lg transition-colors duration-300 ${darkMode
                    ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  {darkMode ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
              </nav>

              <button
                className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${darkMode
                  ? "bg-gray-700 text-gray-300"
                  : "bg-gray-100 text-gray-700"
                  }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className={`md:hidden border-t transition-colors duration-300 ${darkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
              }`}>
              <div className="px-4 py-4 space-y-2">
                <a
                  href="#features"
                  className={`block py-2 transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  className={`block py-2 transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  How it Works
                </a>
                <a
                  href="#pricing"
                  className={`block py-2 transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  Pricing
                </a>
                <a
                  href="#testimonials"
                  className={`block py-2 transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  Reviews
                </a>
                <button
                  onClick={toggleDarkMode}
                  className={`flex items-center space-x-2 py-2 transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  {darkMode ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                  <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
                </button>
              </div>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className={`absolute inset-0 ${darkMode ? "bg-black" : "bg-white"}`}></div>

          <div className="absolute inset-0 pointer-events-none">
            <Aurora
              colorStops={["#8A2BE2", "#00FFFF", "#FF69B4"]}
              blend={1.0}
              amplitude={1.0}
              speed={1.0}
            />
          </div>

          <FloatingIcon icon={Brain} x={10} y={20} delay={0} />
          <FloatingIcon icon={Users} x={90} y={30} delay={0.5} />
          <FloatingIcon icon={Award} x={15} y={70} delay={1} />
          <FloatingIcon icon={Video} x={85} y={75} delay={1.5} />
          <FloatingIcon icon={Globe} x={20} y={40} delay={2} />
          <FloatingIcon icon={Heart} x={80} y={50} delay={2.5} />

          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className={`text-5xl md:text-7xl font-bold mb-6 leading-tight transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"
                }`}>
                Transform Your
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Learning
                </span>
                <br />
                Journey
              </h1>
              <p className={`text-xl md:text-2xl mb-8 max-w-2xl mx-auto transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-600"
                }`}>
                Experience the future of education with AI-powered personalized
                learning, global collaboration, and instant mentoring support.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                  onClick={() => navigate("/app")}
                >
                  <span onClick={() => navigate("/app")}>Start Learning</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className={`backdrop-blur-md px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl border ${darkMode
                  ? "bg-gray-800/80 text-white hover:bg-gray-700 border-gray-600/50"
                  : "bg-white/90 text-gray-900 hover:bg-white border-gray-200/50"
                  }`}>
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                <div>
                  <div className={`text-3xl font-bold transition-colors duration-300 ${darkMode ? "text-indigo-400" : "text-indigo-600"
                    }`}>
                    <AnimatedCounter end={50000} />+
                  </div>
                  <div className={`transition-colors duration-300 ${darkMode ? "text-gray-400" : "text-gray-600"
                    }`}>
                    Active Learners
                  </div>
                </div>
                <div>
                  <div className={`text-3xl font-bold transition-colors duration-300 ${darkMode ? "text-indigo-400" : "text-indigo-600"
                    }`}>
                    <AnimatedCounter end={500} />+
                  </div>
                  <div className={`transition-colors duration-300 ${darkMode ? "text-gray-400" : "text-gray-600"
                    }`}>
                    Courses
                  </div>
                </div>
                <div>
                  <div className={`text-3xl font-bold transition-colors duration-300 ${darkMode ? "text-indigo-400" : "text-indigo-600"
                    }`}>
                    <AnimatedCounter end={98} />%
                  </div>
                  <div className={`transition-colors duration-300 ${darkMode ? "text-gray-400" : "text-gray-600"
                    }`}>
                    Success Rate
                  </div>
                </div>
                <div>
                  <div className={`text-3xl font-bold transition-colors duration-300 ${darkMode ? "text-indigo-400" : "text-indigo-600"
                    }`}>
                    <AnimatedCounter end={24} />
                    /7
                  </div>
                  <div className={`transition-colors duration-300 ${darkMode ? "text-gray-400" : "text-gray-600"
                    }`}>
                    Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className={`py-20 transition-colors duration-300 ${darkMode ? "bg-gray-900" : "bg-white"
          }`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"
                }`}>
                Powerful Features for Modern Learning
              </h2>
              <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-600"
                }`}>
                Discover cutting-edge tools and features designed to accelerate
                your learning journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} delay={index * 200} />
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id="how-it-works"
          className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50'} transition-colors duration-300`}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"
                }`}>
                How It Works
              </h2>
              <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-600"
                }`}>
                Get started in minutes with our intuitive learning platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"
                  }`}>
                  1. Set Your Goals
                </h3>
                <p className={`transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-600"
                  }`}>
                  Define your learning objectives and let our AI create a
                  personalized path
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"
                  }`}>
                  2. Learn & Practice
                </h3>
                <p className={`transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-600"
                  }`}>
                  Engage with interactive content, join communities, and
                  practice with real projects
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"
                  }`}>
                  3. Earn Credentials
                </h3>
                <p className={`transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-600"
                  }`}>
                  Complete assessments and earn recognized certificates to
                  advance your career
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className={`py-20 transition-colors duration-300 ${darkMode ? "bg-gray-900" : "bg-white"
          }`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"
                }`}>
                What Our Students Say
              </h2>
              <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-600"
                }`}>
                Join thousands of successful learners who transformed their
                careers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  {...testimonial}
                  delay={index * 300}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50'} transition-colors duration-300`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"
                }`}>
               Choose Your Plan
              </h2>

              <p className={`text-xl max-w-2xl mx-auto mb-8 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Start free, upgrade when you're ready to unlock your full
                potential
              </p>

              <div className="flex items-center justify-center space-x-4 mb-8">
                <span
                  className={`font-semibold transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}
                >
                  Monthly
                </span>
                <button
                  onClick={() => setYearlyPricing(!yearlyPricing)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${yearlyPricing ? "bg-indigo-600" : "bg-gray-300 dark:bg-gray-200"
                    }`}
                >
                  <span
                    className={`${yearlyPricing ? "translate-x-6" : "translate-x-1"
                      } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                  />
                </button>
                <span
                  className={`font-semibold transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}
                >
                  Yearly
                </span>
                {yearlyPricing && (
                  <span className={`text-xs px-2 py-1 rounded-full ${darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'}`}>
                    Save 30%
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <PricingCard key={index} {...plan} delay={index * 200} />
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`py-16 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-slate-100 via-blue-50/40 to-indigo-100/60 text-gray-900'} transition-colors duration-300`}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <img
                    src="/logo.png"
                    alt="EduTech Icon"
                    className="h-8 w-8"
                  />
                  <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    EduTech
                  </span>
                </div>
                <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Transforming education through AI-powered learning and global
                  collaboration.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div>
                <h4 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Platform</h4>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <li>
                    <a
                      href="#features"
                      className={`transition-colors ${darkMode ? 'hover:text-white' : 'hover:text-gray-900'}`}
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pricing"
                      className={`transition-colors ${darkMode ? 'hover:text-white' : 'hover:text-gray-900'}`}
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="/community" className={`transition-colors ${darkMode ? 'hover:text-white' : 'hover:text-gray-900'}`}>
                      Community
                    </a>
                  </li>
                  <li>
                    <a href="/certifications" className={`transition-colors ${darkMode ? 'hover:text-white' : 'hover:text-gray-900'}`}>
                      Certifications
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Support</h4>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <li>
                    <a href="/help-centre" className={`transition-colors ${darkMode ? 'hover:text-white' : 'hover:text-gray-900'}`}>
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="/contact-us" className={`transition-colors ${darkMode ? 'hover:text-white' : 'hover:text-gray-900'}`}>
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="/privacy-policy" className={`transition-colors ${darkMode ? 'hover:text-white' : 'hover:text-gray-900'}`}>
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/terms-of-service" className={`transition-colors ${darkMode ? 'hover:text-white' : 'hover:text-gray-900'}`}>
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Stay Updated</h4>
                <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Join our newsletter for the latest updates and offers.
                </p>
                <form className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className={`w-full px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${darkMode
                      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 rounded-r-lg hover:bg-indigo-700 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-white" />
                  </button>
                </form>
              </div>
            </div>

            <div className={`mt-12 pt-8 border-t text-center ${darkMode ? 'border-gray-800 text-gray-500' : 'border-gray-300 text-gray-500'}`}>
              <p>© {new Date().getFullYear()} EduTech. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}