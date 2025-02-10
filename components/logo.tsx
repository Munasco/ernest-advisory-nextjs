import type { FC } from "react"

interface LogoProps {
  className?: string
}

export const Logo: FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="20" fill="url(#gradient)" />
      <path d="M30 30H70V40H40V50H65V60H40V70H70V80H30V30Z" fill="#ffffff" />
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60A5FA" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
    </svg>
  )
}

