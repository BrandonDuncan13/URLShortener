'use client';

import React, { useState } from 'react';
import ShortenForm from './ShortenForm';
import UrlList from './UrlList';

export default function UrlShortenerContainer() {
  const [refreshKey, setRefreshKey] = useState(0);

  // Key that causes UrlList to refresh on update
  const handleUrlShortened = () => {
    setRefreshKey((prev) => prev + 1);
  };

  console.log('handleUrlShortened:', handleUrlShortened);

  return (
    <div>
      <ShortenForm handleUrlShortened={handleUrlShortened} />
      <UrlList key={refreshKey} />
    </div>
  );
}
