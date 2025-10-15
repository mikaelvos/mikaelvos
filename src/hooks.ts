import type { Reroute } from '@sveltejs/kit';

let domain = 'mikaelvos.nl';

export const reroute: Reroute = ({ url }) => {
    if (url.hostname === domain) {
        return '/';
    }

    if (url.hostname === `lustrelus.${domain}`) {
        return `/lustrelus${url.pathname}`;
    }

    // Add more domain or subdomain checks as needed
}