import { FormEvent } from 'react';

const colorText = (
  event: FormEvent<HTMLDivElement>
): { inputText: string; coloredText: string } | undefined => {
  if (event.target) {
    const inputText = (event.target as HTMLDivElement).innerText;
    const coloredText = inputText.replace(
      /#(\w+)/g,
      '<span style="color: blue;">#$1</span>'
    );
    return { inputText, coloredText };
  }
};

const colorTextString = (value: string): { coloredText: string } => {
  const coloredText = value.replace(
    /#(\w+)/g,
    '<span style="color: blue;">#$1</span>'
  );
  return { coloredText };
};

export { colorText, colorTextString };
