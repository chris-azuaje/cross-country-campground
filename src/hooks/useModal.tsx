import { useState } from 'react';

export default function useModal() {
  const [isOpen, setisOpen] = useState(false);
  const [isRulesOpen, setRulesOpen] = useState(false);
  const [isRatesOpen, setRatesOpen] = useState(false);
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const [isGalleryOpen, setGalleryOpen] = useState(false);
  const [isSuccessOpen, setSuccessOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };

  const toggleRules = () => {
    setRulesOpen(!isRulesOpen);
  };

  const toggleRates = () => {
    setRatesOpen(!isRatesOpen);
  };

  const toggleCalendar = () => {
    setCalendarOpen(!isCalendarOpen);
  };

  const toggleGallery = () => {
    setGalleryOpen(!isGalleryOpen);
  };

  const toggleSuccess = () => {
    setSuccessOpen(!isSuccessOpen);
  };

  return {
    isOpen,
    toggle,
    isRulesOpen,
    isRatesOpen,
    isCalendarOpen,
    isGalleryOpen,
    isSuccessOpen,
    toggleRules,
    toggleRates,
    toggleCalendar,
    toggleGallery,
    toggleSuccess,
  };
}
