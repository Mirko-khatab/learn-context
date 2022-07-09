import React from 'react'

const test = () => {
  return (
    <>
      
      <main className="l-main bd-container">
        <div className="resume" id="area-cv">
          <div className="resume__left">
            <section className="home" id="home">
              <div className="home_containter section bd-grid">
                <div className="home_data bd-grid">
                  <img
                    src="assets/img/muhammad.jpg"
                    alt=""
                    className="home_img center"
                  />
                  <h1 className="home_title">
                    MUHAMMAD <b>ESSA</b>
                  </h1>
                  <h3 className="home_profession">Web Developer</h3>

                  <div>
                    <a
                      download=""
                      href="assets/pdf/Muhammadessa-resume.pdf"
                      className="home_button-movil"
                    >
                      Download
                    </a>
                  </div>
                </div>
                <div className="home_address bd-grid">
                  <span className="home_information">Peshawar, Pakistan</span>
                  <span className="home_information">
                    iMuhammadessa@gmail.com
                  </span>
                  <span className="home_information">+92 (345) 9257074</span>
                </div>
              </div>

              <i
                className="bx bx-moon change-theme"
                title="Theme"
                id="theme-button"
              ></i>
            </section>

            <section className="social section">
              <h2 className="section-title">SOCIAL</h2>
              <div className="social_container bd-grid">
                <a
                  href="https://www.linkedin.com/in/imuhammadessa/"
                  target="_blank"
                  className="social_link"
                >
                  <i className="bx bxl-linkedin-square social_icon"></i>{' '}
                  @imuhammadessa
                </a>
                <a
                  href="https://github.com/imuhammadessa/"
                  target="_blank"
                  className="social_link"
                >
                  <i className="bx bxl-github social_icon"></i> @imuhammadessa
                </a>
                <a
                  href="https://twitter.com/imuhammadessa"
                  target="_blank"
                  className="social_link"
                >
                  <i className="bx bxl-twitter social_icon"></i> @imuhammadessa
                </a>
              </div>
            </section>

            <section className="profile section" id="profile">
              <h2 className="section-title">Profile</h2>
              <p className="profile_description">
                I am a person, very responsible for work during working hours
                assigned by a company. I am very goal oriented, result driven,
                detailed and focused person. I have several years of experiences
                & achievements in this field.
              </p>
            </section>

            <section className="education section" id="education">
              <h2 className="section-title">Education</h2>
              <div className="education_container bd-grid">
                <div className="education_content">
                  <div className="education_time">
                    <span className="education_rounder"></span>
                    <span className="education_line"></span>
                  </div>
                  <div className="education_data bd-grid">
                    <h3 className="education_title">
                      Bachelors Computer Science
                    </h3>
                    <span className="education_studies">
                      Islamia College University, Peshawar
                    </span>
                    <span className="education_year">2016 - 2020</span>
                  </div>
                </div>
                <div className="education_content">
                  <div className="education_time">
                    <span className="education_rounder"></span>
                    <span className="education_line"></span>
                  </div>
                  <div className="education_data bd-grid">
                    <h3 className="education_title">FACULTY OF SCIENCE</h3>
                    <span className="education_studies">
                      Leeds College Peshawar
                    </span>
                    <span className="education_year">2014 - 2016</span>
                  </div>
                </div>
                <div className="education_content">
                  <div className="education_time">
                    <span className="education_rounder"></span>
                  </div>
                  <div className="education_data bd-grid">
                    <h3 className="education_title">MATRICULATION</h3>
                    <span className="education_studies">
                      University Public School, Peshawar
                    </span>
                    <span className="education_year">2012 - 2014</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="skills section" id="skills">
              <h2 className="section-title">Skills</h2>
              <div className="skills_content bd-grid">
                <ul className="skills_data">
                  <li className="skills_name">
                    <span className="skills_circle"></span> HTML
                  </li>
                  <li className="skills_name">
                    <span className="skills_circle"></span> CSS
                  </li>
                  <li className="skills_name">
                    <span className="skills_circle"></span> BOOTSTRAP
                  </li>
                  <li className="skills_name">
                    <span className="skills_circle"></span> JAVASCRIPT
                  </li>
                </ul>
                <ul className="skills_data">
                  <li className="skills_name">
                    <span className="skills_circle"></span>PHP
                  </li>
                  <li className="skills_name">
                    <span className="skills_circle"></span>MYSQL
                  </li>
                  <li className="skills_name">
                    <span className="skills_circle"></span>LARAVEL
                  </li>
                  <li className="skills_name">
                    <span className="skills_circle"></span>GIT
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <div className="resume__right">
            <section className="experience section" id="experience">
              <h2 className="section-title">Experience</h2>
              <div className="experience_container bd-grid">
                <div className="experience_content">
                  <div className="experience_time">
                    <span className="experience_rounder"></span>
                    <span className="experience_line"></span>
                  </div>
                  <div className="experience_data bd-grid">
                    <h3 className="experience_title">WEB DEVELOPER</h3>
                    <span className="experience_company">
                      April 2021 - Till date |{' '}
                      <a href="https://itartificer.com/">IT Artificer</a>{' '}
                    </span>
                    <p className="experience_description">
                      After getting some experience, I hired as{' '}
                      <b>Jr. Web Developer</b> at{' '}
                      <a href="https://itartificer.com/">IT Artificer</a> in
                      April 2021. ITA serving its Services all over the world
                      especially in middle-east. ITA mainly focusing on
                      delivering high quality software solutions which enable
                      customers to achieve their critical IT objectives.
                    </p>
                  </div>
                </div>
                <div className="experience_content">
                  <div className="experience_time">
                    <span className="experience_rounder"></span>
                  </div>
                  <div className="experience_data bd-grid">
                    <h3 className="experience_title">FRONTEND DEVELOPER</h3>
                    <span className="experience_company">
                      Nov 2020 - Dec 2020 |{' '}
                      <a href="https://interns.pk/">Interns Pakistan</a>
                    </span>
                    <p className="experience_description">
                      As soon I graduated I selected as{' '}
                      <b>Frontend Developer</b> at{' '}
                      <a href="https://interns.pk/">Interns Pakistan</a> in
                      November 2020. Interns Pakistan is a company who helping
                      fresh graduates remotely by providing an internships. I
                      awarded the best intern award by Interns Pakistan.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="certificate section" id="certificate">
              <h2 className="section-title">Certificates</h2>
              <div className="certificate_container bd-grid">
                <div className="certificate_content">
                  <h3 className="certificate_title">
                    NodeJs Backend-Development - 2021
                  </h3>
                  <p className="certificate_description">
                    I had done detailed course with certification under
                    Khyber-Pakhtunkhwa initiative in collaboration with
                    Cybervision, KPYEP & UNDP
                  </p>
                </div>
                <div className="certificate_content">
                  <h3 className="certificate_title">
                    Microsoft Student Partner - 2020
                  </h3>
                  <p className="certificate_description">
                    I worked as an active ambassador for Microsoft as Microsoft
                    Student Partner - Pakistan for one of their great event as
                    Microfest++
                  </p>
                </div>
                <div className="certificate_content">
                  <h3 className="certificate_title">
                    WordPress Development - 2019
                  </h3>
                  <p className="certificate_description">
                    I had done detailed course with certification under Virtual
                    University initiative in collaboration with Ministry of
                    Information Technology Punjab, Ignite & DigiSkills.pk
                  </p>
                </div>
                <div className="certificate_content">
                  <h3 className="certificate_title">Web Development - 2017 </h3>
                  <p className="certificate_description">
                    I had done detailed course with certification at The
                    Mentors, Pakistan a Software House. I learnt how web
                    applications works, developing software from scratch and
                    testing it.
                  </p>
                </div>
              </div>
            </section>

            <section className="references section" id="references">
              <h2 className="section-title">References</h2>
              <div className="references_container bd-grid">
                <div className="references_content bd-grid">
                  <span className="references_subtitle">CEO IT-Artificer</span>
                  <h3 className="references_title">Mr. Haider Ali</h3>
                  <ul className="references_contact">
                    <li>Phone: +92-333-9296314</li>
                    <li>Email: thehaider@yahoo.com</li>
                  </ul>
                </div>
                <div className="references_content bd-grid">
                  <span className="references_subtitle">Professor</span>
                  <h3 className="references_title">Dr. Irshad Ahmad</h3>
                  <ul className="references_contact">
                    <li>Phone: 091-9222258</li>
                    <li>Email: Irshad.ahmad@icp.edu.pk</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="languages section">
              <h2 className="section-title">Languages</h2>
              <div className="languages_container">
                <ul className="languages_content bd-grid">
                  <li className="languages_name">
                    <span className="languages_circle"></span> English
                  </li>
                  <li className="languages_name">
                    <span className="languages_circle"></span> Urdu
                  </li>
                  <li className="languages_name">
                    <span className="languages_circle"></span> Pashto
                  </li>
                </ul>
              </div>
            </section>

            <section className="interests section">
              <h2 className="section-title">Interests</h2>
              <div className="interests_container bd-grid">
                <div className="interests_content">
                  <i className="bx bx-code-alt interests_icon"></i>
                  <span className="interests_name">Coding</span>
                </div>
                <div className="interests_content">
                  <i className="bx bxs-coffee-togo interests_icon"></i>
                  <span className="interests_name">Coffee</span>
                </div>
                <div className="interests_content">
                  <i className="bx bxs-plane-alt interests_icon"></i>
                  <span className="interests_name">Traveling</span>
                </div>
                <div className="interests_content">
                  <i className="bx bxs-camera interests_icon "></i>
                  <span className="interests_name">Photography</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}

export default test
