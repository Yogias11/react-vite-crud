import { Routes, Route } from "react-router-dom"

import Home from "../views/home.jsx"
import PostIndex from "../views/posts/index.jsx"
import PostCreate from "../views/posts/create.jsx"
import PostEdit from "../views/posts/edit.jsx"

function RoutesIndex() {
    return (
        <Routes>

            {/* route "/" */}
            <Route path="/" element={<Home />} />

            {/* route "/posts" */}
            <Route path="/posts" element={<PostIndex />} />

            {/* route "/posts/create" */}
            <Route path="/posts/create" element={<PostCreate />} />

            {/* route "/posts/edit/:id" */}
            <Route path="/posts/edit/:id" element={<PostEdit />} />

        </Routes>
    )
}

export default RoutesIndex