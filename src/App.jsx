
import Layout from "./Layout/Layout.jsx";
import HomePage from "./HomePAGE/HomePage.jsx";
import { Route, Routes} from "react-router-dom";
import Blogpage from "./Component/Blogpage.jsx";
import View from "./Component/View.jsx";
import {useEffect, useState} from "react";
import CourseItems from "./Component/CourseItems.jsx";



function App() {
    const [name , setName] = useState("ویدئوهای آموزشی")
    useEffect(() => {
        setName("ویدئوهای آموزشی")
    },[])
    return (
        <>
            <Layout name={name} setName={setName}>
               <Routes>
                   <Route path="/" element={<HomePage/>}/>
                   <Route path="/Blog/:id" element={<Blogpage/>}/>
                   <Route path="/Blog/test" element={<View setName={setName} />}/>
                   <Route path="/Blog/Course" element={<CourseItems/>}/>
                   <Route path="*" element={<HomePage/>}/>
               </Routes>
            </Layout>

        </>
    )
}

export default App
