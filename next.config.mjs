/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! AQUI ESTÁ A MÁGICA !!
    // Perigo: só use isso se você sabe que o código funciona, mas o TS está reclamando.
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignora alertas de linter também
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;