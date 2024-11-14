import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(process.cwd(), 'styles')],
        prependData: `@import "/public/variables.scss";`, // Adjust the path if needed
    },
    images: {
        domains: [

        ]
    }
};

export default nextConfig;
