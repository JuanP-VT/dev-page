'use client';
import MobileDrawer from '@/components/composed/dialogs/MobileDrawer';
import NavBar from '@/components/composed/NavBar';

export default function Page() {
  return (
    <div className="relative">
      <MobileDrawer />
      <div className="px-4 py-8">
        <NavBar />
      </div>
    </div>
  );
}
