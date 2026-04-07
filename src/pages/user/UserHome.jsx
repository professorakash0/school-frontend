import React from "react";

import Navbar from "../../components/user components/Navbar";
import Hero from "../../components/user components/Hero";
import { Footer } from "../../components/user components/Footer";
import AboutSchool from "./AboutSchool";
import StudentsSection from "./StudentSection";
import TeachersSection from "./TeacherSection";
import FeeStructure from "./FeeStructure";
import PostsSection from "./PostingSection";

const UserHome = () => {
  return (
    <div id="home" className="min-h-screen bg-[#f5f7fb] pt-16">
      <Navbar />
      <Hero />
      <AboutSchool />
      <StudentsSection />
      <TeachersSection />
      <FeeStructure />
      <PostsSection />
      <Footer />
    </div>
  );
}

export default UserHome