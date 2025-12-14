const BAD_WORDS = [
    'badword1', 'badword2', 'badword3' // Placeholder list
    // In a real app, use a comprehensive list or library
];

export const containsProfanity = (text) => {
    if (!text) return false;
    const lowerText = text.toLowerCase();
    return BAD_WORDS.some(word => lowerText.includes(word));
};
