export const copyToClipboard = async (value: string): Promise<void> => {
  try {
    await navigator.clipboard.writeText(value);
  } catch (err) {
    console.error("Error al copiar el texto: ", err);
  }
};
