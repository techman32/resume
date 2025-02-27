import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
  basePath: '/Resume',
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true
  }
}

export default nextConfig
