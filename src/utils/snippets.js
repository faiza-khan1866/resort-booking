export const formattedDate = (date, format) => {
    date = new Date(date);
    if (format === "yyyy-MM-dd") {

        const year = `${date.getFullYear()}`;
        const month = (date.getMonth() + 1).toString().length === 1 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
        const day = (date.getDate()).toString().length === 1 ? `0${date.getDate()}` : `${date.getDate()}`;

        return `${year}-${month}-${day}`
    }
    else {
        return new Date()
    }
}