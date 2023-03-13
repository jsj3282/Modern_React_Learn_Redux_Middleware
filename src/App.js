import React from "react";
import CounterContainer from "./containers/CounterContainer";
import PostListContainer from "./containers/PostListContainer";
import {Route, Routes} from "react-router-dom";
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";

function App() {
    return (
        <>
            <CounterContainer/>
            <Routes>
                <Route exact path="/" element={<PostListPage/>}/>
                <Route path=":id" element={<PostPage/>}/>
            </Routes>
        </>
    );
}

export default App;
