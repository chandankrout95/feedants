Getting Started

1. Clone the repository

git clone https://github.com/chandankrout95/feedants.git
cd feedants

2. Backend Setup

cd backend
npm install
npm run dev

The backend will start on:

http://localhost:5000

3. Mobile App Setup

Open a new terminal:

cd FeedantsMobile
npm install

Start Metro:

npm start

Run the Android application:

npx react-native run-android

Run the iOS application:

npx react-native run-ios

use /gradle-8.8-bin.zip

4. Environment Variables

Create a .env file in the required folder and add your environment variables.

Example:

PORT=5000
MONGO_URI=your_mongodb_connection_string


Never commit .env files or sensitive credentials to GitHub.