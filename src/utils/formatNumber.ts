export function formatPhoneNumber(phoneNumber: string): string {
  const country = phoneNumber.slice(0, 2);
  const area = phoneNumber.slice(2, 4);
  const firstPart = phoneNumber.slice(4, 9);
  const secondPart = phoneNumber.slice(9);

  return `+${country} (${area}) ${firstPart}-${secondPart}`;
}
