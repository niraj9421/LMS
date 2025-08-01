import React from 'react'
import { dummyTestimonial, assets } from '../../assets/assets'

function TestimonialSection() {
  return (
    <div className='pb-14 px-8 md:px-0'>
      <h2 className='text-3xl font-medium text-gray-800'>
        What our students say
      </h2>
      <p className='md:text-base text-gray-500 mt-3'>
        Hear from our satisfied learners who have transformed their skills and careers with our courses.
      </p>

      <div className='flex gap-6 overflow-x-auto mt-8 pb-4'>
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className='w-80 flex-shrink-0 text-sm text-left border border-gray-500/30 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden'
          >
            <div className='flex items-center gap-4 px-5 py-4 bg-gray-500/10'>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className='h-12 w-12 rounded-full object-cover'
              />
              <div>
                <h1 className='text-lg font-medium text-gray-800'>
                  {testimonial.name}
                </h1>
                <p className='text-gray-800/80'>{testimonial.role}</p>
              </div>
            </div>

            <div className='p-5'>
              <div className='flex gap-0.5'>
                {[...Array(5)].map((_, i) => (
                  <img
                    className='h-5'
                    key={i}
                    src={
                      i < Math.floor(testimonial.rating)
                        ? assets.star
                        : assets.star_blank
                    }
                    alt='star'
                  />
                ))}
              </div>
              <p className='text-gray-500 mt-5'>
                {testimonial.feedback}
              </p>
            </div>
            <a href="#" className='text-blue-500 underline px-5  '>Read more</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TestimonialSection
