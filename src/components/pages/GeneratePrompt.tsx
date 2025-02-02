import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

interface Prompt {
	id: string;
	title: string;
	content: string;
}

interface GeneratePromptFormProps {
	onSave: (prompt: Prompt) => void;
}

export function GeneratePromptForm({ onSave }: GeneratePromptFormProps) {
	const [keywords, setKeywords] = useState("");
	const [generatedPrompt, setGeneratedPrompt] = useState("");
	const [title, setTitle] = useState("");

	const handleGenerate = async () => {
		if (keywords) {
			const prompt = ""; //await generatePrompt(keywords);
			setGeneratedPrompt(prompt);
			setTitle(keywords);
			toast.success("Prompt generated!");
		} else {
			toast.error("Please enter some keywords");
		}
	};

	const handleSave = () => {
		if (title && generatedPrompt) {
			onSave({
				id: Date.now().toString(),
				title,
				content: generatedPrompt,
			});
			setKeywords("");
			setGeneratedPrompt("");
			setTitle("");
			toast.success("Generated prompt saved!");
		}
	};

	return (
		<div className="space-y-4">
			<Input
				type="text"
				placeholder="Enter keywords (e.g., 'trading helper')"
				value={keywords}
				onChange={(e) => setKeywords(e.target.value)}
			/>
			<Button onClick={handleGenerate} className="w-full">
				Generate Prompt
			</Button>
			{generatedPrompt && (
				<>
					<Input
						type="text"
						placeholder="Prompt Title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
					/>
					<Textarea
						value={generatedPrompt}
						onChange={(e) => setGeneratedPrompt(e.target.value)}
						placeholder="Generated prompt will appear here"
					/>
					<Button onClick={handleSave} className="w-full">
						Save Generated Prompt
					</Button>
				</>
			)}
		</div>
	);
}
