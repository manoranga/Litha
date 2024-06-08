import { useLayoutEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import MealItem from '../components/MealItem';
import NakathItem from '../components/NakathItem';
import { MEALS, CATEGORIES, NAKATH_LIST } from '../data/dummy-data';

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = NAKATH_LIST.filter((mealItem) => {
    return catId;
  });

  const selectedNakatha = NAKATH_LIST.find(
    (category) => category.id === catId
  );



  const mealItemPropsTest = {
    id: selectedNakatha.id,
    title: selectedNakatha.title,
    date: selectedNakatha.date,
    description: selectedNakatha.description,
    imagePath: selectedNakatha.image,

  };

  useLayoutEffect(() => {
    const categoryTitle = NAKATH_LIST.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      date: item.date,
      description: item.description,
      imagePath: item.image,

    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>

      <NakathItem {...mealItemPropsTest} />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
