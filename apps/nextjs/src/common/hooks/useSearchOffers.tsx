import { useEffect, useState } from 'react';
import { api } from '~/utils/api';

export default function useSearchOffers() {
  const [value, setValue] = useState('');

  const { data, isLoading } = api.infoJobs.getOfferByCategory.useQuery({
    category: value,
  });

  const handleChange = (event: any) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

  const handleSelect = (suggestion: string) => {
    setValue(suggestion);
  };

  return {
    value,
    handleSelect,
    handleChange,
    data,
    isLoading,
  };
}
