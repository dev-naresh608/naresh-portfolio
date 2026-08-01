import emailjs from '@emailjs/browser';

/**
 * Service layer responsible for EmailJS integration and parameter mapping.
 */
export const sendContactEmail = async ({ name, email, message }) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_u6t9cdx';
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'temp_pzs0o23_portfolio';
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'cJxZCC0uYl4qszrSU';

  // Validate configuration presence without exposing actual key values
  if (!serviceId || !templateId || !publicKey) {
    if (import.meta.env.DEV) {
      console.error('[EmailService] Missing required EmailJS environment variables.');
    }
    throw new Error('CONFIG_MISSING');
  }

  // Template parameters mapping compatible with multiple EmailJS variable structures
  const templateParams = {
    from_name: name,
    from_email: email,
    reply_to: email,
    message: message,
    // Field aliases matching standard template configurations
    name: name,
    email: email,
  };

  // 12-second timeout safeguard to prevent infinite pending UI state
  const TIMEOUT_MS = 12000;

  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('REQUEST_TIMEOUT'));
    }, TIMEOUT_MS);
  });

  try {
    const sendPromise = emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );

    const result = await Promise.race([sendPromise, timeoutPromise]);
    return result;
  } catch (err) {
    if (import.meta.env.DEV) {
      console.error('[EmailService] Request failed:', err.text || err.message || 'Unknown error');
    }
    throw err;
  }
};
