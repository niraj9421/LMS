import { createContext, useEffect, useState } from 'react';
import { dummyCourses } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import humanizeDuration from 'humanize-duration';
export const AppContext = createContext()
export const AppContextProvider = (props)=>{

    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate()

    const [allCourses, setAllCourses] = useState([])
    const [isEducator, setIsEducator] = useState(true)
    const [enrolledCourses, setEnrolledCourses] = useState([])

    // Fetch all courses from the server
    const fetchAllCourses = async () => {
        
            setAllCourses(dummyCourses);
       
    }
    //function to calculate average rating of course 
    const calculateRating = (course) => {
        if (course.courseRatings.length === 0) 
            {
                return 0;
            }
       let totalRating=0
       course.courseRatings.forEach(rating => {
        totalRating += rating.rating
       })
       return totalRating / course.courseRatings.length
    }

    // function to calculate course chapter time 
    const calculateChapterTime = (chapter) => {
        let time = 0 
        chapter.chapterContent.map((lecture)=> time += lecture.lectureDuration)
        return humanizeDuration(time * 60 * 1000, {units:["h", "m"]})
        
    }

    // function to calculate the course duration 
    const calculateCourseDuration = (course) => {
        let totalTime = 0
        course.courseContent.map((chapter) => chapter.chapterContent.map
            (lecture => totalTime += lecture.lectureDuration))
        return humanizeDuration(totalTime * 60 * 1000, {units:["h", "m"]})
    }

    // function to calculate no of lecture in the course 
    
    const calculateNoOfLectures = (course) => {
        let totalLectures = 0
        course.courseContent.forEach((chapter) => {
            totalLectures += chapter.chapterContent.length
        });
        return totalLectures;
    }
     

    //fetch  user enrolled courses
    const fetchUserEnrolledCourses = async ()=> {
        setEnrolledCourses(dummyCourses)
    }

    useEffect(() => {
        fetchAllCourses();
        fetchUserEnrolledCourses();
    }, []);
    const value = {
        currency,allCourses,navigate , calculateRating , isEducator ,setIsEducator,calculateNoOfLectures,
        calculateCourseDuration,calculateChapterTime, enrolledCourses, fetchUserEnrolledCourses 
        
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>  
    )
}

