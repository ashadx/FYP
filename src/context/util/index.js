import {createThumbnail} from 'react-native-create-thumbnail';

export class GeneralUtil {
  static numberFormatter = number => {
    if (number < 10) {
      return `0${number}`;
    }
    return number;
  };
  static months = month => {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'April',
      'May',
      'June',
      'July',
      'Aug',
      'Sept',
      'Nov',
      'Dec',
    ];
    return months[month];
  };
  static datetimeFormatter = (datetime, modeOnly) => {
    const date = new Date(datetime);
    const currentMonth = this.months(
      date.getMonth() > 9 ? date.getMonth() - 1 : date.getMonth(),
    );
    const currentMonthInNumber =
      date.getMonth() < 10 ? date.getMonth() + 1 : date.getMonth();
    const currentDate = this.numberFormatter(date.getDate());
    const currentYear = date.getFullYear() - 2000;
    let currentHour = this.numberFormatter(date.getHours());
    const currentMinutes = this.numberFormatter(date.getMinutes());
    const currentDayNight = currentHour > 12 && currentHour < 24 ? 'PM' : 'AM';
    currentHour =
      currentHour > 12 && currentHour < 24 ? currentHour - 12 : currentHour;
    return modeOnly === 'date'
      ? `${currentDate}/${this.numberFormatter(
          currentMonthInNumber,
        )}/${currentYear}`
      : modeOnly === 'time'
      ? `${currentHour}:${currentMinutes} ${currentDayNight}`
      : `${currentMonth} ${currentDate}, ${currentYear} at ${currentHour}:${currentMinutes} ${currentDayNight}`;
  };
}
