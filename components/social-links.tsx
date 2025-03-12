import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function SocialLinks({ className = "" }) {
  const linkedInProfile = "https://www.linkedin.com/in/prince05/"

  return (
    <div className={`flex space-x-4 ${className}`}>
      <a
        href={linkedInProfile}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-primary transition-colors"
        aria-label="Facebook"
      >
        <Facebook className="h-5 w-5" />
      </a>
      <a
        href={linkedInProfile}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-primary transition-colors"
        aria-label="Twitter"
      >
        <Twitter className="h-5 w-5" />
      </a>
      <a
        href={linkedInProfile}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-primary transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin className="h-5 w-5" />
      </a>
      <a
        href={linkedInProfile}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-primary transition-colors"
        aria-label="Instagram"
      >
        <Instagram className="h-5 w-5" />
      </a>
    </div>
  )
}

