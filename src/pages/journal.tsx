import { useState, useEffect } from "react";

const questions = [
  { id: 1, prompt: "What first led you to become a caregiver?" },
  { id: 2, prompt: "Who have you cared for, and what were their stories?" },
  { id: 3, prompt: "What did your daily caregiving routine look like?" },
  { id: 4, prompt: "Share a moment that made you laugh or cry." },
  { id: 5, prompt: "What memory do you cherish the most?" },
  { id: 6, prompt: "What role did food play in how you gave care?" },
  { id: 7, prompt: "Were there any meals that became part of your routine?" },
  { id: 8, prompt: "What were some early signs you noticed?" },
  { id: 9, prompt: "How did you adapt your caregiving style?" },
  { id: 10, prompt: "What’s something you wish doctors understood?" },
  { id: 11, prompt: "What did you do to protect your mental health?" },
  { id: 12, prompt: "What do you want other caregivers to know?" },
  { id: 13, prompt: "Did faith help during tough times?" },
  { id: 14, prompt: "What legacy do you hope to leave?" },
  { id: 15, prompt: "What are you most proud of?" },
  { id: 16, prompt: "What do you want this book to say?" },
  { id: 17, prompt: "Who do you want to dedicate it to?" },
];

type Answers = Record<number, string>;

export default function Journal() {
  const [answers, setAnswers] = useState<Answers>({});

  useEffect(() => {
    const saved = localStorage.getItem("donna_journal");
    if (saved) setAnswers(JSON.parse(saved));
  }, []);

  const handleChange = (id: number, text: string) => {
    const newAnswers = { ...answers, [id]: text };
    setAnswers(newAnswers);
    localStorage.setItem("donna_journal", JSON.stringify(newAnswers));
  };

  const exportMarkdown = () => {
    const md = questions
      .map((q) => `### ${q.prompt}\n\n${answers[q.id] || ""}`)
      .join("\n\n");
    const blob = new Blob([md], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "donna_journal.md";
    a.click();
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Donna’s Journal</h1>
      {questions.map((q) => (
        <div key={q.id}>
          <label className="block font-semibold mb-1">{q.prompt}</label>
          <textarea
            className="w-full border rounded p-2"
            rows={4}
            value={answers[q.id] || ""}
            onChange={(e) => handleChange(q.id, e.target.value)}
          />
        </div>
      ))}
      <button
        onClick={exportMarkdown}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Export as Markdown
      </button>
    </div>
  );
}
