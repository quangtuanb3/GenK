import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
// import './customizeCss.css'
import { Header } from './components/Header'
import { TopSection } from './components/TopSection'
import Home from './features/Home'
import HomePage from './features/Home';
import store from './redux/store';
import { Provider } from 'react-redux';
import { Upload } from './uploadImage/Upload'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from './features/Dashboard';
import { CreatePost } from './features/CreatePost';
import { EditPost } from './features/EditPost'
import PostDetail from './features/PostDetail'




function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/create" element={<CreatePost />} />
          <Route path="/dashboard/edit/:id" element={<EditPost />} />
          <Route path="/post-detail/:titleSlug" element={<PostDetail />} />
        </Routes>
      </BrowserRouter>

    </Provider>
    // <Upload />
  )
}

export default App
