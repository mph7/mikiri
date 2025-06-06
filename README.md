# Mikiri (見切り) - Your Personal Space for Immersive Japanese Reading

**Mikiri** helps you cut through the noise and dive deep into Japanese texts. Our vision is to create a powerful, personalizable, and privacy-respecting platform that empowers Japanese language learners to engage with authentic content on their own terms.

We believe in the power of immersion and "i+1" learning. Mikiri aims to be the best tool for you to read what _you_ want, how _you_ want, seamlessly integrating with your existing learning ecosystem.

## ✨ Current Stage: Foundational MVP - The Clean Reader

Mikiri is currently in its foundational **Minimum Viable Product (MVP)** stage. This version is laser-focused on providing a **clean, simple, and efficient text reading experience**.

The core idea of this MVP is to give you a dedicated space to import Japanese texts (plain text for now) and read them in a distraction-free environment. We've intentionally kept it lean, allowing you to leverage your favorite browser-based dictionary extensions (like Yomichan/Rikaichan) for vocabulary lookups, which many dedicated learners already use and love.

While the backend infrastructure supports user accounts and text storage, the primary user-facing experience in this MVP is centered on straightforward text import and reading.

## 🚀 Core MVP Features

- **👤 User Accounts:** Secure registration and login to keep your reading materials private and accessible.
- **➕ Simple Text Import:** Easily paste or type in any Japanese text you want to read.
- **📖 Clean Reading Interface:** A minimalist, aesthetically pleasing environment designed for optimal Japanese text legibility.
    - Focus on clear font rendering.
    - Uncluttered UI to maximize immersion.
- **🎨 Basic Customization:**
    - Adjust text size for comfortable reading.
    - Switch between Light and Dark themes.
- **🧩 Browser Extension Ready:** Designed to work smoothly with popular pop-up dictionary browser extensions. Mikiri provides the text; your extension provides the instant lookups.
- **📚 Personal Text Library:** Save your imported texts with titles to build your own reading collection.
    - View your saved texts in an organized grid layout on your dashboard.
    - Easily access or delete texts.

## 🛠️ Tech Stack

[![Core Technologies](https://skillicons.dev/icons?i=react,ts,nodejs,tailwind,vite,mongodb,express)](https://skillicons.dev)

Mikiri leverages a modern and robust technology stack:

- **Frontend:**
    - **React 19 & TypeScript:** For a dynamic and type-safe user interface.
    - **Vite:** As the build tool and development server.
    - **Tailwind CSS (v4):** For utility-first styling.
- **Backend:**
    - **Node.js & Express.js with TypeScript:** Powering the server-side logic.
    - **MongoDB:** For data persistence, managed with Mongoose and hosted on MongoDB Atlas.
    - **Authentication:** Secured using JWT and Bcrypt for password hashing.
- **Development & CI/CD:**
    - **DeepSource:** For continuous integration and advanced static code analysis, helping maintain code quality and security.

## 🔮 Future Vision: Your Personal Content Hub & Learning Toolkit

While the MVP is a simple reader, the long-term vision for Mikiri is ambitious, drawing inspiration from the idea of a **"Facilitator of User-Curated Content"**. We want to empower you to bring _your own_ content, in various formats, and use Mikiri's powerful tools to enhance your learning.

Future enhancements we're excited about include:

- **📚 ePub Importer:** Upload and read your legally acquired Japanese ePubs (Light Novels, books, etc.) directly within Mikiri, with chapter navigation and a great reading experience.
- **🧠 Known Words & Coverage Analysis:**
    - Allow users to import their list of known words (e.g., from a JSON file).
    - Analyze user-uploaded texts to calculate vocabulary coverage ("i+1" insights).
    - Visually highlight unknown words within the reader.
    - Recommend texts from the user's _own library_ that are at their optimal learning level.
- **🔗 Enhanced Content Integration:**
    - RSS Feed aggregation for news and blogs.
    - "Read-it-later" style functionality for web articles (respecting site TOS).
- **✍️ Annotation & Note-Taking Tools:** Directly within your texts.
- **🎧 Audio Integration:** Options for Text-to-Speech or even syncing user-provided audio with texts.

The core principle will always be **user agency and privacy**. Mikiri will provide the tools; _you_ provide the content you have the right to use.

## 🏁 Getting Started

To get Mikiri up and running on your local machine, follow these steps:

**Prerequisites:**

- Node.js (v18 or later recommended)
- npm (comes with Node.js)
- Git

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/mph7/mikiri.git
    cd mikiri
    ```

2.  **Set up the Backend:**

    ```bash
    cd backend
    npm install
    # Set up your .env file with DB_USERNAME, DB_PASSWORD, JWT_SECRET
    npm start
    ```

    The backend server will start, typically on port 4000.

3.  **Frontend:**
    ```bash
    cd frontend
    npm install
    npm run dev
    ```
    The frontend development server will start, usually on port 5173.

Let's make Japanese reading more accessible and enjoyable, together!
