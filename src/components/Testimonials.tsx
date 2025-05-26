// import React, { useEffect, useRef, useState } from 'react';
// import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

// interface Testimonial {
//   id: number;
//   name: string;
//   position: string;
//   company: string;
//   image: string;
//   text: string;
// }

// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     name: 'Sarah Johnson',
//     position: 'Product Manager',
//     company: 'Tech Innovations Inc.',
//     image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     text: 'John is an exceptional developer who consistently delivers high-quality work. His ability to understand complex requirements and translate them into elegant solutions is truly impressive. He was a vital part of our team and significantly contributed to the success of our product.'
//   },
//   {
//     id: 2,
//     name: 'Michael Rodriguez',
//     position: 'CTO',
//     company: 'WebSolutions Co.',
//     image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     text: "Working with John was a fantastic experience. His technical skills are top-notch, but what really sets him apart is his proactive approach to problem-solving and his excellent communication skills. He's not just a developer; he's a true technology partner."
//   },
//   {
//     id: 3,
//     name: 'Emily Chen',
//     position: 'Design Director',
//     company: 'Digital Creators Agency',
//     image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     text: 'John has an exceptional eye for design implementation. He took our complex designs and brought them to life with perfect precision. His attention to detail and understanding of user experience made our collaboration seamless and productive.'
//   },
//   {
//     id: 4,
//     name: 'David Wilson',
//     position: 'Lead Developer',
//     company: 'Innovative Solutions',
//     image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     text: "I had the pleasure of mentoring John early in his career, and I was constantly impressed by his rapid learning ability and dedication. Now, he's evolved into an outstanding developer who I regularly turn to for advice on complex technical challenges."
//   }
// ];

// const Testimonials: React.FC = () => {
//   const sectionRef = useRef<HTMLElement>(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [touchStart, setTouchStart] = useState<number | null>(null);
//   const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate-fade-in');
//         }
//       },
//       { threshold: 0.1 }
//     );
    
//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }
    
//     return () => observer.disconnect();
//   }, []);

//   const nextTestimonial = () => {
//     setActiveIndex((prevIndex) => 
//       prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevTestimonial = () => {
//     setActiveIndex((prevIndex) => 
//       prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//     );
//   };

//   const handleTouchStart = (e: React.TouchEvent) => {
//     setTouchStart(e.targetTouches[0].clientX);
//   };

//   const handleTouchMove = (e: React.TouchEvent) => {
//     setTouchEnd(e.targetTouches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     if (!touchStart || !touchEnd) return;
    
//     const distance = touchStart - touchEnd;
//     const isLeftSwipe = distance > 50;
//     const isRightSwipe = distance < -50;
    
//     if (isLeftSwipe) {
//       nextTestimonial();
//     } else if (isRightSwipe) {
//       prevTestimonial();
//     }
    
//     setTouchStart(null);
//     setTouchEnd(null);
//   };

//   return (
//     <section 
//       id="testimonials" 
//       ref={sectionRef}
//       className="py-20 px-6 bg-gray-50 dark:bg-gray-900 opacity-0 transition-opacity duration-1000"
//     >
//       <div className="container mx-auto max-w-6xl">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
//             Client <span className="text-blue-600 dark:text-blue-400">Testimonials</span>
//           </h2>
//           <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             What others say about working with me and the results we've achieved together.
//           </p>
//         </div>
        
//         <div 
//           className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-10 overflow-hidden"
//           onTouchStart={handleTouchStart}
//           onTouchMove={handleTouchMove}
//           onTouchEnd={handleTouchEnd}
//         >
//           <Quote size={48} className="absolute top-6 left-6 text-blue-100 dark:text-gray-700" />
          
//           <div className="relative z-10">
//             <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
//               <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
//                 <img 
//                   src={testimonials[activeIndex].image} 
//                   alt={testimonials[activeIndex].name} 
//                   className="w-full h-full object-cover rounded-full border-4 border-blue-100 dark:border-blue-900"
//                 />
//               </div>
              
//               <div className="flex-1">
//                 <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 italic">
//                   "{testimonials[activeIndex].text}"
//                 </p>
                
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-900 dark:text-white">
//                     {testimonials[activeIndex].name}
//                   </h3>
//                   <p className="text-blue-600 dark:text-blue-400">
//                     {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <div className="flex justify-between mt-8">
//             <button 
//               onClick={prevTestimonial}
//               className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//               aria-label="Previous testimonial"
//             >
//               <ChevronLeft size={24} />
//             </button>
            
//             <div className="flex space-x-2">
//               {testimonials.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setActiveIndex(index)}
//                   className={`w-3 h-3 rounded-full transition-colors ${
//                     index === activeIndex 
//                       ? 'bg-blue-600 dark:bg-blue-500' 
//                       : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-200 dark:hover:bg-blue-800'
//                   }`}
//                   aria-label={`Go to testimonial ${index + 1}`}
//                 ></button>
//               ))}
//             </div>
            
//             <button 
//               onClick={nextTestimonial}
//               className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//               aria-label="Next testimonial"
//             >
//               <ChevronRight size={24} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

export default function Testimonials() {
  return (
    <div className="py-12 px-6 bg-white dark:bg-gray-900">
      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Client Testimonials
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
        What others say about working with me and the results we've achieved through DevOps automation and cloud scalability.
      </p>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-2xl">
        <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
          "Shankar set up a complete DevOps pipeline using AWS, Terraform, and Jenkins that reduced our deployment time from hours to minutes.
          His proactive monitoring and automation significantly improved our uptime and incident response. A true DevOps champion!"
        </p>
        <p className="font-bold text-gray-800 dark:text-white">Priya Mehta</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">CTO, CloudScale Technologies</p>
      </div>
    </div>
  );
}
