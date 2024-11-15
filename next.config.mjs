import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(process.cwd(), 'styles')],
        prependData: `@import "/public/variables.scss";`, // Adjust the path if needed
    },
    images: {
        domains: [
            "api.mobilezmarket.com",
            "lh3.googleusercontent.com",
            "mobilezmarket.s3.amazonaws.com",
        ],
    }
};

export default nextConfig;
