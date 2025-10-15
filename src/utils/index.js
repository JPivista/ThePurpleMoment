// Utility functions for the application

export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

export const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
};

export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};
