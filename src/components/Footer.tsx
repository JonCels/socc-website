const socials = [
  { label: 'Discord',   href: 'https://discord.gg/5ZaP3wcxGD',       img: '/external/discord-white-icon.png' },
  { label: 'Twitter',   href: 'https://x.com/YOUR_HANDLE',            img: '/external/x-social-media-white-icon.png' },
  { label: 'Instagram', href: 'https://instagram.com/YOUR_HANDLE',     img: '/external/instagram-white-icon.png' },
  { label: 'YouTube',   href: 'https://youtube.com/@YOUR_CHANNEL',     img: '/external/youtube-app-white-icon.png' },
]

export default function Footer() {
  return (
    <footer className="pt-2 pb-8">
      <div className="flex items-center justify-center gap-25">
        {socials.map(({ label, href, img, size }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="p-3 opacity-50 transition-opacity hover:opacity-100"
          >
            <img src={img} alt={label} className={`${size ?? 'h-8 w-8'} object-contain`} />
          </a>
        ))}
      </div>
    </footer>
  )
}
