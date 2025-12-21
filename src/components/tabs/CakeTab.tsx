import { useState } from 'react';
import CakeAnimation from '@/components/CakeAnimation';
import GiftModal from '@/components/GiftModal';

const CakeTab = () => {
  const [showGiftModal, setShowGiftModal] = useState(false);

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <CakeAnimation onGiftClick={() => setShowGiftModal(true)} />
      <GiftModal isOpen={showGiftModal} onClose={() => setShowGiftModal(false)} />
    </div>
  );
};

export default CakeTab;
