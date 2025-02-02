import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function copyToClipboard(text: string) {
	navigator.clipboard
		.writeText(text)
		.then(() => {
			console.log("Text copied to clipboard");
		})
		.catch((err) => {
			console.error("Failed to copy text: ", err);
		});
}
