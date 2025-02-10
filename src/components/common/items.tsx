import { EMAIL, GITHUB_ID, INSTAGRAM_ID, LINKEDIN_ID, PHONE } from "@/lib/constants/env";
import { formatCellphone } from "@/lib/helpers/mask";
import { emailUrl, githubUrl, instagramUrl, linkedinUrl, whatsappUrl } from "@/lib/helpers/media-url";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { TiSocialInstagram } from "react-icons/ti";

export const items = [
	{
		name: "Github",
		title: `@${GITHUB_ID}`,
		icon: FaGithub,
		href: githubUrl,
	},
	{
		name: "E-mail",
		title: `${EMAIL}`,
		icon: SiGmail,
		href: emailUrl,
	},
	{
		name: "LinkedIn",
		title: `@${LINKEDIN_ID}`,
		icon: IoLogoLinkedin,
		href: linkedinUrl,
	},
	{
		name: "Instagram",
		title: `@${INSTAGRAM_ID}`,
		icon: TiSocialInstagram,
		href: instagramUrl,
	},
	{
		name: "Whatsapp",
		title: formatCellphone(`55${PHONE}`),
		icon: IoLogoWhatsapp,
		href: whatsappUrl,
	},
];
