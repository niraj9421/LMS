import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import SearchBar from '../../components/students/SearchBar'
import { useParams, useNavigate } from 'react-router-dom'
import CourseCard from '../../components/students/CourseCard'
import { assets } from '../../assets/assets'
import Footer from '../../components/students/Footer'



function CoursesList() {
  const { allCourses } = useContext(AppContext)
  const navigate = useNavigate()
  const { input } = useParams()
  const [filteredCourses, setFilteredCourses] = useState([])

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempCourses = allCourses.slice()

      input
        ? setFilteredCourses(
            tempCourses.filter(course =>
              course.courseTitle.toLowerCase().includes(input.toLowerCase())
            )
          )
        : setFilteredCourses(tempCourses)
    }
  }, [allCourses, input])

  return (
    <>
      <div className='w-full pt-20 text-left'>
        <div className='max-w-7xl mx-auto px-4'>
          {/* Header */}
          <div className='flex md:flex-row flex-col gap-6 items-start justify-between w-full'>
            <div>
              <h1 className='text-4xl font-semibold text-gray-800'>Course List</h1>
              <p className='text-gray-500'>
                <span
                  className='text-blue-600 cursor-pointer'
                  onClick={() => navigate('/')}
                >
                  Home
                </span>{' '}
                / <span>Course List</span>
              </p>
            </div>
            <SearchBar data={input} />
          </div>

          {input && (
            <div className='inline-flex items-center gap-4 px-4 py-2 border mt-8 mb-8 text-gray-600'>
              <p>{input}</p>
              <img
                src={assets.cross_icon}
                alt=""
                className='cursor-pointer'
                onClick={() => navigate('/course-list')}
              />
            </div>
          )}

          {/* Horizontal Snap Scroll */}
          <div className='mt-16 overflow-x-auto snap-x snap-mandatory scroll-smooth'>
            <div className='flex gap-6'>
              {filteredCourses.map((course, index) => (
                <div
                  key={index}
                  className='flex-shrink-0 w-[300px] snap-start'
                >
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

     <Footer/>
    </>
  )
}

export default CoursesList
