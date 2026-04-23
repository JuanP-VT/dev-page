import { redirect } from 'next/navigation';

export default function NotFound() {
  // Automatically bounce any 404 request back to the homepage
  redirect('/');
}