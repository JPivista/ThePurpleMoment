// Configuration file for environment-specific settings
const config = {
    // Check if we're in production
    isProduction: process.env.NODE_ENV === 'production',

    // Get the current hostname from the request or environment
    getHostname: () => {
        if (typeof window !== 'undefined') {
            return window.location.hostname;
        }
        return process.env.VERCEL_URL || 'localhost';
    },

    // Check if this is the production domain (purplemovement.in without www)
    isProductionDomain: () => {
        const hostname = config.getHostname();
        return hostname === 'purplemovement.in';
    },

    // Check if this is the staging domain
    isStagingDomain: () => {
        const hostname = config.getHostname();
        return hostname === 'staging.purplemovement.in';
    },

    // Get robots meta tag based on domain
    getRobotsMeta: () => {
        if (config.isProduction && config.isProductionDomain()) {
            return 'index, follow';
        }
        return 'noindex, nofollow';
    }
};

export default config;
