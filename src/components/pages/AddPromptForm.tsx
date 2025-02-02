import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type React from "react";
import { useState } from "react";
import { toast } from "sonner";

interface Prompt {
	id: string;
	title: string;
	content: string;
}

interface AddPromptFormProps {
	onSave: (prompt: Prompt) => void;
}

export function AddPromptForm({ onSave }: AddPromptFormProps) {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (title && content) {
			onSave({
				id: Date.now().toString(),
				title,
				content,
			});
			setTitle("");
			setContent("");
			toast.success("Prompt saved successfully!");
		}
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<Input
				type="text"
				placeholder="Prompt Title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				required
			/>
			<Textarea
				placeholder="Prompt Content"
				value={content}
				onChange={(e) => setContent(e.target.value)}
				required
			/>
			<Button type="submit" className="w-full">
				Save Prompt
			</Button>
		</form>
	);
}
