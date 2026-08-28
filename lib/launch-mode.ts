/**
 * Launch mode switch.
 *
 * 'mini' renders the stripped-back crowdfunder landing page (hero, marquee,
 * brief about, waitlist) with only the Shop page reachable. 'full' restores
 * the complete multi-page site. Nothing is deleted in either mode — set
 * NEXT_PUBLIC_LAUNCH_MODE=full to bring the whole experience back.
 */
export const LAUNCH_MODE = process.env.NEXT_PUBLIC_LAUNCH_MODE ?? 'full';

export const isMini = LAUNCH_MODE === 'mini';

/** Routes hidden while the mini launch is live. */
export const MINI_HIDDEN_ROUTES = ['/learn', '/about', '/events', '/community', '/gallery'] as const;
