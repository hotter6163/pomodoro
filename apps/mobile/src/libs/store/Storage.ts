import AsyncStorage from "@react-native-async-storage/async-storage";

type StorageTransformer<T> = {
  encode: (value: Partial<T>) => string;
  decode: (value: string) => T;
};

export class Storage<T> {
  private readonly key: string;
  private readonly transformer: StorageTransformer<T>;

  constructor(key: string, transformer: StorageTransformer<T>) {
    this.key = key;
    this.transformer = transformer;
  }

  async set(value: T): Promise<void> {
    const transformedValue = this.transformer.encode(value);
    return AsyncStorage.setItem(this.key, transformedValue);
  }

  async merge(value: Partial<T>) {
    const transformedValue = this.transformer.encode(value);
    return AsyncStorage.mergeItem(this.key, transformedValue);
  }

  async get(): Promise<T | null> {
    const storedValue = await AsyncStorage.getItem(this.key);
    return storedValue ? this.transformer.decode(storedValue) : null;
  }

  async remove(): Promise<void> {
    return AsyncStorage.removeItem(this.key);
  }
}
