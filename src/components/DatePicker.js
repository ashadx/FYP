import React, {useState} from 'react';
import {Button} from 'react-native';
import DatePicker from 'react-native-date-picker';

const DP = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        mode="date"
        textColor="#0F8F9F"
        locale="en"
        androidVariant="nativeAndroid"
        onConfirm={date => {
          setOpen(false);
          setDate(date);
          console.log(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default DP;
