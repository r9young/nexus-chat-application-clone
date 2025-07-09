'use client'

// External Libraries
import clsx from 'clsx';
import { useSession } from 'next-auth/react';
import { format } from 'date-fns';
import Image from 'next/image';
import { useState } from 'react';


// Custom Component
import Avatar from '../../../(site)/components/Avatar'
import { FullMessageType } from '@/app/types';
import ImageModal from './ImageModal';