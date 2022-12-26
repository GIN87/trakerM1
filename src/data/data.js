// 날짜 출력을 위한 데이터 ... [{date}, {date}]
// Tickle의 정보를 저장하는 데이터 ... [{date, true}]

import AsyncStorage from "@react-native-async-storage/async-storage";

const curr = new Date;
const currDate = curr.getDate();
const first = curr.getDate() - curr.getDay(); 

const newWeekday = (day) => (
  new Date(curr.setDate(first+day)).toLocaleDateString('en-us', {weekday: 'short'})
);

const newDate = (day) => (
  new Date(curr.setDate(first+day))
);

const DATA = [];
for (let i = 0; i < 7; i++) {
  DATA.push(
    { 
      id: newDate(i).toISOString().split('T')[0],
      day: newWeekday(i),
      date: newDate(i).getDate(),
      isFilled: false,
    }
  );
}

const saveData = async (KEY, toSave) => {
  await AsyncStorage.setItem(KEY, JSON.stringify(toSave));
};

export { currDate, DATA, saveData };