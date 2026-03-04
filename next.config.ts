/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Esto permite que Next.js optimice las imágenes sin errores de dominio
    unoptimized: true, 
  },
};

export default nextConfig;