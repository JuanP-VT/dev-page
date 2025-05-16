'use client';
import MobileDrawer from '@/components/composed/dialogs/MobileDrawer';
import NavBar from '@/components/composed/NavBar';
import Terminal from '@/components/composed/Terminal';

export default function Page() {
  return (
    <div className="relative">
      <MobileDrawer />
      <div className="px-4 py-8">
        <NavBar />
        <Terminal />
      </div>
    </div>
  );
}
