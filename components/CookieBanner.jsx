"use client"
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

import { getLocalStorage, setLocalStorage } from '@/utilities/storageHelper'

const CookieBanner = () => {
    const [cookieConsent, setCookieConsent] = useState(false);
    const [cookieBanner, setCookieBanner] = useState(true);

    useEffect (() => {
        const storedCookieConsent = getLocalStorage("cookie_consent", null)
        setCookieConsent(storedCookieConsent)
    }, [setCookieConsent])

    useEffect(() => {
        const newValue = cookieConsent ? 'granted' : 'denied'

        window.gtag("consent", 'update', {
            'analytics_storage': newValue
        });

        setLocalStorage("cookie_consent", cookieConsent)

        //For Testing
        console.log("Cookie Consent: ", cookieConsent)

    }, [cookieConsent]);
  return (
    <AnimatePresence>
        {cookieBanner && (
        <div className='fixed bottom-3 flex items-center justify-center w-full px-8'>
            <motion.div 
            className='bg-primary-pink w-fit md:w-1/3 px-4 py-4 space-y-4 rounded-lg shadow-lg'
            exit={{y:1000}}
            transition={{duration: 0.5}}
            >
                <div className='text-sm text-center'>
                <p className='font-bold'>We value your Privacy</p>
                <p>
                We use cookies to enhance your experience and personalize content.
                </p>
                
                </div>

                <div className='flex items-center justify-evenly gap-8'>
                    <button className='bg-primary-white px-4 py-1 rounded-lg text-black font-bold' 
                    onClick={()=>{setCookieConsent(true); setCookieBanner(false)}}
                    >
                    Allow
                    </button>
                    <button 
                    className='border border-primary-white px-4 py-1 rounded-lg text-white'
                    onClick={()=>{setCookieConsent(false); if (cookieConsent != null){setCookieBanner(false)}}}
                    >
                    Decline
                    </button>
                    {/* <Link href="/cookie-policy" className='text-blue-800'> Cookie Policy</Link> */}
                    

                </div>
            </motion.div>
        </div>
        )}
        
    </AnimatePresence>
  )
}

export default CookieBanner