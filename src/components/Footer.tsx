import { TbCoffee } from "react-icons/tb";

const footerLinks = [
  {
    title: "About",
    links: [
      { name: "About Us", href: "#" },
      { name: "Our Team", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Web Development", href: "#" },
      { name: "Mobile Development", href: "#" },
      { name: "Design", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "Contact Us", href: "#" },
      { name: "Support", href: "#" },
      { name: "Sales", href: "#" },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-orange-500">
      <section className="px-4">
        <div className="grid w-full max-w-screen-xl gap-8 py-20 mx-auto lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="mb-2 text-sm font-bold">Proelevate</h3>
            <p className="max-w-sm text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          {footerLinks.map((footerLink) => (
            <div key={footerLink.title}>
              <h3 className="mb-4 text-sm font-bold">{footerLink.title}</h3>
              <ul className="space-y-2 text-sm">
                {footerLink.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="w-full py-2 mx-auto">
          <div className="flex items-center justify-center max-w-screen-xl mx-auto">
            <p>
              <span className="text-xs">
                &copy; {new Date().getFullYear()} Your Company
              </span>
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
