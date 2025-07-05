import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function SupplementReminderForm() {
  const [supplement, setSupplement] = useState('');
  const [brand, setBrand] = useState('');
  const [time, setTime] = useState('');
  const [reminders, setReminders] = useState([]);

  const handleSubmit = () => {
    if (!supplement || !brand || !time) {
      alert('נא למלא את כל השדות');
      return;
    }

    const newReminder = { supplement, brand, time };
    setReminders([...reminders, newReminder]);

    alert(`נשמרה תזכורת ל־${supplement} (${brand}) בשעה ${time}`);

    setSupplement('');
    setBrand('');
    setTime('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>הוספת תזכורת</Text>

      <Text style={styles.label}>שם חברה:</Text>
      <RNPickerSelect
        onValueChange={(value) => setBrand(value)}
        value={brand}
        placeholder={{ label: "בחר חברה", value: '' }}
        items={[
          { label: 'MyProtein', value: 'MyProtein' },
          { label: 'Optimum Nutrition', value: 'Optimum' },
          { label: 'BSN', value: 'BSN' },
          { label: 'אחר', value: 'אחר' }
        ]}
        style={pickerStyles}
      />

      <Text style={styles.label}>סוג תוסף:</Text>
      <RNPickerSelect
        onValueChange={(value) => setSupplement(value)}
        value={supplement}
        placeholder={{ label: "בחר תוסף", value: '' }}
        items={[
          { label: 'קריאטין', value: 'קריאטין' },
          { label: 'חלבון', value: 'חלבון' },
          { label: 'BCAA', value: 'BCAA' },
          { label: 'אחר', value: 'אחר' }
        ]}
        style={pickerStyles}
      />

      <Text style={styles.label}>שעה:</Text>
      <RNPickerSelect
        onValueChange={(value) => setTime(value)}
        value={time}
        placeholder={{ label: "בחר שעה", value: '' }}
        items={[
          { label: '08:00', value: '08:00' },
          { label: '12:00', value: '12:00' },
          { label: '18:00', value: '18:00' },
          { label: '21:00', value: '21:00' },
        ]}
        style={pickerStyles}
      />

      <View style={{ marginTop: 20 }}>
        <Button title="שמור" onPress={handleSubmit} />
      </View>

      <Text style={{ marginTop: 20, fontWeight: 'bold' }}>📋 התזכורות שלך:</Text>
      {reminders.length === 0 ? (
        <Text>אין תזכורות עדיין.</Text>
      ) : (
        <FlatList
          data={reminders}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <Text>🕒 {item.time} – 💊 {item.supplement} ({item.brand})</Text>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 30
  },
  title: {
    fontSize: 20,
    marginBottom: 10
  },
  label: {
    marginTop: 10,
    fontWeight: 'bold'
  }
});

const pickerStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color: 'black',
    marginTop: 5,
    marginBottom: 10,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color: 'black',
    marginTop: 5,
    marginBottom: 10,
  }
};
