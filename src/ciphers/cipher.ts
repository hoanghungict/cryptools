export default abstract class Cipher<TKey = void> {
  protected _key: TKey;

  constructor(key: TKey) {
    this._key = key;
  }

  abstract encode(message: string): string;
  abstract decode(message: string): string;
}
