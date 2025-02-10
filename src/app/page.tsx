"use client";
import { items } from "@/components/common/items";
import { socials } from "@/components/common/socials";
import { ProfileData } from "@/lib/helpers/profile";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) {
		return null; // or a loading spinner
	}
	return (
		<div className="font-[family-name:var(--font-geist-sans)] w-full min-h-screen bg-background">
			<main className="mx-auto mt-20 w-full flex flex-col justify-center items-center">
				<Image src={ProfileData.picture} alt="Abner" width={224} height={224} className="mx-auto size-56 rounded-full object-cover" />
				<div className="flex flex-row items-center gap-1 mt-6">
					<h3 className=" text-base/7 font-semibold tracking-tight text-foreground">{ProfileData.name}</h3>
				</div>
				<p className="text-sm/6 text-foreground/70">{ProfileData.title}</p>
				<ul className="w-full h-full flex flex-col px-10 mt-10 gap-y-4">
					{items.map((item, index) => (
						<li key={index + 1}>
							<Link className="flex items-center justify-between gap-6 p-2 bg-foreground/5 hover:bg-foreground/10 rounded-lg" href={item.href}>
								<div className="flex flex-row justify-between items-center w-full">
									<div className="flex flex-row items-center gap-4">
										<item.icon className="size-10 text-foreground/90" />
										<div>
											<h4 className="text-base/7 font-semibold text-foreground">{item.name}</h4>
											<p className="text-sm/6 text-foreground/70">{item.title}</p>
										</div>
									</div>
									<ChevronRightIcon size={24} className="text-primary/40" />
								</div>
							</Link>
						</li>
					))}
				</ul>
			</main>
			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center mt-10">
				<ul role="list" className="mt-6 flex justify-center gap-x-6">
					{socials.map((social, index) => (
						<li key={index + 1}>
							<Link href={social.redirectUrl} target="_blank" className="text-primary/40 hover:text-primary/65">
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
