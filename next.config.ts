import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	env: {
		PROFILE_PICTURE_URL: process.env.PROFILE_PICTURE_URL,
		PROFILE_NAME: process.env.PROFILE_NAME,
		PROFILE_DESCRIPTION: process.env.PROFILE_DESCRIPTION,
		LINKEDIN_ID: process.env.LINKEDIN_ID,
		GITHUB_ID: process.env.GITHUB_ID,
		INSTAGRAM_ID: process.env.INSTAGRAM_ID,
		EMAIL: process.env.EMAIL,
		PHONE: process.env.PHONE,
	},
	images: {
		domains: ["media.licdn.com"],
	},
};

export default nextConfig;
