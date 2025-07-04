import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import SearchBar from '../../components/students/SearchBar'
import { useParams } from 'react-router-dom'
import CourseCard from '../../components/students/CourseCard'

function CoursesList() {
  const { navigate, allCourses } = useContext(AppContext)
  const { input } = useParams()
  const [filteredCourses, setFilteredCourses] = useState([])
  
  useEffect(() => {
    if (input) {
      const filtered = allCourses.filter(course =>
        course.courseTitle.toLowerCase().includes(input.toLowerCase()) ||
        course.educator.name.toLowerCase().includes(input.toLowerCase())
      )
      setFilteredCourses(filtered)
    } else {
      setFilteredCourses(allCourses)
    }
  }, [input, allCourses])
  
  return (
    <div className='w-full pt-20 text-left bg-gray-50 min-h-screen'>
      <div className='max-w-7xl mx-auto px-4 pb-16'>
        {/* Header */}
        <div className='flex md:flex-row flex-col gap-6 items-start justify-between w-full mb-8'>
          <div>
            <h1 className='text-4xl font-bold text-gray-900 mb-2'>Course List</h1>
            <nav className='text-gray-600'>
              <span
                className='text-blue-600 cursor-pointer hover:text-blue-800 transition-colors'
                onClick={() => navigate('/')}
              >
                Home
              </span>{' '}
              <span className='mx-2'>/</span>
              <span>Course List</span>
            </nav>
          </div>
          <div className='w-full md:w-auto'>
            <SearchBar data={input} />
          </div>
        </div>
        
        {/* Results Count */}
        {filteredCourses.length > 0 && (
          <div className='mb-6'>
            <p className='text-gray-600'>
              Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
              {input && ` for "${input}"`}
            </p>
          </div>
        )}
        
        {/* Grid Layout - Changed to match CoursesSection 4x4 grid */}
        <div className='grid grid-cols-[repeat(4,minmax(0,1fr))] gap-6'>
          {filteredCourses.map((course, index) => (
            <div key={course._id || index} className='w-full'>
              <CourseCard course={course} />
            </div>
          ))}
        </div>
        
        {/* No Results Message */}
        {filteredCourses.length === 0 && (
          <div className='mt-16 text-center py-12'>
            <div className='max-w-md mx-auto'>
              <div className='mb-4'>
                <svg className='w-16 h-16 text-gray-400 mx-auto' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                </svg>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>No courses found</h3>
              <p className='text-gray-500 mb-6'>
                {input 
                  ? `We couldn't find any courses matching "${input}". Try searching with different keywords.`
                  : 'No courses are available at the moment.'
                }
              </p>
              {input && (
                <button
                  onClick={() => navigate('/courses')}
                  className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors'
                >
                  Browse All Courses
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CoursesList