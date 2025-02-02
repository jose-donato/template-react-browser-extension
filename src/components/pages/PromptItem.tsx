import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import { copyToClipboard } from "../../lib/utils";

interface Prompt {
	id: string;
	title: string;
	content: string;
}

interface PromptItemProps {
	prompt: Prompt;
}

export function PromptItem({ prompt }: PromptItemProps) {
	const handleCopy = () => {
		copyToClipboard(prompt.content);
		toast.success("Prompt copied to clipboard!");
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex justify-between items-center">
					{prompt.title}
					<Button variant="ghost" size="icon" onClick={handleCopy}>
						<Copy className="h-4 w-4" />
					</Button>
				</CardTitle>
			</CardHeader>
			<CardContent>
				<p className="text-sm">{prompt.content.substring(0, 100)}...</p>
			</CardContent>
		</Card>
	);
}
