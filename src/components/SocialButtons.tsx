import { person } from "../data/profile";

/**
 * Icon-only social buttons (LinkedIn / GitHub / X / Email), matching the
 * rounded-square style. Each opens in a new tab except email.
 */
export default function SocialButtons({ compact }: { compact?: boolean }) {
  const channels = [
    {
      label: "LinkedIn",
      href: person.linkedin,
      icon: (
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
      ),
      external: true,
    },
    {
      label: "GitHub",
      href: person.github,
      icon: (
        <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
      ),
      external: true,
    },
    {
      label: "X (Twitter)",
      href: person.twitter,
      icon: (
        <path d="M18.9 2.1h3.7l-8.1 9.3L24 23.9h-7.5l-5.9-7.7-6.7 7.7H.2l8.7-9.9L0 2.1h7.7l5.3 7 6-7zm-1.3 19.6h2L6.6 4.2H4.4l13.2 17.5z" />
      ),
      external: true,
    },
    {
      label: "Email",
      href: "mailto:" + person.email,
      icon: (
        <path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13zm2.7-.5L12 11.4 19.3 5H4.7zm16.3 1.9-8 6.7a1.5 1.5 0 0 1-2 0l-8-6.7v11.6c0 .6.4 1 1 1h15c.6 0 1-.4 1-1V6.9z" />
      ),
      external: false,
    },
  ];

  return (
    <div className={`social-buttons ${compact ? "compact" : ""}`}>
      {channels.map((channel) => (
        <a
          key={channel.label}
          className="social-button"
          href={channel.href}
          aria-label={channel.label}
          title={channel.label}
          {...(channel.external ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
            {channel.icon}
          </svg>
        </a>
      ))}
    </div>
  );
}
