import React, {useState} from 'react';
import {Button} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {IconButton} from 'react-native-paper';

const DateTimePicker = ({mode, minDate, icon, onChange}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const handleChange = date => {
    setOpen(false);
    setDate(date);
    if (onChange) {
      onChange(date);
    }
  };

  return (
    <>
      <IconButton
        icon={icon || 'calendar-edit'}
        iconColor="#EFEFEF"
        size={30}
        onPress={() => setOpen(!open)}
        mode="contained"
        containerColor="#0F8F9F"
      />
      <DatePicker
        modal
        open={open}
        date={date}
        minimumDate={minDate}
        mode={mode || 'date'}
        textColor="#0F8F9F"
        locale="en"
        androidVariant="nativeAndroid"
        onConfirm={handleChange}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default DateTimePicker;
