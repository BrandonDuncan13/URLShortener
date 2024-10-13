'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { CopyIcon, EyeIcon } from 'lucide-react';

type Url = {
    id: string,
    shortCode: string,
    originalUrl: string,
    views: number
}

export default function UrlList() {
    const [urls, setUrls] = useState<Url[]>([]);

    const shortenUrl = (code: string) => 
        `${process.env.NEXT_PUBLIC_BASE_URL}/${code}`;

    const fetchUrls = async () => {
        try {
            const response = await fetch('/api/urls');
            const data = await response.json();
            setUrls(data);
        } catch (error) {
            console.error('Error fetching URLs:', error);
        } finally {

        }
    };

    useEffect(() => {
        fetchUrls();
    }, []);

    return (
        <div>
            <h2 className='text-2xl font-bold mb-2'>Recent URLs</h2>
            <ul className='space-y-2'>
                {urls.map(url => (
                    <li key={url.id} className='flex items-center gap-2 justify-between'>
                        <Link
                            href={`/${url.shortCode}`}
                            target='_blank'
                            className='text-blue-500'
                        >
                            {shortenUrl(url.shortCode)}
                        </Link>

                        <div className='flex items-center gap-3'>
                            <Button
                                variant='ghost'
                                size='icon'
                                className='text-muted-foreground hover:bg-muted'
                            >
                                <CopyIcon className='w-4 h-4' />
                                <span className='sr-only'>Copy URL</span>
                            </Button>
                            <span className='flex items-center gap-2'>
                                <EyeIcon className='h-4 w-4' />
                                {url.views} views
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
