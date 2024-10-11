'use client';

import { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

export default function ShortenForm() {
    // state for input value
    const [url, setUrl] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(url);
    }

  return (
    <form onSubmit={handleSubmit} className='mb-4'>
        <div className='space-y-4'>
            <Input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className='h-12'
                type='url'
                placeholder='Enter URL to shorten'
                required
            />
            <Button className='w-full p-2' type='submit'>
                Shorten URL
            </Button>
        </div>
    </form>
  )
}
