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
    <footer className="fixed bottom-0 left-0 right-0 z-[60] py-2 sm:pt-2 sm:pb-6">
      <div className="mx-auto flex max-w-xl items-center justify-between px-3 sm:px-6 2xl:max-w-2xl">
        {socials.map(({ label, href, img }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="p-2 opacity-70 transition-opacity hover:opacity-100 sm:p-3 sm:opacity-50"
          >
            <img
              src={img}
              alt=""
              className="h-7 w-7 object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] sm:h-8 sm:w-8 2xl:h-9 2xl:w-9"
            />
          </a>
        ))}
      </div>
    </footer>
  )
}
