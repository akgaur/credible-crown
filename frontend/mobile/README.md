CredibleCrownApps/
│
├── android/                     # Native Android project (Java/Kotlin)
│   ├── app/
│   │   ├── src/
│   │   │   ├── main/
│   │   │   │   ├── java/        # Java/Kotlin source code
│   │   │   │   ├── res/         # Android resources (layouts, drawables, values)
│   │   │   │   └── AndroidManifest.xml
│   │   ├── build.gradle         # App-level Gradle config
│   ├── gradle/                  # Gradle wrapper files
│   ├── build.gradle             # Project-level Gradle config
│   └── settings.gradle
│
├── ios/                         # Native iOS project (Objective-C/Swift)
│   ├── MyApp/
│   │   ├── AppDelegate.mm       # App entry for iOS
│   │   ├── Info.plist           # iOS app config
│   │   └── Supporting/
│   ├── Podfile                  # CocoaPods dependencies
│   └── MyApp.xcodeproj          # Xcode project files
│
├── node_modules/                # Installed dependencies (auto-generated)
│
├── src/                         # Main source code (your app lives here)
│   ├── api/                     # API services & network requests
│   │   └── apiClient.js
│   │
│   ├── assets/                  # Images, fonts, icons
│   │   ├── fonts/
│   │   ├── icons/
│   │   └── images/
│   │
│   ├── components/              # Reusable UI components
│   │   ├── Button.js
│   │   └── Card.js
│   │
│   ├── config/                  # App configuration
│   │   ├── theme.js
│   │   └── env.js
│   │
│   ├── constants/               # Static values, enums
│   │   └── colors.js
│   │
│   ├── hooks/                   # Custom React hooks
│   │   └── useAuth.js
│   │
│   ├── navigation/              # Navigation setup
│   │   ├── AppNavigator.js
│   │   └── RootNavigator.js
│   │
│   ├── screens/                 # Page-level UI (grouped by feature)
│   │   ├── Auth/
│   │   │   ├── LoginScreen.js
│   │   │   └── RegisterScreen.js
│   │   ├── Dashboard/
│   │   │   ├── HomeScreen.js
│   │   │   └── ProfileScreen.js
│   │   └── Settings/
│   │       └── SettingsScreen.js
│   │
│   ├── store/                   # State management
│   │   ├── index.js             # Store setup
│   │   ├── userSlice.js
│   │   └── appSlice.js
│   │
│   ├── styles/                  # Global styles
│   │   └── globalStyles.js
│   │
│   ├── utils/                   # Helper functions
│   │   ├── validators.js
│   │   └── formatDate.js
│   │
│   ├── App.js                   # Root component
│   └── index.js                 # Entry point, registers root component
│
├── .buckconfig                  # Buck build system config (Android)
├── .eslintrc.js                 # ESLint config
├── .gitattributes
├── .gitignore                   # Ignore files for Git
├── app.json                     # App configuration (name, icons, splash)
├── babel.config.js              # Babel transpiler config
├── index.js                     # React Native entry file
├── metro.config.js              # Metro bundler config
├── package.json                 # Dependencies & scripts
├── package-lock.json / yarn.lock
└── README.md
