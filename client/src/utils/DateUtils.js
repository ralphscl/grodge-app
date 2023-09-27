export function dateToEpoch(dateString) {
    // Assuming dateString is in the format "YYYY-MM-DD"
    const dateObject = new Date(dateString);
    const epoch = dateObject.getTime() / 1000; // Convert to seconds
    return epoch;
}

export function epochToDate(epoch) {
    const dateObject = new Date(epoch * 1000); // Convert from seconds to milliseconds
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(dateObject.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}