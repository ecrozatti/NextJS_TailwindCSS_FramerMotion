import { motion } from 'framer-motion';
import Link from 'next/link';

const NextPage: React.FC = () => {
   return (
      <div className="flex flex-col items-center">
         <motion.img
            src="/img/nextjs.svg"
            layoutId="nextjs-logo"
            transition={{ duration: 0.5 }}
         />

         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="text-gray-500 mb-10 animate-pulse text-2xl"
         >
            <a href="https://nextjs.org/" target="_blank">
               Next.js
            </a>
         </motion.div>

         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
         >
            <Link href="/">
               <a className="bg-gray-900 text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-700 transition">
                  Voltar para a Home
               </a>
            </Link>
         </motion.div>
      </div>
   )
}

export default NextPage;