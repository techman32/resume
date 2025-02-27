import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
  basePath: '/resume',
  output: 'export',
  images: {
    unoptimized: true
  }
}

export default nextConfig
