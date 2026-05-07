export const WORKS_QUERY = `*[_type == "work"] | order(order asc)`;
export const WORK_BY_SLUG_QUERY = `*[_type == "work" && slug.current == $slug][0]`;
export const FEATURED_WORKS_QUERY = `*[_type == "work" && featured == true] | order(order asc)`;

export const JOURNAL_POSTS_QUERY = `*[_type == "journal"] | order(publishedAt desc)`;
export const JOURNAL_BY_SLUG_QUERY = `*[_type == "journal" && slug.current == $slug][0]`;

export const TESTIMONIALS_QUERY = `*[_type == "testimonial"] | order(order asc)`;
export const SERVICES_QUERY = `*[_type == "service"] | order(order asc)`;
export const SETTINGS_QUERY = `*[_type == "settings"][0]`;
