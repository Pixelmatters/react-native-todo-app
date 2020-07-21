import {StyleSheet, ViewStyle} from 'react-native';

interface ITodoItemStyles {
  container: ViewStyle;
  item: ViewStyle;
  actionContainer: ViewStyle;
  hr: ViewStyle;
}

export const styles = StyleSheet.create<ITodoItemStyles>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  item: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingStart: 8,
    fontSize: 20,
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: 8,
  },
  hr: {
    height: 1,
    backgroundColor: 'gray',
  },
});
