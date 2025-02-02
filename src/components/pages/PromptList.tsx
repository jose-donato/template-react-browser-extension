import { PromptItem } from "./PromptItem";

interface Prompt {
	id: string;
	title: string;
	content: string;
}

interface PromptListProps {
	prompts: Prompt[];
}

export function PromptList({ prompts }: PromptListProps) {
	return (
		<div className="space-y-4">
			{prompts.length === 0 ? (
				<p className="text-center text-gray-500">
					No prompts saved yet. Add some prompts to get started!
				</p>
			) : (
				prompts.map((prompt) => <PromptItem key={prompt.id} prompt={prompt} />)
			)}
		</div>
	);
}
