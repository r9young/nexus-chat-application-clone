'use client'

import { useState, useRef, useEffect } from 'react';
import { FullMessageType } from '@/app/types';
import useConversation from '@/app/hooks/useConversation';
import MessageBox from './MessageBox';
import axios from 'axios';
import { pusherClient } from '@/app/libs/pusher';
import { find } from 'lodash';