import React from 'react'
import vg from "../assets/2.webp";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
  } from "react-icons/ai";

const Home = () => {
  return (
    <>
        <div className='home'>
            <main>
                <h1>SolutionLab</h1>
                <p>Solution to all your problems</p>
            </main>
        </div>
        <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the Software problems you face
            every day. We are leading Software Solution Hub whose aim is to make
            Your Life easier.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
          Welcome to our software solution hub! We are a cutting-edge technology company dedicated to providing innovative software solutions that empower businesses to thrive in the digital age. With a team of skilled engineers, designers, and strategists, we deliver customized software products and services tailored to meet the unique needs of our clients.

At our core, we are problem solvers. We understand that every business faces unique challenges, and we are passionate about finding the most efficient and effective solutions to address them. Our expertise spans across a wide range of industries, including finance, healthcare, e-commerce, logistics, and more.

What sets us apart is our commitment to quality and excellence. We believe that great software can transform businesses, streamline operations, and unlock new opportunities for growth. That's why we follow industry best practices, leverage the latest technologies, and adopt an agile approach to development. We work closely with our clients to understand their vision, goals, and requirements, and then we translate that into innovative, user-friendly, and scalable software solutions.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Home