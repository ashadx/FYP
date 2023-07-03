import React, { useEffect, useContext } from 'react';
import PushNotification from 'react-native-push-notification';
import { AddLabsContext } from '../context/AddLabsContext';

const ReminderScheduler = () => {
    const { prescriptions } = useContext(AddLabsContext);

    useEffect(() => {
        console.log('ReminderScheduler component is running');
        // Check if there are prescriptions data
        if (prescriptions.length === 0) {
            return; // If no data, do not run the scheduling logic
        }

        const parseDate = (dateString) => {
            const [day, month, year] = dateString.split('/');
            const fullYear = `20${year}`; // Assuming the year is in YY format
            return new Date(fullYear, parseInt(month) - 1, parseInt(day)); // Month value is zero-based
        };

        const parseTime = (timeString) => {
            const [time, meridiem] = timeString.split(' ');
            const [hours, minutes] = time.split(':');

            let hours24 = parseInt(hours);
            if (meridiem === 'PM' && hours24 !== 12) {
                hours24 += 12;
            } else if (meridiem === 'AM' && hours24 === 12) {
                hours24 = 0;
            }

            return { hours: hours24, minutes: parseInt(minutes) };
        };

        const createNotificationChannel = () => {
            PushNotification.createChannel({
                channelId: '123',
                channelName: 'Medicine notification',
                channelDescription: 'buss notification k liye use kar rhy',
                soundName: 'default',
                importance: 4,
                vibrate: true,
            });
        };

        const scheduleReminder = (startingDate, endingDate, medicineTime, medicineName) => {
            const startingDateTime = parseDate(startingDate);
            const endingDateTime = parseDate(endingDate);
            const { hours, minutes } = parseTime(medicineTime);

            const endingTime = endingDateTime.getTime();
            let reminderDateTime = new Date(startingDateTime);

            reminderDateTime.setHours(hours - 19, minutes, 0, 0);

            while (reminderDateTime.getTime() <= endingTime) {
                if (reminderDateTime.getTime() > new Date().getTime()) {
                    const reminderID = `reminder-${startingDate}-${medicineTime}`;
                    PushNotification.localNotificationSchedule({
                        /* Android Only Properties */
                        channelId: '123', // Set the channel ID here
                        id: reminderID,
                        title: `Medicine Reminder: ${medicineName}`,
                        message: `It's time to take your medicine ${medicineName}.`,
                        date: reminderDateTime,
                    });
                    console.log('Reminder set:', reminderDateTime);
                }

                // Increment reminderDateTime by one day
                reminderDateTime.setDate(reminderDateTime.getDate() + 1);
            }
        };

        createNotificationChannel();

        prescriptions.forEach((prescription) => {
            const startingDate = prescription.start; // Assuming the starting date is a string
            const endingDate = prescription.end; // Assuming the ending date is a string
            const medicineTime = prescription.time; // Assuming the time is in the format "hh:mm AM/PM"
            const medicineName = prescription.medName;

            scheduleReminder(startingDate, endingDate, medicineTime, medicineName);
        });
    }, [prescriptions]);

    return null;
};

export default ReminderScheduler;
