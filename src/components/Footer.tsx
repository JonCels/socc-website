const socials = [
  { label: 'Linktree',  href: 'https://linktr.ee/soccmtg',           img: '/external/linktree-white-icon.png' },
  { label: 'Discord',   href: 'https://discord.gg/5ZaP3wcxGD',       img: '/external/discord-white-icon.png' },
  { label: 'Twitter',   href: 'https://x.com/soccmtg',            img: '/external/x-social-media-white-icon.png' },
  { label: 'Instagram', href: 'https://instagram.com/soccmtg',     img: '/external/instagram-white-icon.png' },
  { label: 'YouTube',   href: 'https://youtube.com/@soccmtg',     img: '/external/youtube-app-white-icon.png' },
  { label: 'TikTok',    href: 'https://tiktok.com/@soccmtg',        img: '/external/tiktok-simplified-white-icon.png' },
]

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 pt-2 pb-6" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="flex items-center justify-center gap-25">
        {socials.map(({ label, href, img }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="p-3 opacity-50 transition-opacity hover:opacity-100"
          >
            <img src={img} alt={label} className="h-8 w-8 object-contain" />
          </a>
        ))}
      </div>
    </footer>
  )
}
