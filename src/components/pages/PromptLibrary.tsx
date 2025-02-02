import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { AddPromptForm } from "./AddPromptForm";
import { GeneratePromptForm } from "./GeneratePrompt";
import { PromptList } from "./PromptList";

interface Prompt {
	id: string;
	title: string;
	content: string;
}

export function PromptLibrary() {
	const [prompts, setPrompts] = useState<Prompt[]>([]);

	useEffect(() => {
		// Load prompts from localStorage when the component mounts
		const savedPrompts = localStorage.getItem("prompts");
		if (savedPrompts) {
			setPrompts(JSON.parse(savedPrompts));
		}
	}, []);

	const savePrompt = (newPrompt: Prompt) => {
		const updatedPrompts = [...prompts, newPrompt];
		setPrompts(updatedPrompts);
		localStorage.setItem("prompts", JSON.stringify(updatedPrompts));
	};

	return (
		<Tabs defaultValue="list">
			<TabsList className="grid w-full grid-cols-3">
				<TabsTrigger value="list">Prompts</TabsTrigger>
				<TabsTrigger value="add">Add</TabsTrigger>
				<TabsTrigger value="generate">Generate</TabsTrigger>
			</TabsList>
			<TabsContent value="list">
				<PromptList prompts={prompts} />
			</TabsContent>
			<TabsContent value="add">
				<AddPromptForm onSave={savePrompt} />
			</TabsContent>
			<TabsContent value="generate">
				<GeneratePromptForm onSave={savePrompt} />
			</TabsContent>
		</Tabs>
	);
}
