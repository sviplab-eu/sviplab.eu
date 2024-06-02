/** @type {import('next').NextConfig} */
const nextConfig = {
    "paths": {
        "@/db/*": ["db/*"],
        "@/components/*": ["components/*"]
    }

}

module.exports = nextConfig
