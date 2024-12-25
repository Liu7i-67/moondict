import {Alert, Platform, ToastAndroid} from 'react-native';

export function to<T, U = Error>(
  promise: Promise<T>,
  errorExt?: object,
): Promise<[U | null, T | undefined]> {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, undefined]>((err: U) => {
      if (errorExt) {
        Object.assign(err as any, errorExt);
      }

      return [err, undefined];
    });
}

export const message = (str: string) => {
  if (Platform.OS === 'android') {
    ToastAndroid.showWithGravityAndOffset(
      str,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
    return;
  }

  Alert.alert(str);
};
