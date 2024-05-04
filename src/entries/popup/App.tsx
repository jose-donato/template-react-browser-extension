import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Star } from "lucide-react";
import { useState } from "react";
import browser from "webextension-polyfill";

function App() {
	const [response, setResponse] = useState("");

	return (
		<main className="min-w-[400px] min-h-[300px] bg-zinc-900 text-white p-4">
			<nav className="flex justify-between items-center">
				<p className="text-white font-bold">template-react-browser-extension</p>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<a
								href="https://github.com/jose-donato/template-react-browser-extension"
								target="_blank"
								rel="noreferrer"
							>
								<Button variant={"secondary"} size="sm">
									Get started
								</Button>
							</a>
						</TooltipTrigger>
						<TooltipContent>
							<p>See the full code on GitHub</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</nav>
			<div className="mt-4">
				<p className="text-sm text-zinc-400">
					This is a template for a browser extension using React, TypeScript,
					Tailwind CSS, and shadcn-ui. Click the button below to the page and
					get the title
				</p>
				<Button
					size={"sm"}
					className="mt-2"
					onClick={async () => {
						const tabs = await browser.tabs.query({
							active: true,
							currentWindow: true,
						});
						const results = await browser.scripting.executeScript({
							target: { tabId: tabs[0].id },
							function: getPageTitle,
						});
						const title = results[0].result; // Get the result from the injected script
						const response = await browser.runtime.sendMessage({
							action: "addEmojiToTitle",
							title,
						});
						setResponse(response.response);
					}}
				>
					Get current page title
				</Button>
				{response ? (
					<div className="mt-4">
						<p className="text-lg">
							<strong>Title with random emoji:</strong> {response}
						</p>
					</div>
				) : null}
			</div>
			<p className="text-xs text-zinc-400 mt-4 text-center">
				Developed by{" "}
				<a
					href="https://jose-donato.deno.dev"
					className="underline hover:text-white"
					target="_blank"
					rel="noreferrer"
				>
					Jose Donato
				</a>
				. Code open source on{" "}
				<a
					href="https://github.com/jose-donato/template-react-browser-extension"
					target="_blank"
					rel="noreferrer"
					className="underline hover:text-white"
				>
					GitHub
				</a>
				.
			</p>
		</main>
	);
}

export default App;

function getPageTitle() {
	return document.title;
}
