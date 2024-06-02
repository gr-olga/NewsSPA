export function formatDate(date: string) {
    const dateObj = new Date(date);
    let month: string | number = dateObj.getMonth() + 1;
    if (month < 10) month = `0${month}`;

    return `${dateObj.getFullYear()}-${month}-${dateObj.getDate()}`;
}