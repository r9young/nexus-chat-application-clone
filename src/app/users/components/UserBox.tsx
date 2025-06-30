'use client'

import Avatar from '@/app/components/Avatar'
import LoadingModal from  ""
import { User } from '@prisma/client'
import { data } from 'autoprefixer';
import axios from 'axios'
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react'
// useCallback is a react hook that returns a memorized version of a callback function, 
// meaning it will only re-create the function if its  dependencies change. 


// if the user, or router changes - the useCallback hooker will run the handleClick function?