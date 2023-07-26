export function convertToBase64(file: File): Promise<string> | void {
  if (file) {
    return new Promise((resolve, reject) => {
      const fileReader: FileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => resolve(fileReader.result as string);
      fileReader.onerror = () => reject;
    });
  }
}
