import { fetchNotes } from '@/lib/api';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import NotesClient from './Notes.client';
interface NotesPageProps {
  params: Promise<{ slug: string[] }>;
}
export default async function NotesPage({ params }: NotesPageProps) {
  const { slug } = await params;
  const tag = slug?.[0] ?? 'all';
 
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['notes', { query: '', page: 1, tag: tag ?? 'all' }],
    queryFn: () => fetchNotes('', 1, 'all'),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag = {tag}/>
    </HydrationBoundary>
  );
}
