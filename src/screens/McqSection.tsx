import {View, Text, FlatList, Button} from 'react-native';
import React, {useState} from 'react';
import { IQuizList, QuizList } from '../components/QuizList';

const McqSection = () => {
  const [mcqData, setMcqData] = useState<IQuizList[]>(QuizList);
const [currentIndex,setCurrentIndex]= useState(0)


const currentQuestion = QuizList[currentIndex];

const handlePreButton =()=>{
setCurrentIndex(currentIndex -1)
}
const handleNextButton = () => {
  setCurrentIndex(currentIndex + 1);
};
 

  return (
    <View style={{flex: 1, margin: 5}}>
      <Text>{currentQuestion.question}</Text>
      <View>
        <Text>A:{currentQuestion.optionA}</Text>
        <Text>B:{currentQuestion.optionB}</Text>
        <Text>C:{currentQuestion.optionC}</Text>
        <Text>D:{currentQuestion.optionD}</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:30}}>
        <Button title="Previous" onPress={handlePreButton} disabled={currentIndex === 0}/>
        <Button title="Next" onPress={handleNextButton} disabled={currentIndex===QuizList.length-1} />
      </View>
    </View>
  );
};

export default McqSection;
