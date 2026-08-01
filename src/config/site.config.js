const env = import.meta.env;

/**
 * Lightweight helper to determine if a URL string is valid and non-empty.
 */
export const isValidUrl = (url) => {
  if (!url || typeof url !== 'string') return false;
  const trimmed = url.trim();
  if (
    trimmed === '' ||
    trimmed === '#' ||
    trimmed.startsWith('PASTE_') ||
    trimmed.startsWith('YOUR_')
  ) {
    return false;
  }
  return true;
};

/**
 * Lightweight configuration validation.
 */
const validateConfig = (config) => {
  const requiredKeys = [
    { key: 'VITE_CONTACT_EMAIL', val: config.contact.email },
    { key: 'VITE_GITHUB_URL', val: config.social.github },
    { key: 'VITE_LINKEDIN_URL', val: config.social.linkedin },
    { key: 'VITE_RESUME_PATH', val: config.resume.path },
  ];

  const missing = requiredKeys.filter(({ val }) => !val);

  if (missing.length > 0 && env.DEV) {
    console.warn(
      `[siteConfig] Missing required environment variables: ${missing.map((m) => m.key).join(', ')}`
    );
  }
};

/**
 * Centralized application site configuration module.
 * Read-only single source of truth for deployment/environment settings.
 */
export const siteConfig = Object.freeze({
  site: {
    url: env.VITE_SITE_URL || 'https://naresh-portfolio.vercel.app',
    name: env.VITE_SITE_NAME || 'Naresh Chaudhary',
    role: env.VITE_SITE_ROLE || 'Software Engineer',
  },

  contact: {
    email: env.VITE_CONTACT_EMAIL || 'dev.naresh608@gmail.com',
    phone: env.VITE_CONTACT_PHONE || '+917990039450',
    location: env.VITE_CONTACT_LOCATION || 'Gujarat, India',
  },

  social: {
    github: env.VITE_GITHUB_URL || 'https://github.com/dev-naresh608',
    linkedin: env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/naresh608',
  },

  projects: {
    supplyNest: {
      repository: env.VITE_SUPPLYNEST_REPO_URL || 'https://github.com/dev-naresh608/supplyNest',
    },
    edgeSync: {
      repository: env.VITE_EDGESYNC_REPO_URL || 'https://github.com/dev-naresh608',
    },
    novexa: {
      repository: env.VITE_NOVEXA_REPO_URL || 'https://github.com/dev-naresh608',
    },
  },

  resume: {
    path: env.VITE_RESUME_PATH || '/Naresh_Resume.html',
  },

  emailjs: {
    serviceId: env.VITE_EMAILJS_SERVICE_ID || 'service_u6t9cdx',
    templateId: env.VITE_EMAILJS_TEMPLATE_ID || 'temp_pzs0o23_portfolio',
    publicKey: env.VITE_EMAILJS_PUBLIC_KEY || 'cJxZCC0uYl4qszrSU',
  },
});

validateConfig(siteConfig);
