Netflix Clone
A functional clone of Netflix with movie browsing, trailers, and user authentication.

![alt text](<src/Assets/Screenshot 2025-04-21 154900.png>)


✨ Key Features
🎬 Browse Movies/TV Shows – Fetches trending, top-rated, and genre-specific content from TMDB API.



🔥 Trailer Integration – Watch trailers via YouTube embed.


📱 Responsive Design – Works on mobile, tablet, and desktop.

🛠 Tech Stack
Frontend: React.js, Redux (state management), TailwindCSS



API: The Movie Database (TMDB)

Deployment: Vercel/Netlify

🚀 Quick Start
Prerequisites
Node.js (v16+)

TMDB API key (Get it here)



Installation
Clone the repo:

bash
git clone https://github.com/tdan19/Netflix_Clone.git
cd Netflix_Clone
Install dependencies:

bash
npm install
Set up environment variables:
Create a .env file in the root directory:

env
REACT_APP_TMDB_API_KEY=your_tmdb_api_key
Run the app:

bash
npm start
📂 Project Structure
plaintext
src/
├── components/    # Reusable UI components (Banner, Row, Navbar)
├── hooks/         # Custom hooks (e.g., useFetchMovies)
├── pages/         # Main views (Home, Login, Profile)
├── utils/         # Helper functions & API requests
├── App.js         # Root component

🔧 Troubleshooting
API Errors: Ensure your TMDB API key is valid and quotas aren’t exceeded.

Firebase Auth: Enable Email/Password & Google auth in Firebase Console.

CORS Issues: Use a local proxy or configure TMDB API permissions.

📜 License
This project is licensed under the MIT License. See LICENSE for details.

Note: This is a demo project for educational purposes only. Not affiliated with Netflix.
