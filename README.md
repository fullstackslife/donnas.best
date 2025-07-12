# 💙 Donna's Best - Caregiving Stories & Book Project

Welcome to **Donna's Best**, an interactive storytelling project designed to help Donna write a book about dementia and Alzheimer's care. This isn't just a website — it's the beginning of a legacy, capturing wisdom, memories, and love from a lifetime of caregiving.

## 🎯 Project Purpose

This platform guides Donna through thoughtful reflections on her caregiving journey, collecting stories and insights that will become chapters in her upcoming book. Through guided prompts and gentle questions, we're building a resource to help other families navigate the challenges and beauty of caring for loved ones with dementia and Alzheimer's.

## ✨ Features

- **Interactive Journal**: 17 guided questions covering personal stories, memories, practical advice, and legacy thoughts
- **Local Data Storage**: All responses are saved to your browser's localStorage for privacy and persistence
- **Markdown Export**: Transform your stories into formatted markdown files ready for book publishing
- **Responsive Design**: Beautiful, accessible interface built with care
- **Privacy-First**: No user accounts, no data collection, everything stays on your device

## 🛠 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS for beautiful, responsive design
- **Routing**: React Router for seamless navigation
- **Storage**: Browser localStorage for data persistence
- **Export**: Client-side markdown generation

## 🚀 Running Locally

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/fullstackslife/donnas.best.git
cd donnas.best

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
# Create optimized build
npm run build

# Preview production build locally
npm run preview
```

### Generate Markdown from Journal Data

```bash
# Run the markdown generation script
npm run generate-md
```

## 📁 Project Structure

```
donnas.best/
├── src/
│   ├── pages/
│   │   ├── Home.tsx          # Landing page with project introduction
│   │   └── journal.tsx       # Interactive journal with guided questions
│   ├── App.tsx               # Main application component
│   ├── main.tsx              # Application entry point
│   └── index.css             # Global styles with Tailwind
├── scripts/
│   └── generateMarkdown.ts   # Script to export localStorage data as markdown
├── public/
│   └── media/                # Documentation screenshots and assets
├── README.md                 # This file
├── CONTRIBUTING.md           # Guidelines for gentle collaboration
├── SECURITY.md               # Privacy and data handling information
├── LICENSE                   # Creative Commons license
└── DEPLOY.md                 # Deployment instructions
```

## 🌐 Deployment

This project is deployed on **Vercel** for reliable, fast hosting. See [DEPLOY.md](./DEPLOY.md) for detailed deployment instructions.

**Live Site**: [https://donnas.best](https://donnas.best)

## 🤝 Contributing

We welcome gentle collaboration on this personal project! Please read our [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on how to suggest improvements while respecting the sensitive nature of caregiving stories.

## 🔒 Privacy & Security

Donna's stories are precious and private. Read our [SECURITY.md](./SECURITY.md) to understand how we protect data and maintain privacy throughout this project.

## 📚 About the Book

This project supports Donna's upcoming book on dementia and Alzheimer's care, focusing on:
- Personal caregiving experiences and practical wisdom
- The role of food, comfort, and daily routines in care
- Emotional and mental health strategies for caregivers
- Faith, healing, and legacy building
- Real stories that help other families navigate similar journeys

## 💝 Credits & Contact

**Donna** - Author, caregiver, and the heart of this project
**Project Maintainer**: [Contact information for project maintainer]

---

*This project is built with love and respect for all families navigating the journey of dementia and Alzheimer's care. Donna's wisdom will help light the way for others.*