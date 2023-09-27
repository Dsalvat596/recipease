import React, {useState, FC} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import {Colors} from '../../themes/styles';
import Icon from 'react-native-vector-icons/FontAwesome';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type AccordionItemProps = PropsWithChildren<{
  title: string;
}>;

const Expandable: FC<AccordionItemProps> = ({data}): JSX.Element => {
  const [expanded, setExpanded] = useState(false);

  function toggleItem() {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(100, 'linear', 'scaleY'),
    );
    setExpanded(!expanded);
  }
  const body = (
    <View style={styles.accordBody}>
      <Text>{data.aisle}</Text>
    </View>
  );

  return (
    <View style={styles.accordContainer}>
      <TouchableOpacity style={styles.accordHeader} onPress={toggleItem}>
        <Text style={styles.accordTitle}>{data.name}</Text>
        <Icon
          name={expanded ? 'chevron-up' : 'chevron-down'}
          size={20}
          color="#bbb"
        />
      </TouchableOpacity>
      {expanded && body}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  accordContainer: {
    shadowColor: '#000',
    backgroundColor: Colors.PRIMARY_COLOR,
    shadowOffset: {width: 0, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  accordHeader: {
    padding: 12,
    color: '#eee',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  accordTitle: {
    fontSize: 20,
  },
  accordBody: {
    padding: 12,
  },
  textSmall: {
    fontSize: 16,
  },
  seperator: {
    height: 12,
  },
});

export default Expandable;
