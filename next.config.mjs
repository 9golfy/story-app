/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true, // ปิดการใช้ Image Optimization API สำหรับ static HTML export
    },
  };
  
  export default nextConfig;
  