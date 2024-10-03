/** @type {import('next').NextConfig} */

module.exports = {
    
    images: {
        // formats: ['image/avif', 'image/webp'],

        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/dixkqgqsi/image/upload/**',
            },
            {
                protocol: 'https',
                hostname: 'photos.app.goo.gl',
                port:'',
                pathname:'/*',
            },
             {
                protocol: 'https',
                hostname: 'photos.google.com',
                port:'',
                pathname:'/share/**',
            },
        ],
    },
   
}