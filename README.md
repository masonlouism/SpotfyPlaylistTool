# Spotify Subgenre Splitter 🎵

A full-stack web application that leverages Large Language Models (LLMs) to solve the "Subgenre Gap" in music organization. This tool allows users to connect their Spotify accounts, analyze "Super Playlists," and intelligently segment them into cohesive subgenre-specific playlists.

## 🚀 The Problem
While the Spotify API provides broad genre data for **artists**, it lacks granular subgenre metadata for **individual tracks**. This makes it difficult for users to organize massive, multi-genre playlists (e.g., a 500-song "Electronic" list) into specific moods like *Synthwave, Lo-fi House, or Drum & Bass*.

## 🧠 The Solution
By utilizing the **OpenAI/Claude API**, this application analyzes track metadata (Title, Artist, Album) to categorize songs with human-like musical context. 

### Key Features:
* **OAuth 2.0 Integration:** Secure authentication via Spotify's Authorization Code Flow.
* **LLM Categorization:** Automated subgenre grouping using prompt engineering.
* **Data Visualization:** Interactive analytics showing the "DNA" and genre density of your playlists.
* **Automated Curation:** One-click creation of new, segmented playlists directly in the user's Spotify library.

## 🛠️ Tech Stack
* **Frontend:** React.js, Vite, Tailwind CSS (HCD-focused UI/UX)
* **Backend:** Node.js, Express
* **APIs:** Spotify Web API, OpenAI API
* **Data:** Chart.js for subgenre analytics

## 🏗️ Project Structure
```text
├── client/          # React frontend (Vite)
├── server/          # Node.js backend & API logic
├── docs/            # Architecture diagrams & project planning
└── .gitignore       # Safeguarding API keys and dependencies