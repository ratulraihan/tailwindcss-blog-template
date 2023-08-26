export default function getReadTime(content) {
    const wordsPerMinute = 200;
    const noOfWords = content.split(/\s/g).length;
    const minutes = noOfWords / wordsPerMinute;
    const readTime = Math.ceil(minutes);

    return readTime;
}