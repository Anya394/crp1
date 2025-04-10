import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';

export const DatePickerMantine = () => {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <DatePickerInput
      label="Выберите дату"
      value={value}
      onChange={setValue}
    />
  );
}