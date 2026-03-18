import { items } from "@/components/common/items";
import { socials } from "@/components/common/socials";
import { ProfileData } from "@/lib/helpers/profile";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const profilePicture = ProfileData.picture;

  return (
    <div className="w-full min-h-screen bg-background text-foreground flex flex-col font-[family-name:var(--font-geist-sans)]">
      <main className="flex-1 w-full max-w-md mx-auto flex flex-col items-center justify-center">
        <header className="text-center w-full px-4">
          <Image
            src={profilePicture.src}
            alt={ProfileData.name}
            width={profilePicture.width}
            height={profilePicture.height}
            className="mx-auto size-56 rounded-full object-cover"
            priority
          />
          <h1 className="mt-6 text-base/7 font-semibold tracking-tight text-foreground">
            {ProfileData.name}
          </h1>
          <p className="mt-2 text-sm/6 text-foreground/70">
            {ProfileData.title}
          </p>
        </header>

        <ul className="mt-10 flex flex-col gap-4 w-full px-2 md:px-10">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                target="_blank"
                className="group w-full flex items-center justify-between gap-6 rounded-lg bg-foreground/5 p-2 transition-colors hover:bg-foreground/10"
              >
                <div className="flex items-center gap-4">
                  <item.icon className="size-10 text-foreground/90 transition-colors group-hover:text-foreground" />
                  <div className="text-left">
                    <h4 className="text-base/7 font-semibold text-foreground">
                      {item.name}
                    </h4>
                    <p className="text-sm/6 text-foreground/70">{item.title}</p>
                  </div>
                </div>

                <ChevronRightIcon
                  size={24}
                  className="text-primary/40 transition-colors group-hover:text-primary/65 shrink-0"
                />
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <footer className="b-0 pb-2 pt-8">
        <ul
          role="list"
          className="w-full max-w-md mx-auto px-4 flex justify-center gap-x-6"
        >
          {socials.map((social) => (
            <li key={social.redirectUrl}>
              <Link
                href={social.redirectUrl}
                target="_blank"
                className="text-primary/40 hover:text-primary/65 transition-colors"
              >
                <span className="sr-only">{social.name}</span>
                {social.icon}
              </Link>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}
