# 🎵 Harmonize – A Music Healing Web App

**Harmonize** is a web-based music therapy app designed to promote emotional well-being through personalized music recommendations, guided sound therapy, mood tracking, reflective journaling, and community discussion. Built using **React Native**, **Firebase**, and the **Spotify API**, it brings mental wellness into the digital era—through sound.

---

## 🌟 Features

### 1. 🎧 Personalized Music Recommendations
- Users receive curated therapeutic playlists tailored to their emotions and preferences.
- Powered by the Spotify API and user listening habits.

### 2. 🧘‍♀️ Music Therapy Soundtracks
- Explore a collection of healing sounds and guided therapy tracks.
- Calming audio to assist with stress relief, relaxation, and focus.

### 3. 📊 Mood Tracking via Music
- Track your mood based on the music you listen to.
- Gain insights into how different genres and songs affect your emotions.

### 4. 📝 Music Journaling
- Write down thoughts while listening to music.
- Encourages reflection, mindfulness, and self-awareness.

### 5. 💬 Discussion Forum
- A safe space for users to:
  - Share daily thoughts
  - Engage in healthy debates
  - Like/dislike opinions
  - Connect with other users through meaningful conversations

---

## 🔧 Tech Stack

| Technology        | Purpose                                 |
|------------------|------------------------------------------|
| React Native      | Frontend framework for the web app       |
| Firebase          | Backend & real-time database             |
| Spotify API       | Import user playlists & fetch music data |
| Firebase Auth     | User authentication with Spotify support |

---

## 🔐 Authentication

- Spotify account login is **required** to fetch personalized music.
- Uses OAuth to securely connect Spotify with the app.

---

## 🚀 How to Run the Project

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/harmonize.git
   cd harmonize
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file and add:
   ```env
   SPOTIFY_CLIENT_ID=your_spotify_client_id
   SPOTIFY_REDIRECT_URI=http://localhost:3000/callback
   FIREBASE_API_KEY=your_firebase_key
   ...
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

---

## 📌 Future Improvements

- AI-powered playlist creation based on mood journals
- Integration with wearable devices for real-time mood detection
- Anonymous mode for journaling and forum participation

---

## 👩‍💻 Author

**Iqra Asif Koradia**  
B.Voc in Software Development  
Jai Hind College, Mumbai

---
