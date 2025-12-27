'use client';

import { NextStudio } from '../../../../../node_modules/next-sanity/dist/studio';
import config from '../../../../../sanity.config';

export default function Studio() {
  return <NextStudio config={config} />;
}