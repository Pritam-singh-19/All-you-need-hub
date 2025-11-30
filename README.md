# 🎬 MovieHub - Movie Browsing SPA

A beautiful, fully-featured Single Page Application for browsing and discovering movies using The Movie Database (TMDB) API.

## ✨ Features

- 🏠 **Home Page**: Welcoming landing page with animated hero section
- 🎥 **Movies List**: Browse popular movies with search and genre filters
- 📄 **Movie Details**: Comprehensive movie information with trailers, cast, and similar movies
- 🔍 **Search**: Find any movie instantly
- 🎯 **Genre Filters**: Filter movies by category
- 🌙 **Dark Mode**: Eye-friendly dark theme with localStorage persistence
- 📱 **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop
- ⚡ **Fast & Smooth**: Optimized performance with beautiful animations

## 🚀 Getting Started with MovieHub

## 🛠️ Technologies Used

- **React 18**: Modern React with Hooks
- **React Router v7**: Client-side routing
- **Axios**: HTTP requests
- **TMDB API**: Movie database
- **CSS3**: Custom styling with animations

## 📁 Project Structure

```
src/
├── components/      # Reusable UI components
├── pages/          # Page components (Home, MoviesList, MovieDetail)
├── services/       # API service layer
├── context/        # React Context (Theme)
├── App.js          # Main app component
└── index.js        # Entry point
```

## 🔑 API Key Setup

The app uses TMDB API. To use your own API key:

1. Get a free API key from [TMDB](https://www.themoviedb.org/settings/api)
2. Update `src/services/api.js`:
```javascript
const API_KEY = 'YOUR_API_KEY_HERE';
```

## 📜 Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## 🎯 Assignment Requirements Met

✅ Single Page Application with routing  
✅ External API integration (TMDB)  
✅ Multiple routes (Home, List, Detail)  
✅ Reusable components (Navbar, Card, Loader, etc.)  
✅ Loading and error states  
✅ Clean, responsive UI/UX  
✅ **Bonus Features**: Search, Filters, Dark Mode, Animations  

## 📚 Full Documentation

See [PROJECT_DOCUMENTATION.md](../PROJECT_DOCUMENTATION.md) for comprehensive documentation including:
- Technology rationale and selection
- Complete folder structure explanation
- API integration details
- Routing implementation
- Component architecture
- State management approach
- UI/UX design principles
- Challenges and solutions
- Screenshots and demos

## 🎓 Key Learnings

- React SPA development
- REST API integration
- Client-side routing with React Router
- State management with Hooks and Context API
- Responsive design principles
- Error handling patterns
- Performance optimization

---

**Built with ❤️ using React and TMDB API**
