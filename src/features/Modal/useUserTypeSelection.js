import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { userTypes } from '../../entities/userType';
import {User} from '../../entities/user/model/User'

export function useUserTypeSelection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    containScroll: 'trimSnaps',
    loop: true,
    startIndex: 1, 
  });
  
  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(1);
  const [selectedType, setSelectedType] = useState(userTypes[1]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const newIndex = emblaApi.selectedScrollSnap();
    setActiveIndex(newIndex);
    setSelectedType(userTypes[newIndex]);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, onSelect]);


  const handleSlideClick = useCallback((index) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  }, [emblaApi]);


  const handleConfirmSelection = () => {
    console.log(`Usuário selecionou o tipo: ${selectedType.type}`);
    navigate('/register', { state: { type: selectedType.type } })
     
    // Futuramente, aqui você navegará para a página de registro, passando o 'selectedType.type'
  };

  return { 
    emblaRef, 
    activeIndex, 
    scrollPrev, 
    scrollNext, 
    handleConfirmSelection,
    handleSlideClick
  };
}