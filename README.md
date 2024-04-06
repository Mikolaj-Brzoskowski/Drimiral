# Drimiral

The **Drimiral** is a mobile application built using the React Native framework. It allows users to create and manage notes related to their dreams. Whether you want to jot down a vivid dream, analyze recurring themes, or simply keep track of your subconscious adventures, this app has you covered.

## Features

1. **Note Creation:** Easily create new dream notes with a title, description, and any relevant details.
2. **Categorization:** Organize your dream notes into custom categories or tags. Group similar dreams together for better management and quick retrieval.
3. **Guides and Tips:** Access helpful articles and tips on improving sleep quality, enhancing dream recall, and understanding dream symbolism.
4. **Embemed playlists with sleep music**
5. **Dark Mode:** Dark mode UI for comfortable nighttime note-taking and reduced eye strain.
6. **Automatic backup to Google account** 
7. **Optional Sleep Routine Survey:** Participate in an optional survey to share details about your daily sleep habits. This data can enhance your dream analysis.

## Getting Started

1. **Prerequisites:**
    - Make sure you have Node.js and Yarn Package Manager installed: 
    `npm install --global yarn`.
    - Install Expo CLI globally using the following command: 
    `npm install -g expo-cli`

2. **Clone the Repository:**
    - Clone or download this repository to your local machine: [Drimiral Repository](https://github.com/Mikolaj-Brzoskowski/Drimiral).

3. **Install Dependencies:**
    - Open your terminal or command prompt and navigate to the project folder.
    - Install the dependencies provided in [package.json](https://github.com/Mikolaj-Brzoskowski/Drimiral/blob/master/package.json) using `yarn install`.

4. **Run the App using Expo:**
    - Connect a physical device (in debugging mode) or use an emulator (optionaly: use provided by Expo CLI link and app to connect preview).
    - Run `yarn expo start` in your terminal to launch the app.

## Building APK file
**Configure a Profile for APKs:**\
In your project’s root directory, create a file named eas.json (if it doesn’t exist).\
Inside eas.json, add a build profile with the desired properties for generating an APK. For example:

```
{
  "build": {
    "preview": {
      "android": {
        "buildType": "apk"
      }
    }
  }
}
```

You can customize the profile name (e.g., “preview”) as needed.

**Run the Build:**
Open your terminal and execute the following command:\
`npx eas build -p android --profile preview`\
Replace “preview” with the name of your chosen profile.

**Install on Emulator or Physical Device:**

*If you’re using an emulator (virtual device):*\
Ensure you have set up an Android Emulator using Android Studio.\
After the build completes, the CLI will prompt you to download and install the APK on the emulator. Confirm by pressing “Y.”\
The installed app will appear on the emulator’s home screen.

*If you’re using a physical device:*\
Once the build is complete, copy the URL to the APK from the build details page or the link provided by EAS.\
Send that URL to your device and open it to download and install the APK.

## Contributors
- Mikołaj Brzoskowski

## Screenshots
<div>
<img align=top src="https://github.com/Mikolaj-Brzoskowski/Drimiral_native/blob/master/assets/screenshots/mainpage.jpg" width=24% height=24%>
<img align=top src="https://github.com/Mikolaj-Brzoskowski/Drimiral_native/blob/master/assets/screenshots/notes.jpg" width=24% height=24%>
<img align=top src="https://github.com/Mikolaj-Brzoskowski/Drimiral_native/blob/master/assets/screenshots/survey.jpg" width=24% height=24%>
<img align=top src="https://github.com/Mikolaj-Brzoskowski/Drimiral_native/blob/master/assets/screenshots/guides.jpg" width=24% height=24%>
</div>