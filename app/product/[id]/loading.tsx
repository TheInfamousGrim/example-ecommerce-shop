import { Spinner } from '@/components/Spinner';

export default function Loading() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <Spinner className='h-20 w-20' />
    </div>
  );
}
