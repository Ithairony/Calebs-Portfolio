
const links = [
  { label: "Email", href: "mailto:caleb132macedo@gmail.com" },
  { label: "Instagram", href: "https://www.instagram.com/um_caleb?utm_source=ig_web_button_share_sheet&rpxt=ZDNlZDc0MzIxNw==" },
];

export default function Footer() {
  return (
    <footer className="flex flex-col gap-4 px-6 py-8 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
      <ul className="flex gap-6">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-black"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-1 sm:items-end">
        <p>Website by Igor Thairony</p>
        <p>© {new Date().getFullYear()} Caleb Macedo. All rights reserved.</p>
      </div>
    </footer>
  );
}