import { useState } from 'react';
import { api } from '~/utils/api';

export default function useSearchOffers() {
  const [value, setValue] = useState('');

  const { data, isLoading } = api.infoJobs.getOfferByCategory.useQuery({
    q: value,
    maxResults: 5,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
