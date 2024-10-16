export class HelperClass{

  static convertToRuDate(date?:Date): string{
    if (!date) {
      return "";
    }

    if (!(date instanceof Date)) {
      date = new Date(date);
    }
    return date.getDate().toString().padStart(2, '0') +
      '.' + (date.getMonth() + 1).toString().padStart(2, '0') +
      '.' + date.getFullYear().toString().padStart(4, '0');
  }
}
