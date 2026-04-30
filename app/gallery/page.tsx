import type { Metadata } from 'next';
import ScrollImageGallery from '@/components/ScrollImageGallery';

export const metadata: Metadata = {
  title: 'Gallery — Coraly Space',
  description: 'Scroll-driven showcases — Creative community & curation.',
};

export default function GalleryPage() {
  return <ScrollImageGallery />;
}
