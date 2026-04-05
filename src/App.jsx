import { Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Students from "./pages/Students";
import AddStudentForm from "./components/AddStudentForm";
import Teachers from "./pages/Teachers";
import AddTeacherForm from "./components/AddTeacherForm";
import Classes from "./pages/Classes";
import AddClassForm from "./components/AddClassForm";
import EditStudent from "./pages/EditStudent";
import EditTeacher from "./pages/EditTeacher";
import Posts from "./pages/Posts";
import CreatePost from "./components/CreatePost";
import UserHome from "./pages/user/UserHome";
import StudentsSection from "./pages/user/StudentSection";
import TeachersSection from "./pages/user/TeacherSection";
import FeeStructure from "./pages/user/FeeStructure";
import AboutSchool from "./pages/user/AboutSchool";
import PostDetail from "./pages/user/PostDetail";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/admin" element={<Login />} />
                <Route path="/admin/dashboard" element=
                    {
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    } />

                <Route
                    path="/admin/students"
                    element={
                        <ProtectedRoute>
                            <Students />
                        </ProtectedRoute>
                    }
                />
                <Route path="/admin/add-students" element=
                    {
                        <ProtectedRoute>
                            <AddStudentForm />
                        </ProtectedRoute>}
                />
                <Route
                    path="/admin/teachers"
                    element={
                        <ProtectedRoute>
                            <Teachers />
                        </ProtectedRoute>
                    }
                />
                <Route path="/admin/add-teachers" element=
                    {
                        <ProtectedRoute>
                            <AddTeacherForm />
                        </ProtectedRoute>}
                />
                <Route
                    path="/admin/classes"
                    element={
                        <ProtectedRoute>
                            <Classes />
                        </ProtectedRoute>
                    }
                />
                <Route path="/admin/add-classes" element=
                    {
                        <ProtectedRoute>
                            <AddClassForm />
                        </ProtectedRoute>}
                />
                <Route path="/admin/students/edit/:id" element=
                    {
                        <ProtectedRoute>
                            <EditStudent />
                        </ProtectedRoute>
                    }
                />
                <Route path="/admin/teachers/edit/:id" element=
                    {
                        <ProtectedRoute>
                            <EditTeacher />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/admin/posts"
                    element={
                        <ProtectedRoute>
                            <Posts />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/admin/posts/create"
                    element={
                        <ProtectedRoute>
                            <CreatePost />
                        </ProtectedRoute>
                    }
                />
                <Route path="/" element={<UserHome />} />
                <Route path="/students" element={<StudentsSection />} />
                <Route path="/teachers" element={<TeachersSection />} />
                <Route path="/fee" element={<FeeStructure />} />
                <Route path="/updates" element={<AboutSchool/>} />
                <Route path="/post/:id" element={<PostDetail />} />
                <Route path="*" element={<h1>Page Not Found</h1>} />
            </Routes>
        </HashRouter>
    );
}

export default App;