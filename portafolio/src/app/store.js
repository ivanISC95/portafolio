import { configureStore } from '@reduxjs/toolkit'

import works from '../features/datas/works';
import courses from '../features/datas/courses';
import skills from '../features/datas/skills';

export const store = configureStore({
  reducer: {    
    courses : courses,
    skills : skills,
    works : works
  },
})